import React from "react"
import { Link } from "react-router-dom"

const NotFoundView = () => {
  return (
    <div className="NotFoundWrapper">
      404. Page, not found.
      <Link to="/"> You can go back to the home page</Link>
    </div>
  )
}
export default NotFoundView