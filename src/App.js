import React, {Component} from 'react';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import{faTrash} from '@fortawesome/free-solid-svg-icons';
/* import Header from './components/header';
import Taskbar from './components/taskbar';
import Tasklist from './components/tasklist';
import Todo from './component/todo';
import Todoclass from './component/todoclass';
import Message from './component/message';
import Counter from './component/counter';
import FunctionClick from './component/functionclick';
import ClassClick from './component/classclick';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import Form from './component/Form';
import LifeCycle from './component/LifeCycle'
import LifeChild from './component/LifeChild'
import FragmentDemo from './component/FragmentDemo'
import PureComp from './component/PureComp'; */
//import RefsDemo from './component/RefsDemo';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
   super(props);
   this.state={
      items:[],
      currentItem:{
         text:'',
         key:''
      }
   }
  }
  handleInput = (e) =>{
     this.setState({
        currentItem:{
           text: e.target.value,
           key: Date.now()
        }
     })
  }
  addItem = (e) =>{
     e.preventDefault();
     const newItem= this.state.currentItem;
     console.log(newItem);
     if(newItem.text!== ''){
        const newItems=[...this.state.items,newItem];
        this.setState({
           items:newItems,
           currentItem:{
              text:'',
              key:''
           }
        })
     }
  }
  deleteItem = (key) =>{
     const filteredItems = this.state.items.filter(item => item.key !== key);
     this.setState({
        items: filteredItems
     })
  }
  setUpdate = (text,key) => {
     const items = this.state.items;
     items.map(item => 
      {
         if(item.key === key){
            item.text = text;
         }
      }
     )
     this.setState({
        items : items
     })
  }
  render() { 
    return ( 
        <div className="App">
           <header>
           <h1>My Todo list</h1>
               <form id='to-do-form' onSubmit={this.addItem}>
                  <input type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                  <button type="submit">Add</button>
               </form>
           </header>
           <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
          </div>
    );
       {/*  <Todo name="monika"> how are you? </Todo> */}
        
        {/* <Form></Form> */}
     {/*  <LifeCycle></LifeCycle> */}
        
       
       {/*  <FragmentDemo></FragmentDemo> */}
{/*        <PureComp></PureComp>
 */}        
    {/* <ParentComponent/> */}
       {/* <RefsDemo></RefsDemo> */}
       {/* <ClickCounter></ClickCounter>
       <HoverCounter></HoverCounter> */}
    {/*     <Message></Message>
        <Counter></Counter>
        <Todo name="Tina">sakshi</Todo>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <UserGreeting></UserGreeting>
        <Todoclass name="Sakshi" fullname="Dhingra">is nice</Todoclass>
        <ParentComponent></ParentComponent> */}
      
     
  }
}


export default App;
