import  React,{ useEffect, useState } from "react";
import Card from "../../Card/Card";



const Products = () => {
  const [products, setProduct] = useState([1, 2, 3, 4, 5]);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProduct(json))
},[])

  return (
    <div className="py-5 d-flex gap-5 flex-wrap">
      {products.map(data=>(
        <Card props={data}></Card>
      ))}

      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}
    </div>
  );
};

export default Products;
