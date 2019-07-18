import React, { useEffect, useState } from "react";
import { Icon, Collapse, Card } from "antd";
import "./Supervision.css";
import logoRaspi from "../../utils/assets/raspi.png";
import { SocketHandler } from "../../utils/socketHandler";

const { Panel } = Collapse;

const Supervision: React.FC = () => {
  const [heat, setHeat] = useState("");
  const [ip, setIp] = useState("");
  const [cpuCharge, setCpuCharge] = useState("");

  useEffect(() => {
    SocketHandler.emit("raspi_snmp_heat", "/opt/vc/bin/vcgencmd measure_temp");
    SocketHandler.listen("raspi_snmp_heat_return", s => {
      setHeat(s.split("=")[1]);
      return SocketHandler.removeListener("raspi_snmp_heat_return");
    });
    SocketHandler.emit(
      "raspi_snmp_ip",
      "snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.92.1.3.2.1.9.7.100.101.102.97.117.108.116.1.2 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_ip_return", s => {
      setIp(s);
      return SocketHandler.removeListener("raspi_snmp_ip_return");
    });
    SocketHandler.emit(
      "raspi_snmp_cpu_charge",
      "snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.11.11.0 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_cpu_charge_return", s => {
      setCpuCharge(s);
      return SocketHandler.removeListener("raspi_snmp_cpu_charge_return");
    });
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
          Raspberry monitoring {ip}
        </h3>
      </div>
      <div className="monitoring-raspi">
        <Card size="small" title="Monitoring">
          <div className="monitoring-raspi-bloc">
            <div className="left-raspi">
              <p>CPU charge : {cpuCharge}</p>
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
