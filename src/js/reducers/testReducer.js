import  { FILL_ME } from '../constants';

const initial = {
  listItems: []
};

export default function(state=initial, action) {
  switch(action.type) {
    case FILL_ME:
      return {...state}
  }
  return state;
}