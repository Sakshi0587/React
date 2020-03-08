import { CombineReducers } from 'redux';   

const tasksReducer = (state=[], action) => {
   switch(action.type){
      case 'ADD_TASK':
        state= state.concat(action.payload); // payload contains the data passed to this action.
        break;
      case 'DELETE_TASK':
        state = state.slice();
        state.splice(action.payload,1);
        break;

   }
   return state;
};

