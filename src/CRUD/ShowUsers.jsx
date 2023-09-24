import axios from "axios";
import style from "./showUser.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ShowUsers = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee")
      .then((content) => {
        setData(content.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  let deleteHandle = (id) => {
    axios.delete(`http://localhost:3000/employee/${id}`);
    // window.location.assign("/users")
    //            OR
    window.location.reload();
  };
  return (
    <section id={style.box}>
      {data.map((x) => {
        return (
          <div id={style.card}>
            <p>
              <span>ID </span>: {x.id}
            </p>
            <p>
              <span>Name </span>: {x.name}
            </p>
            <p>
              <span>Salary </span>: {x.salary}
            </p>
            <p>
              <span>Company </span>: {x.company}
            </p>
            <div className={style.btn}>
              <Link to={`/edit-user/${x.id}`} className={style.btns}>
                Edit
              </Link>
              <button
                className={style.btns}
                onClick={() => {
                  deleteHandle(x.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default ShowUsers;
