import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const MainPage = () => {
  useEffect(() => {
    const demo = async () => {
      try {
        let res = await fetch("http://localhost:27017/blogs");
        // let data = await res.json();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    demo();
  }, []);
  return (
    <div>
      <h1>Main Page</h1>
      <div className={styles.homepageLinks}>
        <Link to="/blogs">
          <button style={{ backgroundColor: "#74a73e" }}>All Blogs</button>
        </Link>
        <Link to="/blogs/create">
          <button style={{ backgroundColor: "#ffbb0e" }}>Create a Blog</button>
        </Link>
        <Link to="/blogs/trash">
          <button style={{ backgroundColor: "red" }}>Deleted Blog</button>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;
