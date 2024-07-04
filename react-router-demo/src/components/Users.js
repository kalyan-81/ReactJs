import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const showActiveUsers = searchParam.get("filter") === "active";
  return (
    <div>
      <h4>user1</h4>
      <h4>user2</h4>
      <h4>user3</h4>
      <Outlet />
      <button onClick={() => setSearchParam({ filter: "active" })}>
        Active Filters
      </button>
      &nbsp;
      <button onClick={() => setSearchParam({})}>Reset Filters</button>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
    </div>
  );
};

export default Users;
