export interface bill {
  id: string;
  custumer: string;
  order: [
    {
      id: string;
      product: string;
      quantity: Number;
      name: String;
      price: Number;
    }
  ];
  total: Number;
}
