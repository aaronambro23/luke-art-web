"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { CartItem } from "@/lib/cart";
import { loadCart, saveCart } from "@/lib/cart";

type FlyFromRect = { left: number; top: number; width: number; height: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  bounceTrigger: number;
  addItem: (item: Omit<CartItem, "id">, options?: { fromRect: DOMRect }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  registerCartIconRef: (el: HTMLElement | null) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [flyFrom, setFlyFrom] = useState<FlyFromRect | null>(null);
  const [badgeBounce, setBadgeBounce] = useState(0);
  const cartIconRef = useRef<HTMLElement | null>(null);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setItems(loadCart());
  }, []);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const registerCartIconRef = useCallback((el: HTMLElement | null) => {
    cartIconRef.current = el;
  }, []);

  const addItem = useCallback(
    (item: Omit<CartItem, "id">, options?: { fromRect: DOMRect }) => {
      const newItem: CartItem = { ...item, id: generateId() };
      setItems((prev) => [...prev, newItem]);
      setBadgeBounce((b) => b + 1);
      if (options?.fromRect) {
        setFlyFrom({
          left: options.fromRect.left + options.fromRect.width / 2,
          top: options.fromRect.top + options.fromRect.height / 2,
          width: options.fromRect.width,
          height: options.fromRect.height,
        });
      }
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const onFlyComplete = useCallback(() => {
    setFlyFrom(null);
  }, []);

  const count = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        bounceTrigger: badgeBounce,
        addItem,
        removeItem,
        clearCart,
        registerCartIconRef,
      }}
    >
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <FlyToCart
            flyFrom={flyFrom}
            cartIconRef={cartIconRef}
            onComplete={onFlyComplete}
          />,
          document.body
        )}
    </CartContext.Provider>
  );
}

function FlyToCart({
  flyFrom,
  cartIconRef,
  onComplete,
}: {
  flyFrom: FlyFromRect | null;
  cartIconRef: React.RefObject<HTMLElement | null>;
  onComplete: () => void;
}) {
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!flyFrom) {
      setTarget(null);
      onComplete();
      return;
    }
    const id = requestAnimationFrame(() => {
      if (cartIconRef.current) {
        const rect = cartIconRef.current.getBoundingClientRect();
        setTarget({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      } else {
        setTimeout(onComplete, 550);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [flyFrom, onComplete]);

  return (
    <AnimatePresence>
      {flyFrom && target && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9999]"
          initial={false}
        >
          {/* Particle burst at source */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                left: flyFrom.left - 4,
                top: flyFrom.top - 4,
                boxShadow: "0 0 8px 2px rgba(255,255,255,0.8)",
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [1, 0.8, 0],
                x: Math.cos((i / 12) * Math.PI * 2) * 80,
                y: Math.sin((i / 12) * Math.PI * 2) * 80,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}
          {/* Flying cart icon toward header */}
          <motion.div
            className="absolute w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{
              left: flyFrom.left - 20,
              top: flyFrom.top - 20,
            }}
            initial={{ scale: 0.3, opacity: 1 }}
            animate={{
              left: target.x - 20,
              top: target.y - 20,
              scale: [0.3, 1.2, 0.5],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onAnimationComplete={onComplete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useCartBadgeBounce(): number {
  const [bounce, setBounce] = useState(0);
  const ctx = useContext(CartContext);
  const prevCount = useRef(0);
  useEffect(() => {
    if (!ctx) return;
    if (ctx.count > prevCount.current) {
      setBounce((b) => b + 1);
    }
    prevCount.current = ctx.count;
  }, [ctx?.count]);
  return bounce;
}
