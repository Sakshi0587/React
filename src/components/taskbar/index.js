import React, { Component } from 'react';
import {Connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';

class Taskbar extends React.Component{
  render(){
    return(
      <div>
        <input type="text" ref="task" placeholder="add your tasks here"/>
        <button> Add task</button>
      </div>
    )
  }
}
export default Connect()(Taskbar)