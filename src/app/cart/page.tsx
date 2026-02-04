import Header from "@/components/header";
import { CartView } from "./CartView";

export const metadata = {
  title: "Cart | King Ambrosi",
  description: "Your cart",
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <CartView />
      </main>
    </div>
  );
}
