import store from './store';
import { addInfo } from './actions';
// import { addBook, removeBook, filterText } from './actions.js';

window.store = store;
window.addInfo = addInfo;

store.subscribe(() => {
  console.log(store.getState())
})

// window.store = store;
// window.addBook = addBook;
// window.removeBook = removeBook;
// window.filterText = filterText;
//
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// const book1 = store.dispatch(addBook({
//     title: 'Origin',
//     description: 'Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.',
//     author: 'Dan Brown',
//     published: 2017
// }));
//
// const book2 = store.dispatch(addBook({
//     title: 'Harry Potter and the Deathly Hallows',
//     description: 'The seventh and final novel of the Harry Potter series.',
//     author: 'J. K. Rowling',
//     published: 2007
// }));
//
// const book3 = store.dispatch(addBook({
//     title: 'The 100-Year-Old Man Who Climbed Out the Window and Disappeared',
//     author: 'Jonas Jonasson',
//     published: 2009
// }));
//
// store.dispatch(removeBook({ id: book2.book.id }));
//
// store.dispatch(filterText('origin'));
