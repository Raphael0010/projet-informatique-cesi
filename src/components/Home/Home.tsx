import React, { useState, useEffect } from "react";
import { Input, Button, notification } from "antd";
import socketIOClient from "socket.io-client";
import { IHistory } from "../interface/IHistory";
import "./Home.css";

const Home: React.FC = () => {
  const [historique, setHistorique] = useState<IHistory[]>([]);
  const [commandLine, setCommandLine] = useState("");
  const [commandLineReturn, setCommandLineReturn] = useState("");
  const [pwd, setPwd] = useState("");
  const url = "http://127.0.0.1:3030";

  const onChangeCommandLine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommandLine(event.target.value);
  };

  const sendCommand = async () => {
    if (commandLine === "clear") {
      setHistorique([]);
      setCommandLine("");
      return;
    }
    if (commandLine.trim() === "") {
      openNotification("Veuillez rentrer une commande valide i");
      return;
    }
    getPwd();
    const socket = socketIOClient(url);
    socket.on("cmd return", (c: any) => {
      if (c === "wrongcmd") {
        openNotification("Veuillez rentrer une commande valide !");
        return;
      }
      setCommandLineReturn(c);
      setHistorique(historique => [
        ...historique,
        { cmd: commandLine, result: c }
      ]);
    });
    socket.on("error", (c: any) => {
      setCommandLineReturn(c);
      console.log("Error : " + c);
    });
    socket.emit("cmd", commandLine);
    setCommandLine("");
  };

  const getPwd = () => {
    const socket = socketIOClient(url);
    socket.on("cmd return", (c: any) => {
      setPwd(c);
    });
    socket.emit("cmd", "pwd");
  };

  const sendCommandEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (commandLine.trim() === "") {
        openNotification("Veuillez rentrer une commande valide !");
        return;
      }
      sendCommand();
    }
  };

  const openNotification = (message: string) => {
    notification.open({
      message: "Notification",
      description: message
    });
  };

  useEffect(() => {
    getPwd();
  }, []);

  return (
    <>
      <h1 className="center">Terminal</h1>
      <div className="terminal">
        <div className="history">
          <code>
            {historique.map((m, k) => (
              <>
                <strong>{m.cmd}</strong> {" - " + m.result}
                <br />
              </>
            ))}
          </code>
        </div>
        <Input
          onKeyDown={sendCommandEnter}
          style={{ width: "90%" }}
          value={commandLine}
          onChange={onChangeCommandLine}
          placeholder="Prompt command"
        />
        <Button onClick={sendCommand} style={{ width: "10%" }} type="primary">
          Send
        </Button>
      </div>
      <h3 className="center">{pwd}</h3>
      <h2>Commande Line Result :</h2>
      <pre>{commandLineReturn}</pre>
    </>
  );
};

export default Home;
