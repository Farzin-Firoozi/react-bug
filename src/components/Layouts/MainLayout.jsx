import React, { Fragment } from "react"
import { useLocation, withRouter } from "react-router-dom"

import TopNav from "./../Navs/TopNav"
import Header from "./../common/Header"
import MainNav from "./../Navs/MainNav"
import Footer from "./../common/Footer"
import Helmet from "react-helmet"

const MainLayout = (props) => {
  const location = useLocation()

  return (
    <Fragment>
      <Helmet>
        <title>خودآموز تاپلرن</title>
      </Helmet>
      <div className="landing-layer">
        <div className="container">
          <TopNav />
          {location.pathname === "/" ? <Header /> : null}
        </div>
      </div>

      <MainNav />

      <main id="home-page">
        <div className="container">{props.children} </div>
      </main>

      <Footer />
    </Fragment>
  )
}

export default MainLayout
