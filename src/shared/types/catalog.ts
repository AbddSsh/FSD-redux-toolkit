export interface ICard {
  menu_product_id: number;
  product_id: number;
  photo: string;
  name: string;
  description: string;
  mode: string;
  price: {
    id: number;
    price: number;
    name?: string;
  }[];
  product_status: string;
  menu_product_status: string;
}
