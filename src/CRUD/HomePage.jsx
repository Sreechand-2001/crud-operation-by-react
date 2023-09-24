import style from "./homePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <nav id={style.nav}>
      <Link to="/">Create User</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default HomePage;
