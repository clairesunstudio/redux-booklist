export function selectBook(book) {
  //action creator: a function returns an action:
  //action: an object with a type property

  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}
