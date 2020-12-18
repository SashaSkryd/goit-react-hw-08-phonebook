import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import { connect } from "react-redux"

import AppRoutes from "../Components/AppRoutes/AppRoutes.js"

import Layout from "../Components/Loyout/Loyout.js"
import { routes } from "../services/routes"
import { getCurrentUser } from "../redux/contactOperation.js"

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props
    getCurrentUser()
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AppRoutes routes={routes} />
        </Layout>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = {
  getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)
