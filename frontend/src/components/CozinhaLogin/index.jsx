import styles from "./CozinhaLogin.module.css"
import React, { useState } from "react";
import Cozinha from "../Cozinha";


function CozinhaLogin () {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

   
    const userData = database.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
    
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.error}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.app}>
      <div className={styles.loginForm}>
        <div className="title">Sign In</div>
        {isSubmitted ? 
        <div>
          <Cozinha/>
        </div> : renderForm}
      </div>
    </div>
  );
}

export default CozinhaLogin;