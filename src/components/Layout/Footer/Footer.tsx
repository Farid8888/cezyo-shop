import React from "react";
import classes from "./Footer.module.css";
import fb from "../../../assets/Facebook.png";
import vk from "../../../assets/Vk.png";
import ins from "../../../assets/Inst.png";
import google from "../../../assets/Google Play.png"
import app from "../../../assets/App Store.png"

const Footer = () => {
  return (
    <footer>
      <div className={classes.bottom}>
        <h2>React</h2>
        <div className={classes.icnList}>
          <div className={classes.icons}>
            <p>Присоединяйтесь к нам</p>
            <div className={classes.icon}>
              <img src={fb} />
              <img src={vk} />
              <img src={ins} />
            </div>
          </div>
          <div className={classes.icons}>
            <p>Устанавливайте приложение</p>
            <div className={classes.icon}>
              <img src={google} />
              <img src={app} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.inf}>
        <span>© Sionic</span>
        <span>Правовая информация</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  );
};

export default Footer;
