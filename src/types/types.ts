

export type IMG={
img:string,
title:string,
id:number
}

export type CTG ={
    id:number,
    name:string,
    parent_id:string
}

export type VARIATION ={
    [key:string]:string[]
}

export type PRD ={
    id: number,
    category_id: number,
    description:string,
    name:string,
    prices?:PRICE[],
    images?:IMGS[],
    variation?:VARIATION[]
}

export type IMGS ={
        id: number,
        image_name: string,
        image_url: string,
        product_id: number
}

export type PRICE={
    id:number,
    price:number,
    product_id:number,
    stock:number
}

export type PVP ={
    id: number,
    name: string,
    type: number
}

export type PVPL ={
    id: number,
    product_variation_property_id: number,
    value: string
}

export type PVPVAL ={
    id: number,
    product_variation_id: number,
    product_variation_property_id: number,
    product_variation_property_list_value_id: number,
    value_string: string,
    value_int: number,
    value_float: number
}

