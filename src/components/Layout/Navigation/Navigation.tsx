import { CiLocationOn,CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Aside from '../Aside/Aside';
import classes from './Navigation.module.css'
import img1 from '../../../assets/image 17.png'

const Navigation = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <h1>React</h1>
        <div className={classes.location}>
         <CiLocationOn style={{width:'20px',height:'20px'}}/>
         <span>Александровск-Са...</span>
        </div>
        <div className={classes.inp}>
            <input type="text" placeholder='Поиск бренда, товара, категории...'/>
            <span><CiSearch style={{width:'20px',height:'20px'}}/></span>
        </div>  
        <div className={classes.cart}>
            <PiShoppingCartSimpleLight/>
            <span>10+</span>
        </div>
        <div className={classes.avatar}>
            <img src={img1} />
        </div>
      </nav>
      <Aside/>
    </header>
  )
}

export default Navigation
