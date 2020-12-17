import React from "react"
import PropTypes from "prop-types"
import style from "./Filter.module.css"
import { connect } from "react-redux"
import { filterContact } from "../../redux/actions/actions.js"
import { CSSTransition } from "react-transition-group"

import contactSelector from "../../redux/contactsSelectors.js"

function Filter({ filter, filterRender, visibleFilter }) {
  return (
    <CSSTransition in={!!visibleFilter} timeout={250} classNames={style.input} unmountOnExit>
      <div className={style.container}>
        <label>
          <h2 className={style.title}>Find contact by name</h2>
          <input
            type="text"
            name="filter"
            placeholder="Finder"
            value={filter}
            onChange={(e) => filterRender(e.target.value)}
            className={style.input}
          />
        </label>
      </div>
    </CSSTransition>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterRender: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    filter: contactSelector.getFilter(state),
    visibleFilter: contactSelector.getVisibleFilter(state),
  }
}

const mapDispatchToProps = {
  filterRender: filterContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
