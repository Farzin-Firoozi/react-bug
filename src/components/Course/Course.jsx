import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllCourses } from "../../actions/courses"

const Course = () => {
  return (
    <section className="terms-items">
      <header>
        <h2> آخرین دوره های تاپ لرن </h2>
        <Link to="/archive"> مشاهده همه دوره ها </Link>
      </header>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/1.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> رایگان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/2.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> رایگان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/3.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> 150.000 تومان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/4.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> رایگان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/5.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> 15.000 تومان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/6.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> رایگان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/7.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> 20.000 تومان </span>
            <i>1:52:32</i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/8.jpg" />
            </Link>
            <h2>
              <a href=""> آموزش متریال دیاین در زامارین </a>
            </h2>
            <span> 75.000 تومان </span>
            <i>1:52:32</i>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Course
