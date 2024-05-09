import React from "react";
import classes from "./Products.module.css";
import { PRD } from "../../../types/types";
import notfound from "../../../assets/notfound.jpg";

const Products: React.FC<{ product: PRD }> = ({ product }) => {
  const img = product.images!.length > 0 && product.images;
  const prices = product.prices!.length > 0;
  const maxPrice = Math.max(...product.prices!.map((prc) => prc.price));
  const minPrice = Math.min(...product.prices!.map((prc) => prc.price));
  const perc = Math.round(100 - (minPrice / maxPrice) * 100).toFixed() + "%";
  return (
    <div className={classes.product}>
      <div className={classes.imgAbs}>
        {img ? (
          <img src={img[0].image_url} alt={product.images![0].image_name} />
        ) : (
          <img src={notfound} />
        )}
      </div>
      <p>{product.name}</p>
      <div className={classes.arr}>
      {product.variation!.map((item) => {
        for (let key in item) {
          return (
            <div key={key}>
              {Array.isArray(item[key])
                ? `${key} : ${item[key].map((prop) => prop)}`
                : `${key} : ${item[key]}`}
            </div>
          );
        }
      })}
      </div>
      <p className={classes.minPrice}>
        {prices ? `от ${minPrice} ₽` : "Нет в наличии"}
      </p>
      {maxPrice > minPrice && (
        <div className={classes.maxPrice}>
          <span>{maxPrice} ₽</span>
          <span>-{perc}</span>
        </div>
      )}
      <button>Добавить в корзину</button>
    </div>
  );
};

export default Products;
