import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./CRUD/HomePage";
import CreateUser from "./CRUD/CreateUser";
import ShowUsers from "./CRUD/ShowUsers";
import EditUser from "./CRUD/EditUser";
const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route element={<CreateUser />} path="/" />
        <Route element={<ShowUsers />} path="/users" />
        <Route element={<EditUser />} path="/edit-user/:id"></Route>
      </Routes>
      <h1>{ShowUsers.id}</h1>
    </BrowserRouter>
  );
};

export default App;

// git remote add origin https://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@github.com/Sreechand-2001/crud-operation-by-react.git