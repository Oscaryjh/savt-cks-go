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
    <article className="group relative min-h-[232px] pb-2 transition duration-200 active:scale-[0.985]">
      <button onClick={() => onOpen(product)} className="block w-full text-left">
        <div className="relative grid h-[136px] place-items-center overflow-hidden rounded-[20px] bg-white pb-6 pt-1 shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-slate-100/70">
          <div className="absolute inset-x-7 bottom-5 h-4 rounded-full bg-slate-900/10 blur-sm" />
          {product.badge && (
            <span className="absolute left-2 top-2 z-30 max-w-[82px] truncate rounded-full bg-white/95 px-2 py-1 text-[7.5px] font-extrabold leading-none text-savt-dark shadow-[0_2px_8px_rgba(15,23,42,0.10)] ring-1 ring-emerald-100 backdrop-blur-sm">
              {product.badge}
            </span>
          )}
          <ProductVisual product={product} size="card" />
          {savings > 0 && (
            <div className="absolute inset-x-0 bottom-0 grid h-6 place-items-center bg-savt-green text-[10px] font-black text-white">
              RM{savings.toFixed(2)} off
            </div>
          )}
        </div>
        <div className="px-0.5 pt-2.5">
          <div className="flex items-end gap-1.5">
            <span className="pb-[1px] text-[10px] font-black leading-none text-slate-950">RM</span>
            <span className="text-[17px] font-black leading-[18px] tracking-[-0.01em] text-slate-950">{product.memberPrice.toFixed(2)}</span>
            <span className="pb-[1px] text-[10px] font-medium text-slate-400 line-through decoration-slate-300">
              {product.originalPrice.toFixed(2)}
            </span>
          </div>
          <h3 className="mt-1.5 line-clamp-2 min-h-8 text-[12.5px] font-extrabold leading-4 tracking-[-0.005em] text-slate-950">
            {product.name}
          </h3>
          <p className="mt-0.5 truncate text-[10.5px] font-medium leading-4 text-slate-500">{product.unit}</p>
          <p className="mt-1 text-[9.5px] font-bold leading-3 text-savt-dark">+{product.points} pts / {product.cashback}% back</p>
        </div>
      </button>
      <button
        onClick={() => onAdd(product)}
        className="absolute right-2 top-2 z-20 grid h-[34px] w-[34px] place-items-center rounded-full bg-savt-dark text-white shadow-[0_8px_14px_rgba(22,163,74,0.18)] ring-2 ring-white/95 transition active:scale-95"
        aria-label={`Add ${product.name}`}
      >
        <PlusIcon className="h-[15px] w-[15px]" />
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
    <span className={`inline-flex min-h-5 items-center gap-0.5 rounded-full border px-1.5 py-0.5 text-[8.8px] font-black leading-none ${styles[tone]}`}>
      {Icon && <Icon className="h-2.5 w-2.5" />}
      {children}
    </span>
  );
}

export function ProductVisual({ product, size = "detail" }: { product: Product; size?: "card" | "detail" | "cart" }) {
  const scale = size === "detail" ? "h-[278px] w-full" : size === "cart" ? "h-16 w-16" : "h-[108px] w-full";
  const productScale = size === "detail" ? "scale-125" : size === "cart" ? "scale-75" : "scale-[1.12]";
  const imageClass =
    size === "detail"
      ? "h-[270px] w-full max-w-[380px]"
      : size === "cart"
        ? "h-[66px] w-[66px] rounded-[18px]"
        : "h-[104px] w-full max-w-[154px]";

  if (product.imageUrl) {
    return (
      <div className={`relative grid ${scale} place-items-center`}>
        {size !== "detail" && <div className="absolute bottom-2 h-5 w-24 rounded-full bg-slate-950/10 blur-md" />}
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className={`${imageClass} relative z-10 object-contain ${size === "cart" ? "p-1.5" : "p-0"}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative grid ${scale} place-items-center`}>
      {size !== "detail" && <div className="absolute bottom-2 h-5 w-24 rounded-full bg-slate-950/10 blur-md" />}
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
