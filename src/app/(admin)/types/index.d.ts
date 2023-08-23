export type Person = {
    id: number,
    date: string
    product: string,
    payment: string,
    fullfillments: string,
    total: number,
    icon:any
}

export type Product = {
    id:number,
    name:string,
    sku:string,
    stock:string,
    price:number,
    categories:string,
    date:string,
    icon:any
}

export type Customers = {
    id:number,
    name:string,
    phone:string,
    balance:number,
    totalorder:number,
    created:string,
    status:string,
    icon:any
    
}