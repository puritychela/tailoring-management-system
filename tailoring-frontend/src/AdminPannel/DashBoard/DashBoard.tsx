import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="row bg-info h-200">
        <div className="col">
          <NavLink to="/admin">Products</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/categories">categories</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/trousers">Trousers</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/skirts">Skirts</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/dresses">Dresses</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/shirts">Shirts</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/users">Users</NavLink>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default DashBoard;
