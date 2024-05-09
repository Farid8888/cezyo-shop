import React from 'react'
import { CTG, PRD,IMGS,PRICE,PVP,PVPL,PVPVAL } from "../../types/types";
import classes from './Rec.module.css'
import Category from './Category/Category'
import Products from './Products/Products';

const Rec = () => {
    const [ctg, setCtg] = React.useState<CTG[]>([]);
    const [products,setProducts]  =React.useState<PRD[]>([])
    const [images,setImages] = React.useState<IMGS[]>([])
    const [prices,setPrices] = React.useState<PRICE[]>([])
    const [prdVarPrs,setPrdCarPrs] = React.useState<PVP[]>([])
    const [prdVarPrLt,setPrdCarPrLt] = React.useState<PVPL[]>([])
    const [prdVarPrVal,setPrdCarPrVal] = React.useState<PVPVAL[]>([])
  React.useEffect(() => {
    fetch("https://test2.sionic.ru/api/Categories")
      .then((response) => response.json())
      .then((data) => {
        setCtg(data);
      })
      .catch((e) => console.log(e));
      fetch("https://test2.sionic.ru/api/products")
      .then((response) => response.json())
      .then((products:PRD[] )=> {
        setProducts(products)    
      })
      
      fetch(`https://test2.sionic.ru/api/ProductImages`)
      .then(response=>response.json()).then((images:IMGS[])=>{
        setImages([...images])
      })
   fetch(`https://test2.sionic.ru/api/ProductVariations`)
   .then(response=>response.json()).then((price:PRICE[])=>{
    setPrices([...price])
   })
   fetch(`https://test2.sionic.ru/api/ProductVariationProperties`)
   .then(response=>response.json()).then((pvp:PVP[])=>{
    setPrdCarPrs([...pvp])
   })
   fetch(`https://test2.sionic.ru/api/ProductVariationPropertyListValues`)
   .then(response=>response.json()).then((pvpl:PVPL[])=>{
    setPrdCarPrLt([...pvpl])
   })
   fetch(`https://test2.sionic.ru/api/ProductVariationPropertyValues`)
   .then(response=>response.json()).then((pvpval:PVPVAL[])=>{
    setPrdCarPrVal([...pvpval])
   })
  }, []);

  const filtr = products?.map(product =>{
const prdVal = prdVarPrVal.filter(val => val.product_variation_id === product.id)
const variation1= prdVal.map(val=>{
  let prop
  let value
  if(val.product_variation_property_list_value_id === null){
    const newPrs =  prdVarPrs.filter(prs =>prs.id === val.product_variation_property_id)
   prop = newPrs[0].name
   const type = newPrs[0].type
   value = type === 2 ? val.value_float : type === 0 ? val.value_string : type === 1 && val.value_int 
  }else{
    const newList = prdVarPrLt.filter(lst=>lst.id === val.product_variation_property_list_value_id)
    const newPrdProp = prdVarPrs.filter(prd=>prd.id === newList[0].product_variation_property_id)

    prop= newPrdProp[0].name 
    value =newList[0].value
    
  }
  return {
    [prop] :value
}
})


const combinedArray = variation1.reduce((acc:any[] , obj) => {
  const propertyName:string = Object.keys(obj)[0];
  const existingProperty= acc.find(item => Object.keys(item)[0] === propertyName);
  if (existingProperty) {
      existingProperty[propertyName] = [existingProperty[propertyName], obj[propertyName]].flat();
  } else {
      acc.push(obj);
  }
  return acc;
}, []);

    return {
      ...product,
      images: images.filter(item => item.product_id === product.id),
      prices: prices.filter(item => item.product_id === product.id),
      variation:combinedArray
    }
  }); 

// if(images.length === 0 ){
//   return <div>...Loading</div>
// }


console.log(filtr)
  return (
    <main className={classes.rec}>
       <Category ctg={ctg}/>
       <div className={classes.products}>
       {filtr && filtr.map(item=>{
        return <Products key={item.id}  product={item}/>
       })}
       </div>
    </main>
  )
}

export default Rec


