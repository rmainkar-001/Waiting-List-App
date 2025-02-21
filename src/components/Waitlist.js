import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/actions"; // Ensure actions.js file exists
import { Link } from "react-router-dom";

const Waitlist = () => {
  const waitlist = useSelector((state) => state.waitlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addUser("Guest " + (waitlist.length + 1), ""));
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch, waitlist.length]);

  return (
    <div className="container">
      <h2>Waiting List</h2>
      <ul>
        {waitlist.map((user, index) => (
          <li key={index}>
            {user.name} - {user.isPriority ? "Priority" : "General"} - Position {index + 1} - Estimated wait: {index + 1} days
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Waitlist;
