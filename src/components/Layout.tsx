import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { BagIcon, ChevronLeftIcon, GridIcon, HomeIcon, PinIcon, ShieldIcon, TruckIcon } from "./Icons";
import { branch } from "../data/mockData";
import type { Screen } from "../types";

type AppShellProps = {
  children: ReactNode;
  active: "Home" | "Categories" | "Cart" | "Orders";
  cartCount: number;
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
  backLabel?: string;
  headerVariant?: "delivery" | "detail";
  sticky?: ReactNode;
  screenKey?: string;
};

type PhoneFrameProps = {
  children: ReactNode;
};

function getPhonePreviewScale() {
  if (typeof window === "undefined" || !window.matchMedia("(min-width: 640px)").matches) {
    return 1;
  }

  const horizontalScale = (window.innerWidth - 40) / 430;
  const verticalScale = (window.innerHeight - 96) / 902;
  return Math.min(horizontalScale, verticalScale, 1);
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  const [previewScale, setPreviewScale] = useState(getPhonePreviewScale);

  useLayoutEffect(() => {
    const updateScale = () => {
      setPreviewScale(getPhonePreviewScale());
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main className="grid h-dvh w-full max-w-full overflow-hidden bg-[#EAF2ED] text-savt-ink sm:place-items-center sm:p-4">
      <div
        style={
          {
            "--iphone-preview-scale": previewScale,
            width: "calc(430px * var(--iphone-preview-scale))",
            height: "calc(902px * var(--iphone-preview-scale))"
          } as CSSProperties
        }
        className="contents sm:block"
      >
        <div className="relative flex h-dvh min-h-0 w-full min-w-0 max-w-full bg-[#F7FAF8] shadow-2xl sm:h-[902px] sm:w-[430px] sm:max-w-none sm:origin-top-left sm:rounded-[58px] sm:bg-slate-950 sm:p-[10px] sm:shadow-[0_28px_80px_rgba(15,23,42,0.26)] sm:ring-1 sm:ring-white/20 sm:[transform:scale(var(--iphone-preview-scale))]">
          <div className="pointer-events-none absolute inset-x-0 top-[5px] z-40 hidden justify-center sm:flex">
            <div className="h-[35px] w-[126px] rounded-full bg-black shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]" />
          </div>
          <div className="pointer-events-none absolute right-[5px] top-[140px] hidden h-[86px] w-[4px] rounded-r-full bg-slate-900 sm:block" />
          <div className="pointer-events-none absolute left-[5px] top-[132px] hidden h-[54px] w-[4px] rounded-l-full bg-slate-900 sm:block" />
          <div className="pointer-events-none absolute left-[5px] top-[208px] hidden h-[78px] w-[4px] rounded-l-full bg-slate-900 sm:block" />
          {children}
        </div>
      </div>
    </main>
  );
}

export function AppShell({
  children,
  active,
  cartCount,
  onNavigate,
  onBack,
  backLabel = "Back",
  headerVariant = "delivery",
  sticky,
  screenKey
}: AppShellProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [screenKey]);

  return (
    <PhoneFrame>
      <section className="relative flex h-dvh min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden bg-[#F7FAF8] sm:h-[874px] sm:w-[402px] sm:max-w-[402px] sm:rounded-[48px] sm:pt-5">
        <div ref={scrollRef} className={`app-scroll no-scrollbar relative min-h-0 flex-1 overflow-y-auto overscroll-contain ${sticky ? "pb-8" : "pb-6"}`}>
          {headerVariant === "detail" ? (
            <DetailHeader onBack={onBack} backLabel={backLabel} />
          ) : (
            <DeliveryHeader onBack={onBack} backLabel={backLabel} />
          )}
          {children}
        </div>
        {sticky}
        <BottomNav active={active} cartCount={cartCount} onNavigate={onNavigate} />
      </section>
    </PhoneFrame>
  );
}

function DetailHeader({ onBack, backLabel }: { onBack: () => void; backLabel: string }) {
  return (
    <header className="z-20 bg-white px-4 pb-2.5 pt-3">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
        <span>9:41</span>
        <span>5G 100%</span>
      </div>
      <div className="mt-3 flex min-h-11 items-center justify-between gap-3">
        <button
          type="button"
          aria-label={backLabel}
          onClick={onBack}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-slate-950 transition active:scale-95"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <span className="text-[12px] font-black tracking-[0.18em] text-slate-950">CKS GO</span>
        <button
          type="button"
          aria-label="More product options"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[22px] font-black leading-none text-slate-950 transition active:scale-95"
        >
          ...
        </button>
      </div>
    </header>
  );
}

function DeliveryHeader({ onBack, backLabel }: { onBack: () => void; backLabel: string }) {
  return (
    <header className="z-20 border-b border-slate-100/80 bg-white/95 px-4 pb-3 pt-3 shadow-[0_8px_22px_rgba(15,23,42,0.035)] backdrop-blur-xl">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
        <span>9:41</span>
        <span>5G 100%</span>
      </div>
      <div className="mt-3 flex min-h-10 items-center justify-between gap-3">
        <button
          type="button"
          aria-label={backLabel}
          onClick={onBack}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-100 bg-white text-savt-dark shadow-sm transition active:scale-95"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <span className="text-[13px] font-black tracking-[0.16em] text-slate-950">CKS GO</span>
        <span className="w-11" aria-hidden="true" />
      </div>
      <div className="mt-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-2 text-[12px] font-black text-savt-dark">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-savt-light text-savt-dark">
              <PinIcon className="h-3.5 w-3.5" />
            </span>
            <span className="truncate">Delivering from {branch.name}</span>
          </div>
          <div className="grid min-h-8 shrink-0 place-items-center rounded-full border border-emerald-100 bg-savt-light px-3 text-[11.5px] font-black text-savt-dark shadow-sm">
            {branch.eta}
          </div>
        </div>
        <button className="mt-1 flex min-h-9 max-w-full items-center text-left text-[17px] font-black leading-5 text-slate-950">
          <span className="truncate">Deliver to {branch.address}</span>
        </button>
        <div className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-500">
          <ShieldIcon className="h-3.5 w-3.5 text-savt-dark" />
          <span>{branch.note}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-[14px] bg-slate-50 px-2.5 py-1 text-[10px] font-bold leading-3 text-slate-600">
        <TruckIcon className="h-3.5 w-3.5 shrink-0 text-savt-dark" />
        <span className="truncate">Nearest branch assigned automatically. Change address anytime.</span>
      </div>
    </header>
  );
}

type BottomNavProps = {
  active: AppShellProps["active"];
  cartCount: number;
  onNavigate: (screen: Screen) => void;
};

function BottomNav({ active, cartCount, onNavigate }: BottomNavProps) {
  const items = [
    { label: "Home", icon: HomeIcon, action: () => onNavigate("home") },
    { label: "Categories", icon: GridIcon, action: () => onNavigate("listing") },
    { label: "Cart", icon: BagIcon, action: () => onNavigate("cart"), count: cartCount },
    { label: "Orders", icon: TruckIcon, action: () => onNavigate("tracking") }
  ];

  return (
    <nav className="z-30 grid h-[88px] grid-cols-4 border-t border-slate-100 bg-white/95 px-4 pb-3 pt-2 shadow-nav backdrop-blur-xl">
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
            {!!item.count && item.label === "Cart" && (
              <span className="absolute right-4 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-savt-green px-1 text-[10px] font-black text-white shadow-sm">
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
