import { Component } from "react";

export default class TaskTable extends Component {
  render() {
    const { taskList, priorityList , defaultStatus , changeTask} = this.props;

    return (
      <>
        <div className="container mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Title</th>
                <th>Created date</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {taskList.sort((a , b)=>{
               return a.pid < b.pid ? 1 : -1
              }).filter((task)=>task.isActive === defaultStatus || defaultStatus === "all").map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.date}</td>
                  <td>
                    {
                      priorityList.find(
                        (priority) => priority.priorityId === task.pid
                      ).priorityValue
                    }
                  </td>
                  <td>
                    {task.isActive === "active" ? <button onClick={()=>changeTask("deactive" , task.title)} className="btn btn-success">Active</button> : <button onClick={()=>changeTask("active" , task.title)} className="btn btn-danger">Deactive</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
