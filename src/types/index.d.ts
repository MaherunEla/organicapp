export type NavDataProps = {
    url:string
}
export type AboutData = {
    img:string,
    title:string,
    subtitle:string
}

export interface IProduct {
    id:number ,
    slug:string,
    title:string,
    img:string,
    subTitle:string,
    price:string,
    discountPrice:string,
}
export interface IRelatedProduct extends Array<{
    id: number;
    slug: string;
    title: string;
    img: string;
    subTitle: string;
    price: string;
    discountPrice: string;
}> {}

export interface IBlogPost {
    id: number,
    author:string,
    img:string,
    icon:string,
    date:string,
    month:string,
    posted:string,
    title:string,
    subTitle:string,
}

export interface IBlogPostSingle extends Array<{
    id: number,
    author:string,
    img:string,
    icon:string,
    date:string,
    month:string,
    posted:string,
    title:string,
    subTitle:string,

}>{}