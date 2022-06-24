import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./style.module.css";
const EntityPage = () => {
  const id = useParams().id;
  const [data, setData] = useState([]);
  const [obj, setObj] = useState({});
  const getData = async () => {
    await axios.get(`http://localhost:8080/blogs/${id}`).then((resp) => {
      // console.log(resp.data);
      setData(resp.data);
      setObj(resp.data[0]);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{obj.Title ? obj.Title : "Blog Details"}</h1>
      <div>
        <table className={styles.customers}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((ele) => (
            <tr key={ele.Id}>
              <td>{ele.Id}</td>
              <td>{ele.Title}</td>
              <td>{ele.Body}</td>
              <td>{ele.CreatedAt}</td>
              <td>{ele.UpdatedAt}</td>
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
    </div>
  );
};
export default EntityPage;
