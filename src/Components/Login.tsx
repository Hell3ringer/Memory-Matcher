import { useState } from "react";

import "../styles/Login.css";
import { Level } from "../types/types";
function Login() {
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>(Level.easy);
  const handleChange = (e: any) => {
    if (!e) return;
    let { name, value } = e.target as HTMLInputElement;
    if (name === "name") {
      setName(value);
    } else if (name === "level") {
      setLevel(value);
    }
  };
  const onSubmit = (e: any) => {
    if (!e) return;
    const target = e.target;
    if (!name || !level) {
      target.className = "submitBtn disable";
      return;
    }
    console.log("level", level);
  };
  return (
    <div className="login">
      <div className="flex-row">
        <h1>Memory Matcher</h1>
        <label>A memory matching game!</label>
      </div>
      <div className="flex-col">
        <input
          name="name"
          type="text"
          placeholder="Enter Name"
          className={`inputText ${name ? "success" : "error"}`}
          value={name}
          spellCheck="false"
          onChange={handleChange}
        ></input>
      </div>
      <div className="radioBtnGrp">
        <div>
          <input
            checked={level === Level.easy ? true : false}
            id="radioEasy"
            type="radio"
            name="level"
            onChange={handleChange}
            value={Level.easy}
          ></input>
          <label htmlFor="radioEasy">Easy</label>
        </div>
        <div>
          <input
            id="radioMedium"
            type="radio"
            name="level"
            onChange={handleChange}
            value={Level.medium}
          ></input>
          <label htmlFor="radioMedium">Medium</label>
        </div>
        <div>
          <input
            id="radioHard"
            type="radio"
            name="level"
            onChange={handleChange}
            value={Level.hard}
          ></input>
          <label htmlFor="radioHard">Hard</label>
        </div>
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className={`submitBtn ${!name ? "disable" : ""}`}
      >
        play
      </button>
    </div>
  );
}

export default Login;
