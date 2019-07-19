import React, { useState } from "react";
import "./ConfigCisco.css";
import { SocketHandler } from "../../utils/socketHandler";
import { Icon, Input, Button } from "antd";

const ConfigCisco: React.FC = () => {
  const [nomSwitch, setNomSwitch] = useState("");
  const [numVlan, setNumVlan] = useState("");
  const [nomVlan, setNomVlan] = useState("");

  const onChangeSwitchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomSwitch(event.target.value);
  };

  const onChangeNumVlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumVlan(event.target.value);
  };

  const onChangeNomVlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomVlan(event.target.value);
  };

  const changeNameExec = () => {
    // Je change le nom
    SocketHandler.emit(
      "switch_config_change_name",
      "sudo /script/ChangementNomSwitch " + nomSwitch
    );
  };

  const createVlan = () => {
    // Je creée un vlan
    SocketHandler.emit(
      "switch_config_createVlan",
      "sudo /script/CreationVlan " + numVlan + " " + nomVlan
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
        <Input
          onChange={onChangeNumVlan}
          style={{ width: "43.5%" }}
          placeholder="Numéro de VLAN"
        />{" "}
        <Input
          onChange={onChangeNomVlan}
          style={{ width: "43.5%" }}
          placeholder="Nom du VLAN"
        />{" "}
        <Button onClick={createVlan} style={{ width: "10%" }} type="primary">
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
