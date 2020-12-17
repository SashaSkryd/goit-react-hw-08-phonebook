import React, { Component } from "react"
import style from "./ContactForm.module.css"
import  {addContact} from "../../redux/contactOperation.js"
import { connect } from "react-redux"
import AlertMessage from "../Alert/alert.js"

import { CSSTransition } from "react-transition-group"
import "../../pages/Contacts/animation/alertAnimation.css"

import contactSelector from "../../redux/contactsSelectors.js"

const INITIAL_STATE = { name: "", number: "", isExists: false }

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  getIsExist = () => !!this.props.contacts.find((contact) => contact.name === this.state.name)
  toggleIsExist = () => this.setState((prevstate) => ({ isExists: !prevstate.isExists }))

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.getIsExist()) {
      this.toggleIsExist()
      console.log(this.state.isExists)
      setTimeout(() => {
        this.toggleIsExist()
      }, 1500)
    } else {
      const { name, number } = this.state
      this.props.addContact({ name, number })
      this.reset()
    }
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE })
  }
  render() {
    const { name, number, isExists } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <label>
            <h2 className={style.title}>Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>
          <label>
            <h2 className={style.title}>Phone</h2>
            <input
              type="text"
              name="number"
              placeholder="Enter phone"
              value={number}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>
          <button type="submit" className={style.btn}>
            {" "}
            <span className={style.btnText}>add contact</span>
          </button>
        </form>
        <CSSTransition in={isExists} timeout={250} classNames="alert" unmountOnExit>
          <AlertMessage>{"Is already in contacts."}</AlertMessage>
        </CSSTransition>
      </>
    )
  }
}

const mapStateToProps = (state, props) => ({
  contacts: contactSelector.getContact(state),
})

const mapDispatchToProps = {
  addContact: addContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
