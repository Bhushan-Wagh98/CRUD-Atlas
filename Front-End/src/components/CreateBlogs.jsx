import React from "react";
import styles from "./style.module.css";
import { uuid } from "uuidv4";
import { useState } from "react";
import axios from "axios";
const CreateBlogs = () => {
  const [formData, setFormData] = useState({
    Id: "",
    Title: "",
    Body: "",
    CreatedAt: "",
    UpdatedAt: "",
    delete: false,
    DeletedAt: "",
  });
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

  const formsubmit = (e) => {
    e.preventDefault();
    if (title === "" || body === "") return alert("put correct value");

    let date = new Date();

    setFormData({
      Title: title,
      Body: body,
      CreatedAt: date.toString(),
      UpdatedAt: date.toString(),
      Id: uuid(),
      deleted: false,
      DeletedAt: "",
    });
    if (formData.Id === "") {
      alert("failed");
      return false;
    } else alert("your data is Successfully added");
    axios
      .post("http://localhost:8080/blogs", formData)
      .then((response) => this.setState({ articleId: response.data.id }))
      .catch((error) => {
        console.error("There was an error!", error);
      });
    window.location = "/blogs";
  };
  return (
    <div>
      <h1>Create a Blog</h1>;
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateBlogs;
