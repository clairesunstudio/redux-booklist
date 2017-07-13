import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) =>{
      return(
        <li
        key={book.title}
        className="list-group-item">{book.title}
        </li>
      )

    })
  }
  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //access to global state object
  return {
    books: state.books
  }
  //mapStateToProps function returns sliced state objects from the global state
}

export default connect(mapStateToProps)(BookList)
//connect assign return value from the function (1st argument) to the Component (2nd argument) as props to a container
