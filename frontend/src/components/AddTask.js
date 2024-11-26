import React, { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/tasks", { title, description })
      .then(() => {
        setTitle("");
        setDescription("");
        alert("Task added!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container text-center mt-5">
      <form onSubmit={handleSubmit} className="form-group">
        <h2>Add Task</h2>
        <div className="d-flex flex-column align-items-center">
            <div className="mb-3 col-md-4">
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                required
                />
            </div>

            <div className="mb-3 col-md-4">
                <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                required
                />
            </div>

            {/* Centered button */}
            <button type="submit" className="btn btn-primary">Add Task</button>
    </div>
        

        
      </form>
    </div>
  );
};

export default AddTask;
