import React from "react"
import style from "./home.module.css"

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1>Home Page</h1>
      <p>Welcome to our site, here you can create and save your contact list</p>
      <span>We are glad that you use our resource</span>
    </div>
  )
}

export default HomePage
