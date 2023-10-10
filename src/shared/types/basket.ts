export interface IBasketCard {
  product_id: number;
  name: string;
  photo: string;
  price_name?: string | null | undefined;
  modification?: number | null;
  count: number;
  totalCount?: number;
  price: number;
  amount: number;
}
