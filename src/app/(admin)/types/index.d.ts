export type Person = {
  id: number;
  date: string;
  product: string;
  payment: string;
  fullfillments: string;
  total: number;
  icon: any;
};

export type Product = {
  id: number;
  name: string;
  sku: string;
  stock: string;
  price: number;
  discountprice: number;
  productgallery: string;
  productcategory: any;
  createdAt: string;
  icon: any;
};

export type Coupons = {
  id: string;
  percent: number;
  currency: number;
  createdAt: string;
  status: string;
  icon: any;
};

export type Categories = {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  icon: any;
};

export type FormValues = {
  fullname: string;
  displayname: string;
  email: string;
  role: string;
  address: string;
  bio: string;
};

export type FormCoupons = {
  id: string;
  percent: number;
  currency: number;
  createdAt: string;
  status: string;
  description: string;
};

export type FormCategory = {
  id: number;
  name: string;
  slug: string;
  created: string;
  description: string;
};

export type FormProduct = {
  id: number;
  name: string;
  productsummary: string;
  price: number;
  discountprice: number;
  quantity: number;
  description: string;
  productgallery: string;
  sku: string;
  productcategoryId: string;
  icon: any;
};

export type Order = {
  id: string;
  product: json;
  payment: string;
  fullfillment: string;
  total: float;
  createdAt: string;
  icon: any;
};
