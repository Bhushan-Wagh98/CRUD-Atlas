import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const AllBlogs = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get("http://localhost:8080/blogs").then((resp) => {
      // console.log(resp.data);
      let arr = [];
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].deleted === false) {
          arr.push(resp.data[i]);
        }
      }
      setData(arr);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>All Blogs</h1>
      <div>
        <table className={styles.customers}>
          <tr>
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((ele, ind) => (
            <tr key={ele.Id}>
              <td>{ind + 1}</td>
              <td>
                <Link
                  to={{
                    pathname: `/blogs/${ele.Id}`,
                    state: { blogId: ele.Id },
                  }}
                >
                  <button style={{ backgroundColor: "green" }}>{ele.Id}</button>
                </Link>
              </td>
              <td>{ele.Title}</td>
              <td>{ele.Body}</td>
              <td>{ele.CreatedAt}</td>
              <td>
                <Link
                  to={{
                    pathname: `/blogs/${ele.Id}/edit`,
                    state: { blogId: ele.Id },
                  }}
                >
                  <button style={{ backgroundColor: "#ffbb0e" }}>Edit</button>
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/blogs/${ele.Id}/delete`,
                    state: { blogId: ele.Id },
                  }}
                >
                  <button style={{ backgroundColor: "red" }}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div></div>
    </div>
  );
};
export default AllBlogs;
