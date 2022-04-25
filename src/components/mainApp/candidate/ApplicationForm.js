import React from "react";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  return (
    <div className="applicationform">
      <h2>Application</h2>
      <form>
        <label>Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="text" required />
        <label>Qualification</label>
        <input type="text" required />
        <label>Age</label>
        <input type="text" required />
        <label>Contact Number</label>
        <input type="text" required />
        <label>Address</label>
        <input type="text" required />
        <label>Position Applying For</label>
        <input type="text" required />
        <label>Experiences</label>
        <select>
          <option value="0-2 Years">0-2 Years</option>
          <option value="2-5 Years">2-5 Years</option>
          <option value="5-10 Years">5-10 Years</option>
          <option value="10-15 Years">10-15 Years</option>
        </select>
        <label>Links</label>
        <input type="text" />

        <button>Apply</button>
      </form>
    </div>
  );
}
