import create, { GetState, SetState } from "zustand";

type Product = {
  id: number;
  name: string;
};

type ProductStore = {
  products: Product[];
  arroz: string;
  addProduct: (product: Product) => void;
};

const productSlice = (
  set: SetState<ProductStore>,
  get: GetState<ProductStore>
): ProductStore => ({
  // states
  products: [],
  arroz: "arroz",

  // selectors
  // totalProductsLength: () => {},

  // actions
  addProduct: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
});

export const useProductStore = create<ProductStore>(productSlice);
