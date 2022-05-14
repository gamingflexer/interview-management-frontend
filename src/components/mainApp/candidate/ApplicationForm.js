// Surve alredy created

import React, { useState } from "react";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");

  const [links, setLinks] = useState("");

  return (
    <div className="applicationform">
      <h2>Application</h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Qualification</label>
        <input
          type="text"
          required
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        <label>Age</label>
        <input
          type="text"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Contact Number</label>
        <input
          type="text"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Position Applying For</label>
        <input
          type="text"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>Experiences</label>
        <select>
          <option value="0-2 Years">0-2 Years</option>
          <option value="2-5 Years">2-5 Years</option>
          <option value="5-10 Years">5-10 Years</option>
          <option value="10-15 Years">10-15 Years</option>
        </select>
        <label>Links</label>
        <input
          type="text"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
        <button>Apply</button>
      </form>
    </div>
  );
}
