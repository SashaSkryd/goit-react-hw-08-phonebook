import React from "react"
import { Formik, Form, Field } from "formik"
import { connect } from "react-redux"

import { register } from "../../redux/contactOperation.js"

const RegisterPage = ({ register }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-5">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            register(values)
            resetForm({})
          }}
        >
          <Form className="form" noValidate>
            <Field type="text" name="name" placeholder="Name" className="form-control mt-2" />
            <Field type="email" name="email" placeholder="Email" className="form-control mt-2" />
            <Field placeholder="Password" type="password" name="password" className="form-control mt-2" />
            <button type="submit" className="btn btn-primary btn-lg mt-2">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default connect(null, { register })(RegisterPage)
