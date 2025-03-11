import axios from "axios";
import { getDefaultMode } from "../constants/index.js";
import '../styles/Login.css';
export default function Login() {

  const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }
  
  return (
    <div
      className={`${getDefaultMode() ? "dark" : "light"} text-black dark:text-white bg-white dark:bg-black`}
    >
      <title>Account Sign In</title>
        <button className="btn" onClick={apiCall}>Make API Call</button>
    </div>
  );
}
