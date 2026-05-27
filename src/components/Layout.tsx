import { useEffect, useRef, type ReactNode } from "react";
import { BagIcon, GridIcon, HomeIcon, PinIcon, RewardIcon, ShieldIcon, TruckIcon, UserIcon } from "./Icons";
import { branch } from "../data/mockData";
import type { Screen } from "../types";

type AppShellProps = {
  children: ReactNode;
  active: "Home" | "Categories" | "Orders" | "Rewards" | "Profile";
  cartCount: number;
  onNavigate: (screen: Screen) => void;
  sticky?: ReactNode;
  screenKey?: string;
};

export function AppShell({ children, active, cartCount, onNavigate, sticky, screenKey }: AppShellProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [screenKey]);

  return (
    <main className="h-dvh overflow-hidden bg-[#EAF2ED] text-savt-ink sm:py-6">
      <section className="mx-auto flex h-full w-full max-w-[430px] flex-col overflow-hidden bg-[#F7FAF8] shadow-2xl sm:h-[880px] sm:rounded-[34px]">
        <DeliveryHeader />
        <div ref={scrollRef} className={`relative min-h-0 flex-1 overflow-y-auto overscroll-contain ${sticky ? "pb-8" : "pb-6"}`}>{children}</div>
        {sticky}
        <BottomNav active={active} cartCount={cartCount} onNavigate={onNavigate} />
      </section>
    </main>
  );
}

function DeliveryHeader() {
  return (
    <header className="z-20 border-b border-slate-100/80 bg-white/95 px-5 pb-4 pt-3 shadow-[0_8px_26px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
        <span>9:41</span>
        <span>5G 100%</span>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 text-[12px] font-black text-savt-dark">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-savt-light text-savt-dark">
              <PinIcon className="h-4 w-4" />
            </span>
            <span className="truncate">Delivering from {branch.name}</span>
          </div>
          <div className="grid min-h-9 shrink-0 place-items-center rounded-full border border-emerald-100 bg-savt-light px-3 text-xs font-black text-savt-dark shadow-sm">
            {branch.eta}
          </div>
        </div>
        <button className="mt-1 flex min-h-11 max-w-full items-center text-left text-[18px] font-black leading-6 text-slate-950">
          <span className="truncate">Deliver to {branch.address}</span>
        </button>
        <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
          <ShieldIcon className="h-3.5 w-3.5 text-savt-dark" />
          <span>{branch.note}</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600">
        <TruckIcon className="h-4 w-4 text-savt-dark" />
        <span>Nearest branch assigned automatically. Change address anytime.</span>
      </div>
    </header>
  );
}

function BottomNav({ active, cartCount, onNavigate }: Omit<AppShellProps, "children" | "sticky">) {
  const items = [
    { label: "Home", icon: HomeIcon, action: () => onNavigate("home") },
    { label: "Categories", icon: GridIcon, action: () => onNavigate("listing") },
    { label: "Orders", icon: BagIcon, action: () => onNavigate("tracking"), count: cartCount },
    { label: "Rewards", icon: RewardIcon, action: () => onNavigate("home") },
    { label: "Profile", icon: UserIcon, action: () => onNavigate("home") }
  ];

  return (
    <nav className="z-30 grid h-[88px] grid-cols-5 border-t border-slate-100 bg-white/95 px-3 pb-3 pt-2 shadow-nav backdrop-blur-xl">
      {items.map((item) => {
        const Icon = item.icon;
        const selected = active === item.label;
        return (
          <button
            key={item.label}
            onClick={item.action}
            className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-[20px] text-[10px] font-bold transition active:scale-95 ${
              selected ? "text-savt-dark" : "text-slate-400"
            }`}
          >
            <span className={`grid h-9 w-12 place-items-center rounded-2xl transition ${selected ? "bg-savt-light shadow-sm ring-1 ring-emerald-100" : ""}`}>
              <Icon className="h-5 w-5" />
            </span>
            <span>{item.label}</span>
            {selected && <span className="absolute bottom-0.5 h-1 w-5 rounded-full bg-savt-green" />}
            {!!item.count && item.label === "Orders" && (
              <span className="absolute right-3 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-savt-green px-1 text-[10px] font-black text-white shadow-sm">
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
