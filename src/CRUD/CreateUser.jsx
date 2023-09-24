import { useEffect, useRef, useState } from "react";
import style from "./createUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faIndianRupeeSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  let nameRef = useRef();
  let salRef = useRef();
  let companyRef = useRef();
  let submitRef = useRef();
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    nameRef.current.focus();
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
  let formHandler = (e) => {
    e.preventDefault();
    if (name && salary && company !== "") {
      let data = {
        name: name,
        salary: salary,
        company: company,
      };
      axios
        .post("http://localhost:3000/employee", data)
        .then(() => {
          console.log(`Successfully Stored`);
        })
        .catch(() => {
          console.log(`Error has occured`);
        });
      navigate("/users");
    }
    setName("");
    setSalary("");
    setCompany("");
    nameRef.current.focus();
  };

  let nameDown = (e) => {
    if (e.key === "Enter" && name !== "") {
      salRef.current.focus();
      e.preventDefault();
    }
  };
  let salaryDown = (e) => {
    if (e.key === "Enter" && salary !== "") {
      companyRef.current.focus();
      e.preventDefault();
    }
  };
  let companyDown = (e) => {
    if (e.key === "Enter" && company !== "") {
      submitRef.current.focus();
      e.preventDefault();
    }
  };
  return (
    <div id={style.box}>
      <p id={style.editPara}> Create User</p>
      <form id={style.form}>
        <div id={style.personIcon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          placeholder="Enter Full Name"
          className={style.input}
          value={name}
          onChange={getName}
          ref={nameRef}
          onKeyDown={nameDown}
        />
        <div id={style.moneyIcon}>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
        </div>
        <input
          type="text"
          placeholder="Enter Salary"
          className={style.input}
          value={salary}
          onChange={getSalary}
          ref={salRef}
          onKeyDown={salaryDown}
        />
        <div id={style.companyIcon}>
          <FontAwesomeIcon icon={faBuilding} />
        </div>
        <input
          type="text"
          placeholder="Enter Company Name"
          className={style.input}
          value={company}
          onChange={getCompany}
          ref={companyRef}
          onKeyDown={companyDown}
        />
        <div id={style.btn}>
          <button
            className={style.submit_btn}
            onClick={formHandler}
            ref={submitRef}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateUser;
