import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";
const DeletedBlogs = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get("http://localhost:8080/blogs").then((resp) => {
      let arr = [];
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].deleted === true) {
          arr.push(resp.data[i]);
        }
      }
      setData(arr);
    });
  };

  const UndoChange = async (id) => {
    await axios.put(`http://localhost:8080/blogs/${id}`, {
      deleted: false,
    });
    alert("Blog moved to the all blogs");
    window.location = "/blogs/trash";
  };

  const DeletePermanent = (id) => {
    axios.delete(`http://localhost:8080/blogs/${id}`, {
      Id: id,
    });
    alert("Deleted Permanently");
    window.location = "/blogs/trash";
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Deleted Blogs</h1>
      <div>
        <table className={styles.customers}>
          <tr>
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Deleted At</th>
            <th>Undo Delete</th>
            <th>Delete Permanently</th>
          </tr>
          {data.map((ele, ind) => (
            <tr key={ele.Id}>
              <td>{ind + 1}</td>
              <td>{ele.Id}</td>
              <td>{ele.Title}</td>
              <td>{ele.Body}</td>
              <td>{ele.CreatedAt}</td>
              <td>{ele.UpdatedAt}</td>
              <td>{ele.DeletedAt}</td>
              <td>
                <button
                  onClick={() => UndoChange(ele.Id)}
                  style={{ color: "white", backgroundColor: "#ffbb0e" }}
                >
                  Undo Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => DeletePermanent(ele.Id)}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Delete Permanently
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div></div>
    </div>
  );
};
export default DeletedBlogs;
