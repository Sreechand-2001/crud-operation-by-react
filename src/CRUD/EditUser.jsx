import style from "./createUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faIndianRupeeSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const EditUser = () => {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/${id}`)
      .then((content) => {
        setName(content.data.name);
        setSalary(content.data.salary);
        setCompany(content.data.company);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  let getName = (e) => {
    setName(e.target.value);
  };
  let getSalary = (e) => {
    setSalary(e.target.value);
  };
  let getCompany = (e) => {
    setCompany(e.target.value);
  };
  let formHandle = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      salary: salary,
      company: company,
    };
    axios.put(`http://localhost:3000/employee/${id}`, data);
    navigate("/users");
  };
  return (
    <div id={style.box}>
      <p id={style.editPara}>Edit User</p>
      <form id={style.form}>
        <div id={style.personIcon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          value={name}
          className={style.input}
          onChange={getName}
        />
        <div id={style.moneyIcon}>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
        </div>
        <input
          type="text"
          value={salary}
          className={style.input}
          onChange={getSalary}
        />
        <div id={style.companyIcon}>
          <FontAwesomeIcon icon={faBuilding} />
        </div>
        <input
          type="text"
          value={company}
          className={style.input}
          onChange={getCompany}
        />
        <div id={style.btn}>
          <button className={style.submit_btn} onClick={formHandle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
