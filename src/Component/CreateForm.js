import { Component } from "react";

export default class CreateForm extends Component {
  render() {
    const { addNewTask, taskList, priorityList, setStatus, defaultStatus } =
      this.props;
    return (
      <>
        <div className="container mt-3">
          <div className="form-row">
            <div className="col">
              <input
                ref={(taskInput) => (this.title = taskInput)}
                type="text"
                placeholder="Enter Task Name"
                className="form-control"
              />
            </div>

            <div className="col">
              <select
                className="form-control"
                ref={(priorityInput) => (this.priority = priorityInput)}
              >
                <option>Select Level</option>
                {priorityList.map((priority) => (
                  <option value={priority.priorityId}>
                    {priority.priorityValue}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="container mt-3">
            <div className="form-row">
              <div className="col-md-6">
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    addNewTask(this.title.value, this.priority.value * 1)
                  }
                >
                  ADD TASK
                </button>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-success ml-3"
                  onClick={() => setStatus("active")}
                  disabled={defaultStatus === "active" ? true : false}
                >
                  Active : (
                  {taskList.filter((task) => task.isActive === "active").length}
                  )
                </button>
                <button
                  className="btn btn-danger ml-3"
                  onClick={() => setStatus("deactive")}
                  disabled={defaultStatus === "deactive" ? true : false}
                >
                  Deactive : (
                  {
                    taskList.filter((task) => task.isActive === "deactive")
                      .length
                  }
                  )
                </button>
                <button
                  className="btn btn-secondary ml-3"
                  onClick={() => setStatus("all")}
                  disabled={defaultStatus === "all" ? true : false}
                >
                  Total : (
                  {
                    taskList.filter(
                      (task) =>
                        task.isActive === "active" ||
                        task.isActive === "deactive"
                    ).length
                  }
                  )
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
