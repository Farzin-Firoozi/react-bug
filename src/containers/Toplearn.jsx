import React from "react"

import Course from "../components/Course/Course"
import MainLayout from "../components/Layouts/MainLayout"
import Login from "../components/Login/Login"
import Register from "./../components/Register/Register"
import Archive from "./../components/Course/Archive"
import SingleCourse from "./../components/Course/SingleCourse"
import UserProfile from "./../components/Profile/UserProfile"

import { Routes, Route } from "react-router-dom"

const Toplearn = (props) => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/">
          <Route index element={<Course />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course" element={<SingleCourse />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
    </MainLayout>
  )
}

export default Toplearn
