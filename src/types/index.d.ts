export type NavDataProps = {
  url: string;
};
export type AboutData = {
  img: string;
  title: string;
  subtitle: string;
};

export interface IProduct {
  id: number;
  slug: string;
  title: string;
  img: string;
  subTitle: string;
  price: string;
  discountPrice: string;
}
export interface IRelatedProduct
  extends Array<{
    id: number;
    slug: string;
    title: string;
    img: string;
    subTitle: string;
    price: string;
    discountPrice: string;
  }> {}

export interface IBlogPost {
  id: number;
  author: string;
  img: string;
  icon: string;
  date: string;
  month: string;
  posted: string;
  title: string;
  subTitle: string;
}

export interface IPortfolio {
  id: number;
  img: string;
  title: string;
  subTitle: string;
}

export interface IBlogPostSingle
  extends Array<{
    id: number;
    author: string;
    img: string;
    icon: string;
    date: string;
    month: string;
    posted: string;
    title: string;
    subTitle: string;
  }> {}

export interface ICard {
  id: number;
  image: string;
  name: string;
  slug: string;
  alt: string;
  price: number;
  discount: number;
  star: number;
  category: {
    name: string;
    slug: string;
  };
  description: string;
}

export interface IRelatedCard
  extends Array<{
    id: number;
    image: string;
    name: string;
    slug: string;
    alt: string;
    price: number;
    discount: number;
    star: number;
    category: {
      name: string;
      slug: string;
    };
    description: string;
  }> {}

export type FormCustomers = {
  id: string;
  name: string;
  district: string;
  town: string;
  postalcode: string;
  area: string;
  phonenumber: string;
  email: string;
  alternativephnnum: string;
  ordersnote: string;
};
