import { MinusIcon, PlusIcon } from "./Icons";

type QuantitySelectorProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function QuantitySelector({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) {
  return (
    <div className="flex h-12 items-center rounded-full bg-savt-light p-0.5">
      <button
        onClick={onDecrement}
        className="grid h-11 w-11 place-items-center rounded-full text-savt-dark transition active:bg-white"
        aria-label="Decrease quantity"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="w-8 text-center text-sm font-black text-slate-950">{quantity}</span>
      <button
        onClick={onIncrement}
        className="grid h-11 w-11 place-items-center rounded-full bg-white text-savt-dark shadow-sm transition active:scale-95"
        aria-label="Increase quantity"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
