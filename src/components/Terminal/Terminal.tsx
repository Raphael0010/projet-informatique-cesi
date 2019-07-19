import React, { useState, useCallback } from "react";
import { Input, notification, Icon, Spin } from "antd";
import { IHistory } from "../../interface/IHistory";
import { SocketHandler } from "../../utils/socketHandler";

import "./Terminal.css";

const Terminal: React.FC = () => {
  const [historique, setHistorique] = useState<IHistory[]>([]);
  const [commandLine, setCommandLine] = useState("");
  const [visibleTermStatut] = useState(false);

  const openNotification = (message: string) => {
    notification.open({
      message: "Notification",
      description: message
    });
  };

  const onChangeCommandLine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommandLine(event.target.value);
  };

  const sendCommand = useCallback(async () => {
    if (commandLine === "clear") {
      setHistorique([]);
      setCommandLine("");
      return;
    }
    if (commandLine.trim() === "") {
      openNotification("Veuillez rentrer une commande valide !");
      return;
    }
    //New version
    SocketHandler.emit("cmd", commandLine);

    SocketHandler.listen("cmd return", s => {
      if (s !== "wrongcmd") {
        setHistorique(historique => [
          { cmd: commandLine, result: s },
          ...historique
        ]);
        setCommandLine("");
      } else {
        openNotification("Veuillez rentrer une commande valide !");
        setCommandLine("");
      }
      SocketHandler.removeListener("cmd return");
    });
  }, [commandLine]);

  const sendCommandEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (commandLine.trim() === "") {
        openNotification("Veuillez rentrer une commande valide !");
        return;
      }
      sendCommand();
    }
  };

  return (
    <>
      <div className="terminal">
        <Spin
          spinning={visibleTermStatut}
          tip=" 
          Impossible to connect to the socket.io server ..."
        >
          <div className="title-config">
            <h3>
              <Icon type="code" />
              Terminal
            </h3>
          </div>
          <Input
            onKeyDown={sendCommandEnter}
            style={{ width: "100%" }}
            value={commandLine}
            onChange={onChangeCommandLine}
            placeholder=">"
          />
        </Spin>

        <div className="history">
          <code>
            {historique.map((m, k) => (
              <React.Fragment key={k}>
                <Icon type="code" />
                <strong> {m.cmd}</strong>
                <br />
                <pre>{m.result}</pre>
              </React.Fragment>
            ))}
          </code>
        </div>
      </div>
    </>
  );
};

export default Terminal;
