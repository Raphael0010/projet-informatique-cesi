import React, { useState } from "react";
import "./ConfigCisco.css";
import { SocketHandler } from "../../utils/socketHandler";
import { Icon, Input, Button } from "antd";

const ConfigCisco: React.FC = () => {
  const [nomSwitch, setNomSwitch] = useState("");

  const onChangeSwitchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomSwitch(event.target.value);
  };

  const changeNameExec = () => {
    // Je change le nom
    SocketHandler.emit(
      "switch_config_change_name",
      "sudo /script/ChangementNomSwitch " + nomSwitch
    );
  };

  return (
    <>
      <div className="title-config">
        <h3>
          <Icon type="control" />
          Configuration
        </h3>
      </div>
      <br />
      <div>
        <Input
          style={{ width: "89.5%" }}
          onChange={onChangeSwitchName}
          placeholder="Switch Name"
        />{" "}
        <Button
          onClick={changeNameExec}
          style={{ width: "10%" }}
          type="primary"
        >
          Executer
        </Button>
      </div>
      <br />
      <div>
        <Input style={{ width: "43.5%" }} placeholder="Numéro de VLAN" />{" "}
        <Input style={{ width: "43.5%" }} placeholder="Nom du VLAN" />{" "}
        <Button style={{ width: "10%" }} type="primary">
          Executer
        </Button>
      </div>
      <br />
      <div>
        <Input style={{ width: "80.5%" }} placeholder="Numéros interface FA" />
        <Button type="primary">Allumer</Button>
      </div>
      <br />
      <div>
        <Input style={{ width: "80.5%" }} placeholder="Numéros interface FA" />
        <Button type="primary">Eteindre</Button>
      </div>
      <br />
      <div>
        <Button type="primary">Sauvegarder la config du switch</Button>
      </div>
    </>
  );
};

export default ConfigCisco;
