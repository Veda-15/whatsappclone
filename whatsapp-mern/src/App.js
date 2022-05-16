import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("2ae6a98b1322f451647a", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMsg) => {
      alert(JSON.stringify(newMsg));
      setMessages([...messages, newMsg]);
    });

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe();
    };
  }, [messages]);

  console.table(messages);
  return (
    <div className="App">
      <div className="appbody">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
