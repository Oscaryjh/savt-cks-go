import type { Category, Product } from "../types";

export const branch = {
  name: "CKS Lintas",
  address: "Taman Ria, Tawau",
  eta: "30-45 mins",
  note: "Serving you from your nearest CKS"
};

export const categories: Category[] = [
  { id: "drinks", name: "Drinks", icon: "DR" },
  { id: "snacks", name: "Snacks", icon: "SN" },
  { id: "frozen", name: "Frozen", icon: "FZ" },
  { id: "noodles", name: "Noodles", icon: "ND" },
  { id: "household", name: "Household", icon: "HH" },
  { id: "baby", name: "Baby", icon: "BB" },
  { id: "fresh", name: "Fresh food", icon: "FR" }
];

export const products: Product[] = [
  {
    id: "grapes",
    name: "Seedless Grapes",
    unit: "500g punnet",
    category: "fresh",
    price: 12.9,
    memberPrice: 9.9,
    originalPrice: 12.9,
    points: 120,
    cashback: 8,
    description: "Sweet imported seedless grapes selected by the CKS produce team and packed fresh from your nearest branch.",
    color: "from-emerald-100 to-lime-50",
    imageLabel: "Grapes",
    imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=560&q=80",
    badge: "Member Pick"
  },
  {
    id: "coke-zero",
    name: "Coca-Cola Zero Sugar",
    unit: "320ml x 6 cans",
    category: "drinks",
    price: 12.9,
    memberPrice: 10.9,
    originalPrice: 13.9,
    points: 95,
    cashback: 6,
    description: "Chilled soft drinks for gatherings, packed together with your supermarket order.",
    color: "from-red-100 to-slate-50",
    imageLabel: "Cola",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=560&q=80",
    badge: "Weekly Deal"
  },
  {
    id: "lays",
    name: "Classic Potato Chips",
    unit: "160g party pack",
    category: "snacks",
    price: 8.9,
    memberPrice: 7.5,
    originalPrice: 9.5,
    points: 65,
    cashback: 5,
    description: "Crunchy potato chips for movie night, lunch boxes, and quick pantry restocks.",
    color: "from-amber-100 to-yellow-50",
    imageLabel: "Chips",
    imageUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=560&q=80",
    badge: "Snack Pick"
  },
  {
    id: "frozen-mixed-veg",
    name: "Frozen Mixed Vegetables",
    unit: "1kg pack",
    category: "frozen",
    price: 12.5,
    memberPrice: 10.8,
    originalPrice: 13.5,
    points: 90,
    cashback: 6,
    description: "Quick-cook vegetables kept frozen until dispatch and delivered in insulated bags.",
    color: "from-cyan-100 to-emerald-50",
    imageLabel: "Frozen",
    imageUrl: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=560&q=80"
  },
  {
    id: "maggi-curry",
    name: "Instant Noodles Curry",
    unit: "5 packs",
    category: "noodles",
    price: 6.9,
    memberPrice: 5.8,
    originalPrice: 7.5,
    points: 55,
    cashback: 4,
    description: "Pantry-friendly instant noodles for quick meals and late-night cravings.",
    color: "from-orange-100 to-red-50",
    imageLabel: "Noodles",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=560&q=80",
    badge: "Buy Again"
  },
  {
    id: "detergent",
    name: "Laundry Liquid Detergent",
    unit: "2.4L bottle",
    category: "household",
    price: 24.9,
    memberPrice: 19.9,
    originalPrice: 26.9,
    points: 180,
    cashback: 7,
    description: "Household cleaning essential delivered with your grocery basket.",
    color: "from-cyan-100 to-teal-50",
    imageLabel: "Clean",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=560&q=80",
    badge: "Best Value"
  },
  {
    id: "diapers",
    name: "Baby Dry Diapers",
    unit: "M size 42 pcs",
    category: "baby",
    price: 42.9,
    memberPrice: 36.9,
    originalPrice: 45.9,
    points: 260,
    cashback: 8,
    description: "Soft everyday diapers for baby care restocks, picked from the nearest CKS branch.",
    color: "from-sky-100 to-pink-50",
    imageLabel: "Baby",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=560&q=80"
  },
  {
    id: "fresh-chicken",
    name: "Fresh Chicken Breast",
    unit: "500g tray",
    category: "fresh",
    price: 15.9,
    memberPrice: 13.9,
    originalPrice: 16.9,
    points: 130,
    cashback: 6,
    description: "Fresh chicken breast packed chilled and handled carefully for same-day meals.",
    color: "from-rose-100 to-orange-50",
    imageLabel: "Chicken",
    imageUrl: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=560&q=80",
    badge: "Fresh Today"
  },
  {
    id: "farm-eggs",
    name: "Grade A Farm Eggs",
    unit: "10 pcs tray",
    category: "fresh",
    price: 10.5,
    memberPrice: 8.9,
    originalPrice: 10.9,
    points: 80,
    cashback: 5,
    description: "Grade A eggs checked and packed carefully before dispatch.",
    color: "from-orange-100 to-amber-50",
    imageLabel: "Eggs",
    imageUrl: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=560&q=80"
  },
  {
    id: "fresh-milk",
    name: "Fresh Milk",
    unit: "1L carton",
    category: "drinks",
    price: 8.5,
    memberPrice: 7.2,
    originalPrice: 8.9,
    points: 70,
    cashback: 4,
    description: "Chilled dairy delivered in insulated bags from your nearest CKS.",
    color: "from-sky-100 to-blue-50",
    imageLabel: "Milk",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=560&q=80"
  },
  {
    id: "jasmine-rice",
    name: "Premium Jasmine Rice",
    unit: "5kg bag",
    category: "household",
    price: 42.9,
    memberPrice: 34.9,
    originalPrice: 43.9,
    points: 260,
    cashback: 6,
    description: "Premium jasmine rice for family meals with SAVT member savings.",
    color: "from-stone-100 to-white",
    imageLabel: "Rice",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=560&q=80",
    badge: "Best Seller"
  },
  {
    id: "ice-cream",
    name: "Vanilla Ice Cream Tub",
    unit: "1.5L",
    category: "frozen",
    price: 19.9,
    memberPrice: 16.8,
    originalPrice: 21.9,
    points: 140,
    cashback: 7,
    description: "Family-size frozen dessert delivered cold from your nearest CKS.",
    color: "from-blue-100 to-indigo-50",
    imageLabel: "Ice Cream",
    imageUrl: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=560&q=80"
  }
];

export const flashSaleProducts = products.filter((product) => ["coke-zero", "lays"].includes(product.id));
export const memberExclusiveProducts = products.filter((product) => ["grapes", "detergent"].includes(product.id));
export const recommendedProducts = products.filter((product) => ["fresh-chicken", "fresh-milk"].includes(product.id));
export const weeklyDealsProducts = products.filter((product) => ["frozen-mixed-veg", "diapers"].includes(product.id));
export const buyAgainProducts = products.filter((product) => ["maggi-curry", "farm-eggs"].includes(product.id));

export const vouchers = [
  {
    id: "CKSGO8",
    title: "RM8 off groceries",
    subtitle: "Min spend RM60 - CKS GO",
    code: "CKSGO8",
    discount: 8
  }
];
