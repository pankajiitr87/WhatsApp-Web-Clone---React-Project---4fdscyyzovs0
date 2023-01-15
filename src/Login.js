import React from "react";
import "./css/login.css";
import { auth, provider } from "./firebase";

const [{ user }, dispatch] = useStateValue();

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login_wrapper">
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
          alt="whatsapp"
        />
        <h2>Sign in to whatsapp</h2>
        <button onClick={signIn}>Login with Gmail</button>
      </div>
    </div>
  );
}

export default Login;
