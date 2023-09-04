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
  categories: string;
  date: string;
  icon: any;
};

export type Customers = {
  id: number;
  name: string;
  phone: string;
  balance: number;
  totalorder: number;
  created: string;
  status: string;
  icon: any;
};

export type Coupons = {
  code: number;
  percent: number;
  currency: number;
  created: string;
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
  couponcode: string;
  bypercent: number;
  bycurrency: number;
  expireddate: string;
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
  price: Int;
  description: string;
  productgallery: string;
  sku: string;
  productcategoryId: string;
};
