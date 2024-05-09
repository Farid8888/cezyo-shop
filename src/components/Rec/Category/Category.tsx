import React from "react";
import {CTG} from '../../../types/types'
import CategoryItem from "./CategoryItem";
import classes from './Category.module.css'

const Category = ({ctg}:{ctg:CTG[] | null}) => {
  return (
    <div>
      <div className={classes.top}>
        <h2>Категории товаров</h2>
        <span>Настройки</span>
      </div>
      <div className={classes.category}>
        {ctg?.map((categ) => {
              const rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
          return <CategoryItem key={categ.id} name={categ.name} rand={rand} id={categ.id}/>;
        })}
      </div>

    </div>
  );
};

export default Category;
