import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/login";
import Registration from "./Auth/register";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Dashboard from "./Dashboard/adminDashboard";
import UserCreate from "./Dashboard/user/create";
import UserIndex from "./Dashboard/user/index";
import UserShow from "./Dashboard/user/show";
import UserEdit from "./Dashboard/user/edit";
import RoleIndex from "./Dashboard/role/index";
import RoleCreate from "./Dashboard/role/create";
import RoleEdit from "./Dashboard/role/edit";
import OccupationEdit from "./Dashboard/occupation/edit";
import OccupationIndex from "./Dashboard/occupation/index";
import OccupationCreate from "./Dashboard/occupation/create";
import AccountDetails from "./Dashboard/profile/editAccountDetails";
import ForgotPassword from "./Auth/forgotPassword";
import ResetPassword from "./Auth/resetPassword";
import ChartComponent from '../src/component/ChartComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/passwordReset" element={<ResetPassword/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/navbar" element={<Navbar />} />
       {/* user router */}
      <Route path="/user/index" element={<UserIndex />} />
      <Route path="/user/create" element={<UserCreate />} />
      <Route path="/user/show/:id" element={<UserShow />} />
      <Route path="/user/edit/:id" element={<UserEdit />} />
      <Route path="/role/create" element={<RoleCreate />} />
      <Route path="/role/index" element={<RoleIndex />} />
      <Route path="/role/edit/:id" element={<RoleEdit />} />
      <Route path="/occupation/create" element={<OccupationCreate />} />
      <Route path="/occupation/index" element={<OccupationIndex />} />
      <Route path="/occupation/edit/:id" element={<OccupationEdit />} />
      <Route path="/user/accountdetails/:id" element={<AccountDetails />} />
      <Route path="/chart" element={<ChartComponent />} />

    </Routes>
  );
}

export default App;
