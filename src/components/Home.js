import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions"; // Ensure correct import
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name, inviteCode)); // Pass name and inviteCode separately
    setMessage("You have been added to the waitlist.");
    setName("");
    setInviteCode("");
  };

  return (
    <div className="container">
      <h2>Join the Waiting List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Invite Code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/waitlist">View Waitlist</Link>
    </div>
  );
};

export default Home;
