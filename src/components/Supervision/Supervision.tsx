import React, { useEffect, useState } from "react";
import { Icon, Collapse, Card, Progress } from "antd";
import "./Supervision.css";
import logoRaspi from "../../utils/assets/raspi.png";
import burn from "../../utils/assets/burn.png";
import time from "../../utils/assets/time.png";
import { SocketHandler } from "../../utils/socketHandler";
import { toPercen } from "../../utils/index";

const { Panel } = Collapse;

const Supervision: React.FC = () => {
  const [heat, setHeat] = useState("");
  const [ip, setIp] = useState("");
  const [cpuCharge, setCpuCharge] = useState();
  const [memoryCharge, setMemoryCharge] = useState();
  const [disckSpace, setDisckSpace] = useState();
  const [uptime, setUptime] = useState("");
  const [intReseaux, setIntReseaux] = useState("");

  useEffect(() => {
    // HEAT
    SocketHandler.emit("raspi_snmp_heat", "/opt/vc/bin/vcgencmd measure_temp");
    SocketHandler.listen("raspi_snmp_heat_return", s => {
      setHeat(s.split("=")[1]);
      return SocketHandler.removeListener("raspi_snmp_heat_return");
    });
    // IP
    SocketHandler.emit(
      "raspi_snmp_ip",
      "snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.92.1.3.2.1.9.7.100.101.102.97.117.108.116.1.2 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_ip_return", s => {
      setIp(s);
      return SocketHandler.removeListener("raspi_snmp_ip_return");
    });
    // CPU
    SocketHandler.emit(
      "raspi_snmp_cpu_charge",
      "snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.11.11.0 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_cpu_charge_return", s => {
      setCpuCharge(parseInt(s));
      return SocketHandler.removeListener("raspi_snmp_cpu_charge_return");
    });
    // Uptime
    SocketHandler.emit(
      "raspi_snmp_uptime",
      "snmpwalk -v 2c -c public localhost .1.3.6.1.2.1.1.3.0 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_uptime_return", s => {
      setUptime(s);
      return SocketHandler.removeListener("raspi_snmp_uptime_return");
    });
    // Interface Reseau
    SocketHandler.emit(
      "raspi_snmp_int",
      "snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.55.1.5.1.2.2 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_int_return", s => {
      setIntReseaux(s);
      return SocketHandler.removeListener("raspi_snmp_int_return");
    });
    // Disk Space TOTAL
    let total_disque = 0;
    SocketHandler.emit(
      "raspi_snmp_disk_total",
      "snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.9.1.6.1 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_disk_total_return", s => {
      total_disque = parseInt(s);
      return SocketHandler.removeListener("raspi_snmp_disk_total_return");
    });
    // Disk Space FREE
    SocketHandler.emit(
      "raspi_snmp_disk_free",
      "snmpwalk -v2c -c public localhost .1.3.6.1.4.1.2021.9.1.7.1 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_disk_free_return", s => {
      setDisckSpace(toPercen(total_disque, parseInt(s)));
      return SocketHandler.removeListener("raspi_snmp_disk_free_return");
    });
    // Memory TOTAL
    let total_memory = 0;
    SocketHandler.emit(
      "raspi_snmp_memory_total",
      "snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.4.5.0  -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_memory_total_return", s => {
      total_disque = parseInt(s);
      return SocketHandler.removeListener("raspi_snmp_memory_total_return");
    });
    // Memory FREE
    SocketHandler.emit(
      "raspi_snmp_memory_free",
      "snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.4.11.0 -Ov -Oq"
    );
    SocketHandler.listen("raspi_snmp_memory_free_return", s => {
      setMemoryCharge(toPercen(total_memory, parseInt(s)));
      return SocketHandler.removeListener("raspi_snmp_memory_free_return");
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
              <p>
                CPU charge : <Progress percent={cpuCharge} />
              </p>
              <p>
                Memory charge : <Progress percent={memoryCharge} />
              </p>
              <p>
                Disk space : <Progress percent={disckSpace} />
              </p>
            </div>
            <div className="seconde-bloc-raspi">
              <p>
                Uptime : {uptime}{" "}
                {uptime && <img height="15" width="15" src={time} />}
              </p>
              <p>Network interface : {intReseaux}</p>
              <p>
                Heat : {heat}
                {parseInt("51") >= 50 && parseInt(heat) > 0 && (
                  <img height="15" width="15" src={burn} />
                )}
              </p>
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
