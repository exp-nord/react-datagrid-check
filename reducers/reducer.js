import { KEY_UPDATE } from '../constants/ActionTypes'

let initialData     =  [
  { id: 0, index: 1, firstName: 'Click-me', lastName: 'London1', country: 'jon@gmail.com1'},
  { id: 1, index: 2, firstName: 'Click-me', lastName: 'London2', country: 'jon@gmail.com2'},
  { id: 2, index: 3, firstName: 'Click-me', lastName: 'London3', country: 'jon@gmail.com3'}
];


export default function reducer(state = {data: initialData}, action) {

  switch (action.type) {
    case KEY_UPDATE:
      const newdata=state.data.map((item, num)=>(
        num==action.rowId?{...item, firstName: item.firstName+'-more'}:item
      ))
      state={...state, data: newdata};
      return state

    default:
      return state
  }
}
