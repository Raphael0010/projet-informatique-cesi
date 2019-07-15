import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import socketIOClient from "socket.io-client";

const Home: React.FC = () => {
  const [commandLine, setCommandLine] = useState("");
  const [commandLineReturn, setCommandLineReturn] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeCommandLine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommandLine(event.target.value);
  };

  const sendCommand = async () => {
    getPwd();
    const socket = socketIOClient("http://127.0.0.1:3030");
    socket.on("cmd return", (c: any) => {
      setCommandLineReturn(c);
      //console.log(c);
    });
    socket.on("error", (c: any) => {
      setCommandLineReturn(c);
      console.log("Error : " + c);
    });
    socket.emit("cmd", commandLine);
  };

  const getPwd = () => {
    const socket = socketIOClient("http://127.0.0.1:3030");
    socket.on("cmd return", (c: any) => {
      setPwd(c);
    });
    socket.emit("cmd", "pwd");
  };

  useEffect(() => {
    getPwd();
  }, []);

  return (
    <>
      <div>
        <Input
          style={{ width: "90%" }}
          value={commandLine}
          onChange={onChangeCommandLine}
          placeholder="Prompt command"
        />
        <Button onClick={sendCommand} style={{ width: "10%" }} type="primary">
          Send
        </Button>
      </div>
      <h3>Pwd actualy : {pwd}</h3>
      <h2>Commande Line Result :</h2>
      <code>{commandLineReturn}</code>
    </>
  );
};

export default Home;
