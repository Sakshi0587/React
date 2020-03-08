const addTask = (task) => {
return{
  type: 'ADD_TASK',
  payload: task
};

},

deleteTask = (taskid) => {
return{
    type: 'DELETE_TASK',
    payload:taskid
  };
}

export default {addTask, deleteTask};