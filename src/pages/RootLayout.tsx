import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import { Outlet } from "react-router";
import classes from './RootLayout.module.css'

const RootLayout = () => {
  return (
    <>
      <Layout />
      <div className={classes.outlet}>
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default RootLayout;
