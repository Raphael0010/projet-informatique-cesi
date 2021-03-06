import React, { useEffect, useState } from "react";
import { Icon, Collapse, Card, Progress, Input, Button } from "antd";
import "./Supervision.css";
import logoRaspi from "../../utils/assets/raspi.png";
import burn from "../../utils/assets/burn.png";
import time from "../../utils/assets/time.png";
import debitdown from "../../utils/assets/debitdown.png";
import debitentrant from "../../utils/assets/debitup.png";
import { SocketHandler } from "../../utils/socketHandler";
import { toPercen } from "../../utils/index";

const { Panel } = Collapse;

const Supervision: React.FC = () => {
  const [heat, setHeat] = useState("");
  const [header, setHeader] = useState("");
  const [ip, setIp] = useState("");
  const [cpuCharge, setCpuCharge] = useState();
  const [memoryCharge, setMemoryCharge] = useState();
  const [disckSpace, setDisckSpace] = useState();
  const [uptime, setUptime] = useState("");
  const [intReseaux, setIntReseaux] = useState("");
  const [ventilo, setVentilo] = useState();
  const [debitEntrant, setDebitEntrant] = useState();
  const [debitSortant, setDebitSortant] = useState();
  const [timerCount, setTimerCount] = useState("");
  let refreshStop = 0;

  const onChangeTimerCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerCount(event.target.value);
  };

  useEffect(() => {
    raspiMoni();
    switchMoni();
  }, []);

  const raspiMoni = () => {
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
      total_memory = parseInt(s);
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
  };

  const switchMoni = () => {
    // Name
    let name: string;
    SocketHandler.emit(
      "switch_snmp_name",
      "snmpwalk -v 2c -c public 192.168.137.5 1.3.6.1.2.1.1.5.0 -Oq -Ov"
    );
    SocketHandler.listen("switch_snmp_name_return", s => {
      name = s;
      return SocketHandler.removeListener("switch_snmp_name_return");
    });
    // Ip
    SocketHandler.emit(
      "switch_snmp_ip",
      "snmpwalk -v 2c -c public 192.168.137.5 1.3.6.1.2.1.4.20.1.1 -Oq -Ov"
    );
    SocketHandler.listen("switch_snmp_ip_return", s => {
      setHeader("IP : " + s.split("12")[0] + " - NAME : " + name);
      return SocketHandler.removeListener("switch_snmp_ip_return");
    });
    // Ventirad
    SocketHandler.emit(
      "switch_snmp_ventilo",
      "snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.4.1.9.9.109.1.1.1.1.5.1 -Ov -Oq"
    );
    SocketHandler.listen("switch_snmp_ventilo_return", s => {
      setVentilo(s);
      return SocketHandler.removeListener("switch_snmp_ventilo_return");
    });
    // debit entrant
    SocketHandler.emit(
      "switch_snmp_debit_entrant",
      "snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.2.1.2.2.1.10  -Ov -Oq"
    );
    SocketHandler.listen("switch_snmp_debit_entrant_return", s => {
      let tmp = s.split("\n");
      tmp.splice(-1);
      setDebitEntrant(tmp.reduce((p, c) => p + parseInt(c, 10), 0));
      return SocketHandler.removeListener("switch_snmp_debit_entrant_return");
    });
    // debit sortant
    SocketHandler.emit(
      "switch_snmp_debit_sortant",
      "snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.2.1.2.2.1.16  -Ov -Oq"
    );
    SocketHandler.listen("switch_snmp_debit_sortant_return", s => {
      let tmp = s.split("\n");
      tmp.splice(-1);
      setDebitSortant(tmp.reduce((p, c) => p + parseInt(c, 10), 0));
      return SocketHandler.removeListener("switch_snmp_debit_sortant_return");
    });
    // liste interface
    SocketHandler.emit(
      "switch_snmp_liste_interface",
      "snmpwalk -v 2c -c public 192.168.137.5 iso.3.6.1.2.1.31.1.1.1.1 -Ov -Oq"
    );
    SocketHandler.listen("switch_snmp_liste_interface_return", s => {
      console.log("LISTE INTERFACE", s);
      return SocketHandler.removeListener("switch_snmp_liste_interface_return");
    });
    // interface connecté
    SocketHandler.emit(
      "switch_snmp_liste_interface_connectee",
      "snmpwalk -v 2c -c public 192.168.137.5 iso.3.6.1.2.1.31.1.1.1.2 -Ov -Oq"
    );
    SocketHandler.listen("switch_snmp_liste_interface_connectee_return", s => {
      console.log("INTERFACE CONNECTER", s);
      return SocketHandler.removeListener(
        "switch_snmp_liste_interface_connectee_return"
      );
    });
  };

  const onRefresh = () => {
    if (refreshStop === 1) {
      refreshStop = 2;
      return;
    }
    reCallRaspiMoni();
    reCallSwitchMoni();
    refreshStop = 1;
    return;
  };

  const reCallRaspiMoni = () => {
    if (refreshStop !== 2) {
      console.log("reCallRaspiMoni");
      raspiMoni();
      setTimeout(reCallRaspiMoni, parseInt(timerCount) * 1000);
    } else if (refreshStop === 2) {
      return;
    }
  };

  const reCallSwitchMoni = () => {
    if (refreshStop !== 2) {
      console.log("reCallSwitchMoni");
      switchMoni();
      setTimeout(reCallSwitchMoni, parseInt(timerCount) * 1000);
    } else if (refreshStop === 2) {
      return;
    }
  };

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
          <span style={{ float: "right", paddingRight: "10%" }}>
            <Input style={{ width: "30%" }} onChange={onChangeTimerCount} />

            <Button
              onClick={onRefresh}
              style={{ marginLeft: "4%" }}
              type="primary"
              shape="circle"
              icon="reload"
            />
          </span>
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
                {uptime && <img alt="time" height="15" width="15" src={time} />}
              </p>
              <p>Network interface : {intReseaux}</p>
              <p>
                Heat : {heat}
                {parseInt(heat) >= 52 && parseInt(heat) > 0 && (
                  <img alt="heat" height="15" width="15" src={burn} />
                )}
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="title-super-vision">
        <h3>
          <Icon className="logo-title-super-vision" type="unordered-list" />
          List of equipments
          <span style={{ color: "green" }}> connected</span> to the network
        </h3>
      </div>
      <div className="collection-super-vision">
        <Collapse>
          <Panel header={header} key="1">
            <p>
              Debit total : {debitEntrant / 100}
              {" ko/s"}
              <img alt="debitdown" height="15" width="15" src={debitdown} />
              {" " + debitSortant / 100 + " ko/s "}{" "}
              <img alt="debitup" height="15" width="15" src={debitentrant} />
              <span style={{ paddingLeft: "0.3%" }}>
                {" "}
                Fan use : {ventilo} %
              </span>
            </p>
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
