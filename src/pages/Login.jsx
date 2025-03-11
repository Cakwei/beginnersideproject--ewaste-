import { getDefaultMode } from "../constants/index.js";
import { useState } from "react";
import "../styles/Login.css";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }
  return (
    <div
      className={`${getDefaultMode() ? "dark" : "light"} flex h-dvh min-h-[250px] w-dvw min-w-[250px] items-center justify-center overflow-scroll bg-yellow-300 text-black dark:bg-black dark:text-white`}
    >
      <title>Log In</title>
      <form
        onSubmit={handleSubmit}
        className="flex w-[min(80%,550px)] flex-col items-center"
      >
        <label>Username: </label>

        <input
          id="username"
          className="input"
          value={name}
          name="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <br />
        <label>Password: </label>

        <input
          id="password"
          className="input"
          value={pass}
          name="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>

        <button className="btn btn-success" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
}
