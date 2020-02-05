import React from "react";
import Task from "./Task";
import TablePagination from "@material-ui/core/TablePagination";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const TaskList = props => {
  const {
    tasks,
    editTask,
    deleteTask,
    changeDone,
    handleEditText,
    handleEditPriority
  } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const todoList = tasks
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map(task => (
      <Task
        key={task.id}
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
        changeDone={changeDone}
        handleEditText={handleEditText}
        handleEditPriority={handleEditPriority}
      />
    ));

  return (
    <div className="TaskList">
      <table>
        <thead>
          <tr>
            <th>
              Task name
              <span
                className="sortIcon"
                onClick={() => props.sortColumn("text")}
              >
                {props.active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </span>
            </th>
            <th>
              Priority
              <span
                className="sortIcon"
                onClick={() => props.sortColumn("priority")}
              >
                {props.active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </span>
            </th>
            <th>
              Done
              <span
                className="sortIcon"
                onClick={() => props.sortColumn("done")}
              >
                {props.active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </span>
            </th>
          </tr>
        </thead>
        {todoList}
        <tfoot>
          <tr>
            <td colSpan="3">
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={props.tasks.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TaskList;
