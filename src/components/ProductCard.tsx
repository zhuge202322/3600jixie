import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.slug}`}
      className="group block border border-line bg-paper transition hover:border-gold hover:shadow-md"
    >
      {/* brand band */}
      <div className="flex items-center justify-between bg-gold px-3 py-1.5">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-paper">
          RAYGOO PARTS
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper">
          {product.partNumber}
        </span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-bone">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ash">{product.short}</p>
        <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
          <span className="font-mono text-xs font-bold text-gold">{product.priceRange}</span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ash transition group-hover:text-gold">
            Detail <ArrowRight size={12} className="transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
