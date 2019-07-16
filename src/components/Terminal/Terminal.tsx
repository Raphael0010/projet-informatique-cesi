import React, { useState } from "react";
import { Input, notification, Icon } from "antd";
import socketIOClient from "socket.io-client";
import { IHistory } from "../../interface/IHistory";
import "./Terminal.css";

const Terminal: React.FC = () => {
  const [historique, setHistorique] = useState<IHistory[]>([]);
  const [commandLine, setCommandLine] = useState("");
  const [commandLineReturn, setCommandLineReturn] = useState("");
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

    const socket = socketIOClient(url);
    socket.on("cmd return", (c: any) => {
      if (c === "wrongcmd") {
        openNotification("Veuillez rentrer une commande valide !");
        return;
      }
      setCommandLineReturn(c);
      setHistorique(historique => [
        { cmd: commandLine, result: c },
        ...historique
      ]);
      console.log(commandLineReturn);
    });
    socket.on("error", (c: any) => {
      setCommandLineReturn(c);
      console.log("Error : " + c);
    });
    socket.emit("cmd", commandLine);
    setCommandLine("");
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

  return (
    <>
      <div className="terminal">
        <Input
          onKeyDown={sendCommandEnter}
          style={{ width: "100%" }}
          value={commandLine}
          onChange={onChangeCommandLine}
          placeholder=">"
        />
        <div className="history">
          <code>
            {historique.map((m, k) => (
              <>
                <Icon type="code" />
                <strong> {m.cmd}</strong>
                <br />
                <pre>{m.result}</pre>
              </>
            ))}
          </code>
        </div>
      </div>
    </>
  );
};

export default Terminal;
