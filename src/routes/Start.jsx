import { Outlet } from "react-router-dom";

const Start = () => {
  return <div>
    <h3>Header</h3>
    <Outlet />
    <h3>Footer</h3>
  </div>;
};

export default Start;
