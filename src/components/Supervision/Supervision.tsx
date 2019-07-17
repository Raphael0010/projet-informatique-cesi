import React, { useEffect, useState } from "react";
import { Icon, Collapse, Card } from "antd";
import socketIOClient from "socket.io-client";
import "./Supervision.css";
import logoRaspi from "../../utils/assets/raspi.png";

const { Panel } = Collapse;

const url = "http://127.0.0.1:3030";

const Supervision: React.FC = () => {
  const [heat, setHeat] = useState("");

  const getRaspHeat = () => {
    const socket = socketIOClient(url);
    socket.on("cmd return", (c: any) => {
      console.log(c);
      setHeat(c);
    });
    socket.emit("cmd", "/opt/vc/bin/vcgencmd measure_temp");
  };

  useEffect(() => {
    getRaspHeat();
  }, []);

  return (
    <>
      <div className="title-raspi-super-vision">
        <h3>
          <img
            style={{ marginRight: "0.4%" }}
            width="15"
            height="15"
            alt="raspberry"
            src={logoRaspi}
          />
          Raspberry monitoring
        </h3>
      </div>
      <div className="monitoring-raspi">
        <Card size="small" title="Monitoring">
          <div className="monitoring-raspi-bloc">
            <div className="left-raspi">
              <p>CPU charge : </p>
              <p>Memory charge : </p>
              <p>Uptime : </p>
            </div>
            <div className="seconde-bloc-raspi">
              <p>Disk space :</p>
              <p>Network interface :</p>
              <p>Heat : {heat}</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="title-super-vision">
        <h3>
          <Icon className="logo-title-super-vision" type="unordered-list" />
          List of equipment
          <span style={{ color: "green" }}> connected</span> to the network
        </h3>
      </div>
      <div className="collection-super-vision">
        <Collapse>
          <Panel header="IP : - NAME : " key="1">
            <Collapse defaultActiveKey="1">
              <Panel header="Graph" key="1">
                <p>Graph</p>
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Supervision;
