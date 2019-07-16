import React, { useEffect } from "react";
import { Icon } from "antd";
import socketIOClient from "socket.io-client";
import "./Supervision.css";

const url = "http://127.0.0.1:3030";

const Supervision: React.FC = () => {
  const getIp = () => {
    const socket = socketIOClient(url);
    socket.on("cmd return", (c: any) => {
      console.log(c);
    });
    socket.on("snmp_get_ip_return", (c: any) => {
      console.log(c);
    });
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <>
      <div className="title-super-vision">
        <h3>
          <Icon className="logo-title-super-vision" type="unordered-list" />
          Liste des équipements connectés
        </h3>
      </div>
    </>
  );
};

export default Supervision;
