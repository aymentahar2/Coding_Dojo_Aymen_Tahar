import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddAuthor = (authors) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const addAuthor = (e) => {
    e.preventDefault();
    const newAuthor = {
      name: name,
    };

    axios
      .post("http://localhost:5000/api/authors", newAuthor)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          console.log(key);
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);

        // console.log("❌❌❌", errResponse);
      });
  };
  return (
    <div>
      <p>Add newAuthor :</p>
      <div>
        <div>{JSON.stringify(name)}</div>
        <p>{errors.name}</p>
        <form onSubmit={addAuthor}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={authors.name}
          />{" "}
          <br />
          <button>Submit</button>{" "}
          <button>
            {" "}
            <Link to="/">Cancel</Link>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAuthor;
