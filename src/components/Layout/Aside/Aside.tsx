import classes from "./Aside.module.css";
import frame from "../../../assets/Frame.png";
import img1 from "../../../assets/Image.png";
import img2 from "../../../assets/Image2.png";
import {IMG} from '../../../types/types'

const Aside = () => {
  const arr:IMG[] = [
    {
      title: "Новая коллекция",
      img: img1,
      id:Math.random()
    },
    {
      title: "Новая коллекция",
      img: img2,
      id:Math.random()
    },
    {
      title: "Новая коллекция",
      img: img1,
      id:Math.random()
    },
  ];
  return (
    <aside>
      <div className={classes.top}>
        <div className={classes.abs}>
            <div></div>
          <div className={classes.bag}>
            <img src={frame} />
          </div>
          <div className={classes.btn}>
            <p>Получай товары БЕСПЛАТНО!</p>
            <button type="button">Узнать подробнее</button>
          </div>
        </div>
      </div>
      {arr.map(item=>{
        return (
            <div key={item.id} className={classes.bottom} style={{background:`url(${item.img})`}}>
                 <h3>{item.title}</h3>
            </div>
        )
      })}
    </aside>
  );
};

export default Aside;
