"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { cartTotalCents } from "@/lib/cart";

export function CartView() {
  const { items, removeItem, count } = useCart();
  const totalCents = cartTotalCents(items);
  const totalDisplay = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalCents / 100);

  if (count === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
        <p className="text-gray-400 mb-8">
          Add prints from the gallery to get started.
        </p>
        <Link
          href="/#gallery"
          className="inline-block py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
        >
          Browse art
        </Link>
      </div>
    );
  }

  const checkoutBody = items
    .map(
      (i) =>
        `• ${i.artworkTitle} — ${i.sizeLabel} (${i.dimensions}) — ${(i.priceCents / 100).toFixed(2)} USD`
    )
    .join("\n");
  const checkoutHref = `mailto:hello@kingambrosi.com?subject=Print order (${items.length} items)&body=I'd like to order:\n\n${encodeURIComponent(checkoutBody)}\n\nTotal: ${totalDisplay}\n\n[Add your name and shipping address here]`;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Cart</h1>
      <ul className="space-y-4 mb-10">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex gap-4 p-4 rounded-xl bg-gray-800/60 border border-gray-700/60"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
              <Image
                src={item.imagePath}
                alt={item.artworkTitle}
                fill
                className="object-cover"
                unoptimized
                sizes="80px"
              />
            </div>
            <div className="flex-grow min-w-0">
              <p className="font-semibold text-white truncate">{item.artworkTitle}</p>
              <p className="text-sm text-gray-400">
                {item.sizeLabel} — {item.dimensions}
              </p>
              <p className="text-sm text-gray-300 mt-1">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.priceCents / 100)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-400 transition-colors text-sm flex-shrink-0"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-700 pt-8">
        <p className="text-xl font-bold text-white">Total: {totalDisplay}</p>
        <a
          href={checkoutHref}
          className="inline-block text-center py-4 px-8 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
        >
          Proceed to checkout
        </a>
      </div>
    </div>
  );
}
