import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateAuthor = (authors) => {
  const navigate = useNavigate();
  const [name, setName] = useState({ name: "" });
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      })

      .catch((err) => console.log(err));
  }, [id]);
  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/authors/${id}`, { name })
      .then((res) => {
        navigate("/");
        console.log(res.data);
        // setName(res.data);
      })
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          console.log(key);
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };
  return (
    <div>
      <div>
        <div>{errors.name}</div>
      </div>
      <form onSubmit={updateAuthor}>
        <input onChange={(e) => setName(e.target.value)} value={name} /> <br />
        <button>Submit</button>{" "}
        <button>
          {" "}
          <Link to="/">Cancel</Link>{" "}
        </button>
      </form>
    </div>
  );
};

export default UpdateAuthor;
