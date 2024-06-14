import React, { useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import axios from "axios";

export default function ReadEditDelete({
  onEdit,
  refreshCount,
  setRefreshCount,
}) {
  const [todoData, setTodoData] = useState([]);

  // get todo list 
  const readTodo = (id) => {
    axios
      .get(`http://localhost:3001/api/todo-list/${id}`)
      .then((res) => {
        setTodoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// get data from local database
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data"));
    if (userData && userData.id) {
      readTodo(userData.id);
    }
  }, [refreshCount]);


// function for delete todo
  const handleDelete = (id) => {
    axios
      .post("http://localhost:3001/api/delete-todo", { id })
      .then((res) => {
        setRefreshCount((prevCount) => prevCount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container style={{ width: "60%", minHeight: '300px', maxHeight: '300px', overflowY: 'auto' }}>
  {todoData.map((item, i) => (
    <Card className="my-3" key={i}>
      <Card.Body className="d-flex justify-content-between align-items-center col-12">
        <h4 className="col-2">{item.title}</h4>
        <p className="col-8">{item.body}</p>
        <div className="d-flex justify-content-end col-2">
          <Button
            variant="success"
            onClick={() => onEdit(item)}
            className="me-2"
          >
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  ))}
</Container>

    </>
  );
}
