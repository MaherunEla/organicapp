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

