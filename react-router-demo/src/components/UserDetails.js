import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return <div>User Details Page {userId}</div>;
};

export default UserDetails;
