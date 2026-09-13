export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel?: string;
  description?: string;
};

export const products: Product[] = [
  // Brownies
  { id: 'b1', name: 'Classic Brownie', category: 'BROWNIES', price: 60 },
  { id: 'b2', name: 'Double Chocolate Brownie', category: 'BROWNIES', price: 70 },
  { id: 'b3', name: 'Triple Chocolate Brownie', category: 'BROWNIES', price: 80 },
  { id: 'b4', name: 'Brownie Bites', category: 'BROWNIES', price: 50 },

  // Customisable Cakes
  { id: 'c1', name: 'Chocolate', category: 'CUSTOMISABLE CAKES', price: 550, priceLabel: 'From' },
  { id: 'c2', name: 'Vanilla', category: 'CUSTOMISABLE CAKES', price: 500, priceLabel: 'From' },
  { id: 'c3', name: 'Choco Truffle', category: 'CUSTOMISABLE CAKES', price: 650, priceLabel: 'From' },
  { id: 'c4', name: 'Butterscotch', category: 'CUSTOMISABLE CAKES', price: 600, priceLabel: 'From' },
  { id: 'c5', name: 'Rasmalai', category: 'CUSTOMISABLE CAKES', price: 700, priceLabel: 'From' },

  // Dessert Cups
  { id: 'd1', name: 'Red Velvet', category: 'DESSERT CUPS', price: 100 },
  { id: 'd2', name: 'Chocolate', category: 'DESSERT CUPS', price: 90 },
  { id: 'd3', name: 'Butterscotch', category: 'DESSERT CUPS', price: 90 },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
