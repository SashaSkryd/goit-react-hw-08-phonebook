// import React from "react";

// const ContactsPage = () => {
//   return (
//     <div>
//       <h1>Contacts Page</h1>
//     </div>
//   );
// };

// export default ContactsPage;

import React, { Component } from "react"
import ContactForm from "../../Components/ContactForm/ContactForm.jsx"
import Filter from "../../Components/Filter/Filter.jsx"
import ContactList from "../../Components/ContactList/ContactList.jsx"
import Title from "../../Components/Title/Title.js"

import {fetchContact} from "../../redux/contactOperation.js"
import { connect } from "react-redux"

import { CSSTransition } from "react-transition-group"
import animation from "./animation/titleAnimation.module.css"
import style from './contacts.module.css'

class App extends Component {
  componentDidMount() {
    this.props.onFetchContact()
  }

  render() {
    return (
      <>
        <div className={style.container}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={animation}
            unmountOnExid timeout={500}>
            <Title title="Phonebook" />
          </CSSTransition>
          <ContactForm />
          <Filter />
          <ContactList />
        </div>
      </>
    )
  }
}

const mapDispatchToProps = {
  onFetchContact: fetchContact,
}

export default connect(null, mapDispatchToProps)(App)