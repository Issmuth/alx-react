import React from "react";
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  appBody: {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
  },
  input: {
        margin: '10px',
    },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(style.appbody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
