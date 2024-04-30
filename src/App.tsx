import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import "./App.css";
import LoginTabs from "./components/LoginTabs";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  async function getDetails() {
    setGreetMsg(await invoke("get_user_details", { name }));
  }

  async function getWindow() {
    setGreetMsg(await invoke("my_custom_command"));
  }

  return (
    <main className="page_container">
      <section className="content_container">
        <LoginTabs />
      </section>
    </main>
  );
}

export default App;
