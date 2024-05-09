import React from 'react'
import Navigation from './Navigation/Navigation'
import classes from './Layout.module.css'

const Layout = () => {


  return (
    <div className={classes.container}>
      <Navigation/>
    </div>
  )
}

export default Layout
