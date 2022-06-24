import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./style.module.css";

const DeletePage = () => {
  const id = useParams().id;
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(`http://localhost:8080/blogs/${id}`).then((resp) => {
      // console.log(resp.data);
      setData(resp.data);
    });
  };

  const formsubmit = async () => {
    await axios.put(`http://localhost:8080/blogs/${id}`, {
      deleted: true,
      DeletedAt: new Date().toString(),
    });
    alert("Blog moved to the trash");
    window.location = "/blogs";
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Delete Blog</h1>
      <button
        onClick={formsubmit}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Confirm Delete
      </button>
      <div>
        <table className={styles.customers}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created At</th>
            <th>Last Update</th>
          </tr>
          {data.map((ele) => (
            <tr key={ele.Id}>
              <td>{ele.Id}</td>
              <td>{ele.Title}</td>
              <td>{ele.Body}</td>
              <td>{ele.CreatedAt}</td>
              <td>{ele.UpdatedAt}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default DeletePage;
