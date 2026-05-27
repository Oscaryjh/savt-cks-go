import type { ReactNode } from "react";
import type { Product } from "../types";
import { CoinIcon, PercentBadgeIcon, PlusIcon } from "./Icons";

type ProductCardProps = {
  product: Product;
  onOpen: (product: Product) => void;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onOpen, onAdd }: ProductCardProps) {
  const savings = Math.max(0, product.originalPrice - product.memberPrice);

  return (
    <article className="group flex min-h-[306px] flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-card transition duration-200 active:scale-[0.985]">
      <button onClick={() => onOpen(product)} className="block w-full p-2.5 text-left">
        <div className={`relative grid h-[132px] place-items-center overflow-hidden rounded-[24px] bg-gradient-to-br ${product.color}`}>
          <div className="absolute inset-x-4 bottom-3 h-5 rounded-full bg-slate-900/10 blur-sm" />
          {product.badge && (
            <span className="absolute left-2 top-2 z-20 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-savt-dark shadow-sm backdrop-blur">
              {product.badge}
            </span>
          )}
          <span className="absolute right-2 top-2 z-20 rounded-full bg-slate-950 px-2.5 py-1 text-[10px] font-black text-white shadow-sm">
            Save RM{savings.toFixed(0)}
          </span>
          <ProductVisual product={product} size="card" />
        </div>
        <div className="mt-3 min-h-[50px]">
          <h3 className="line-clamp-2 text-[14px] font-black leading-[18px] text-slate-950">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[11px] font-semibold text-slate-400">{product.unit}</p>
        </div>
        <div className="mt-2 rounded-[18px] bg-slate-50 px-3 py-2">
          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-savt-dark">Member price</p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="text-[18px] font-black leading-none text-slate-950">RM {product.memberPrice.toFixed(2)}</span>
            <span className="text-[10px] font-bold text-slate-400 line-through">
              RM {product.originalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <ValueTag tone="points">+{product.points} pts</ValueTag>
          <ValueTag tone="cashback">{product.cashback}% back</ValueTag>
        </div>
      </button>
      <button
        onClick={() => onAdd(product)}
        className="mx-2.5 mb-2.5 mt-auto flex h-11 items-center justify-center gap-1.5 rounded-[18px] bg-savt-green text-sm font-black text-white shadow-button transition active:scale-[0.98]"
      >
        <PlusIcon className="h-4 w-4" />
        Add
      </button>
    </article>
  );
}

export function ValueTag({ children, tone }: { children: ReactNode; tone: "points" | "cashback" | "member" }) {
  const styles = {
    points: "border-amber-200/80 bg-amber-50 text-amber-800",
    cashback: "border-emerald-200/80 bg-emerald-50 text-savt-dark",
    member: "border-sky-200/80 bg-sky-50 text-sky-700"
  };

  const Icon = tone === "cashback" ? PercentBadgeIcon : tone === "points" ? CoinIcon : undefined;

  return (
    <span className={`inline-flex min-h-[24px] items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-black ${styles[tone]}`}>
      {Icon && <Icon className="h-3 w-3" />}
      {children}
    </span>
  );
}

export function ProductVisual({ product, size = "detail" }: { product: Product; size?: "card" | "detail" | "cart" }) {
  const scale = size === "detail" ? "h-40 w-40" : size === "cart" ? "h-16 w-16" : "h-24 w-24";
  const productScale = size === "detail" ? "scale-125" : size === "cart" ? "scale-75" : "scale-100";
  const imageClass =
    size === "detail"
      ? "h-[168px] w-[168px] rounded-[34px]"
      : size === "cart"
        ? "h-[66px] w-[66px] rounded-[18px]"
        : "h-[98px] w-[98px] rounded-[24px]";

  if (product.imageUrl) {
    return (
      <div className={`relative grid ${scale} place-items-center`}>
        <div className="absolute bottom-2 h-5 w-24 rounded-full bg-slate-950/10 blur-md" />
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className={`${imageClass} relative z-10 object-cover shadow-md ring-1 ring-white/80`}
        />
      </div>
    );
  }

  return (
    <div className={`relative grid ${scale} place-items-center`}>
      <div className="absolute bottom-2 h-5 w-24 rounded-full bg-slate-950/10 blur-md" />
      <div className={`relative ${productScale}`}>
        {product.id === "grapes" && <GrapesVisual />}
        {product.id === "eggs" && <EggsVisual />}
        {product.id === "milk" && <MilkVisual />}
        {product.id === "rice" && <RiceVisual />}
        {product.id === "milo" && <MiloVisual />}
        {product.id === "detergent" && <DetergentVisual />}
      </div>
    </div>
  );
}

function GrapesVisual() {
  const grapes = [
    { left: 24, top: 16 },
    { left: 8, top: 32 },
    { left: 28, top: 32 },
    { left: 48, top: 32 },
    { left: 18, top: 48 },
    { left: 38, top: 48 },
    { left: 28, top: 64 }
  ];

  return (
    <div className="relative h-[86px] w-[84px]">
      <div className="absolute left-9 top-0 h-8 w-5 -rotate-12 rounded-full bg-emerald-600" />
      <div className="absolute left-10 top-2 h-4 w-9 -rotate-12 rounded-full bg-lime-500" />
      {grapes.map((grape) => (
        <span key={`${grape.left}-${grape.top}`} style={grape} className="absolute h-8 w-8 rounded-full border-2 border-white/70 bg-violet-500 shadow-sm" />
      ))}
    </div>
  );
}

function EggsVisual() {
  return (
    <div className="relative h-[78px] w-[92px] rounded-[24px] bg-amber-100 p-2 shadow-md">
      <div className="absolute inset-x-2 top-4 h-3 rounded-full bg-amber-200" />
      <div className="grid h-full grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="rounded-full bg-white shadow-inner" />
        ))}
      </div>
      <div className="absolute -right-2 top-5 h-7 w-4 rounded-r-xl bg-amber-200" />
    </div>
  );
}

function MilkVisual() {
  return (
    <div className="relative h-[92px] w-[62px] rounded-b-[18px] bg-white shadow-md">
      <div className="absolute left-0 top-0 h-0 w-0 border-l-[31px] border-r-[31px] border-t-[22px] border-l-transparent border-r-transparent border-t-sky-200" />
      <div className="absolute left-0 top-[20px] h-5 w-full bg-sky-300" />
      <div className="absolute inset-x-2 top-12 rounded-xl bg-sky-50 px-1.5 py-2 text-center text-[10px] font-black text-sky-700">MILK</div>
    </div>
  );
}

function RiceVisual() {
  return (
    <div className="relative h-[92px] w-[72px] rounded-[22px] bg-white shadow-md">
      <div className="absolute inset-x-3 top-0 h-5 rounded-b-xl bg-stone-200" />
      <div className="absolute inset-x-3 top-9 rounded-2xl bg-emerald-50 py-3 text-center text-[10px] font-black text-savt-dark">RICE</div>
      <div className="absolute bottom-3 left-4 right-4 flex justify-between">
        <span className="h-1.5 w-2 rounded-full bg-stone-300" />
        <span className="h-1.5 w-2 rounded-full bg-stone-300" />
        <span className="h-1.5 w-2 rounded-full bg-stone-300" />
      </div>
    </div>
  );
}

function MiloVisual() {
  return (
    <div className="relative h-[88px] w-[64px] rounded-[20px] bg-emerald-700 shadow-md">
      <div className="absolute inset-x-2 top-3 rounded-full bg-white/95 py-1 text-center text-[10px] font-black text-emerald-700">MILO</div>
      <div className="absolute inset-x-3 bottom-3 h-9 rounded-2xl bg-lime-400/85" />
      <div className="absolute left-2 right-2 top-0 h-3 rounded-full bg-emerald-500" />
    </div>
  );
}

function DetergentVisual() {
  return (
    <div className="relative h-[94px] w-[66px]">
      <div className="absolute left-[21px] top-0 h-5 w-7 rounded-t-lg bg-cyan-300" />
      <div className="absolute bottom-0 h-[78px] w-[66px] rounded-[22px] bg-cyan-500 shadow-md" />
      <div className="absolute left-3 right-3 top-11 rounded-2xl bg-white/90 py-2 text-center text-[9px] font-black text-cyan-700">CLEAN</div>
      <div className="absolute left-3 top-3 h-8 w-9 rounded-full border-[7px] border-white/80" />
    </div>
  );
}
