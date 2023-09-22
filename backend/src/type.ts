export type Ad = {
  id: number;
  title: string;
  description?: string;
  author: string;
  price: number;
  imageUrl: string;
  location: string;
  createdAt: string | Date;
};
