import React , { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var x = document.forms["form"]["Name"].value;
    var y = document.forms["form"]["Email"].value;
    if (x === "") {
      alert("Name must be filled out");
      setMessage(false);
    } 
    else if (y === "") {
      alert("Email must be filled out");
      setMessage(false);
    }
    else
    {
      setMessage(true);
    }
    
  };

  return (
    <div className="page">
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/conn.gif" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form name="form" onSubmit={handleSubmit}>
            <input type="text" name="Name" id="" placeholder="Name" />
            <input type="text" name="Email" id="" placeholder="Email" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send</button>
            {message && <span>Thank You, Your form has been submitted :)</span>}
          </form>
        </div>
      </div>


      <div className="content">
        <p>
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://shinchancode.github.io/React-Portfolio/" target="_blank">
            {" "}
            Aarti Rathi
          </a>
          😎
        </p>
        <p>© 2022 Aarti Rathi | All Rights Reserved |</p>
      </div>
    </div>
  );
}
