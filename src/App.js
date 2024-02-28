import { Component } from "react";
import task from "./taskData";
import Header from "./Component/Header";
import TaskTable from "./Component/TaskTable";
import CreateForm from "./Component/CreateForm";                                                                

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      taskList : task,
      priorityList : [{priorityId : 1 , priorityValue : 'Low'} , {priorityId : 2 , priorityValue : 'Normal'} , {priorityId : 3 , priorityValue : 'High'}],
      defaultStatus : "all"
    }
  }

  addNewTask = (title , pid)=>{
      let newTask = {title , date : new Date().toLocaleDateString() , pid , isActive : "active"};
      console.log(newTask);
      this.setState({taskList : [...this.state.taskList , newTask]});
      window.alert("New Record Inserted......");
  }

  setStatus = (Status)=>{
    this.setState({defaultStatus : Status});
  }

  changeTask = (Status ,title)=>{
    if(window.confirm("Are you sure?")){
      let index = this.state.taskList.find((task)=>task.title === title);
      index.isActive = Status;
      this.setState({});
    }
  }
  
  render(){
    return<>
      <Header/>
      <CreateForm  addNewTask = {this.addNewTask} taskList = {this.state.taskList}  priorityList = {this.state.priorityList} setStatus = {this.setStatus} defaultStatus = {this.state.defaultStatus}/>
      <TaskTable taskList = {this.state.taskList} priorityList = {this.state.priorityList} defaultStatus = {this.state.defaultStatus} changeTask = {this.changeTask}/>
    </>
  }
}