import React from "react";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AuthorList = ({ authors, deleteHandler }) => {
  //(props)=> const {authors,deleteHandler}=props;
  const navigate = useNavigate();
  // const [author, setAuthor] = useState();
  // const { id } = useParams();

  const goToUpdate = (authorsID) => {
    navigate("/update/" + authorsID);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions avaible</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((authors) => {
            return (
              <tr key={authors._id}>
                <td>{authors.name}</td>
                <td>
                  <button onClick={() => goToUpdate(authors._id)}>Edit</button>
                  <button onClick={() => deleteHandler(authors._id)}>
                    Delette
                  </button>
                  <Link to={`/details/${authors._id}`}>Details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
