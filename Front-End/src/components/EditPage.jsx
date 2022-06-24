import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditPage = () => {
  const id = useParams().id;
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleInput = (e) => {
    const mytitle = e.target.value;
    setTitle(mytitle);
  };

  const bodyInput = (e) => {
    const mybody = e.target.value;
    setBody(mybody);
  };
  const getData = async () => {
    await axios.get(`http://localhost:8080/blogs/${id}`).then((resp) => {
      // console.log(resp.data);
      setData(resp.data);
      setTitle(resp.data[0].Title);
      setBody(resp.data[0].Body);
    });
  };
  const formsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/blogs/${id}`, {
      Title: title,
      Body: body,
      UpdatedAt: new Date().toString(),
    });
    alert("Blog edited successfully");
    window.location = "/blogs";
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Edit Blog</h1>;
      <div>
        <form>
          <input
            name="title"
            value={title}
            onInput={titleInput}
            type="text"
            placeholder="Title"
          />
          <br />
          <input
            name="body"
            value={body}
            onInput={bodyInput}
            type="text"
            placeholder="Body"
          />
          <br />
          <button onClick={formsubmit} className={styles.submit} type="submit">
            Commit Change
          </button>
        </form>
      </div>
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
export default EditPage;
