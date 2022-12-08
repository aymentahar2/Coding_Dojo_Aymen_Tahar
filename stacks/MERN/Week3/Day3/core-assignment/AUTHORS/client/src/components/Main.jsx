import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorList from "./AuthorList";

const Main = (props) => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error("❌❌❌", err));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log("delete sucess ✅");
        setAuthors(authors.filter((author) => author._id !== id));
      })
      .catch((err) => {
        console.log("❌❌", err);
      });
  };

  return (
    <div>
      <Link to="/add">Add Author</Link>
      <h3>We have quotes by :</h3>
      <AuthorList authors={authors} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Main;
