"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import type { PrintSize } from "@/lib/artworks";

interface ArtDetailFormProps {
  artworkSlug: string;
  artworkTitle: string;
  imagePath: string;
  printSizes: PrintSize[];
}

export function ArtDetailForm({
  artworkSlug,
  artworkTitle,
  imagePath,
  printSizes,
}: ArtDetailFormProps) {
  const [selectedSize, setSelectedSize] = useState<PrintSize>(printSizes[0]);
  const [added, setAdded] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const { addItem } = useCart();

  const priceDisplay = (cents: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);

  const handleAddToCart = () => {
    const rect = addButtonRef.current?.getBoundingClientRect();
    addItem(
      {
        artworkSlug,
        artworkTitle,
        imagePath,
        sizeId: selectedSize.id,
        sizeLabel: selectedSize.label,
        dimensions: selectedSize.dimensions,
        priceCents: selectedSize.priceCents,
      },
      rect ? { fromRect: rect } : undefined
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6 sm:p-8">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
        Print options
      </h2>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Size
      </label>
      <select
        value={selectedSize.id}
        onChange={(e) => {
          const size = printSizes.find((s) => s.id === e.target.value);
          if (size) setSelectedSize(size);
        }}
        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition mb-6"
      >
        {printSizes.map((size) => (
          <option key={size.id} value={size.id}>
            {size.label} — {size.dimensions} — {priceDisplay(size.priceCents)}
          </option>
        ))}
      </select>
      <p className="text-gray-400 text-sm mb-6">
        Archival-quality print on fine art paper. Allow 1–2 weeks for
        production and shipping.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <motion.button
          ref={addButtonRef}
          type="button"
          onClick={handleAddToCart}
          disabled={added}
          className="flex-1 relative py-4 px-6 rounded-xl font-semibold overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="added"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute inset-0 flex items-center justify-center gap-2 bg-emerald-600 text-white"
              >
                <span className="text-lg">✓</span> Added to cart
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Add to cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        <Link
          href="/cart"
          className="flex-1 text-center py-4 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
        >
          Proceed to checkout
        </Link>
      </div>
      <p className="text-gray-500 text-xs mt-3 text-center">
        Cart is saved in this browser. Checkout via email when you’re ready.
      </p>
    </div>
  );
}
