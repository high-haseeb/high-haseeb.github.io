import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("null");
  return (
    <div className="flex flex-col content-center justify-items-center	">
      <header className="bg-blue-200">
        <img src={logo} className="bg-black " alt="logo" />
        <input type={"text"} onChange={(e)=>setQuery(e.target.value)}></input>
        <a
          className=""
          href={`https://www.youtube.com/results?search_query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-3xl font-bold no-underline my-10">search YOUTUBE</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
