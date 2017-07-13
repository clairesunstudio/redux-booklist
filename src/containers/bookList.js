import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) =>{
      return(
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
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

function mapDispatchToProps(dispatch) {
  //dispatch: funnel to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //return value pass to all reducers whenever selectBook action creator (function) is called
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
//connect assign return value from the function (1st argument) to the Component (2nd argument) as props to a container
//Make values returned from mapStateToProps and mapDispatchToProps available as props to BookList
