import React, { useState } from "react";
import "./ConfigCisco.css";
import { SocketHandler } from "../../utils/socketHandler";
import { Icon, Input, Button } from "antd";

const ConfigCisco: React.FC = () => {
  const [nomSwitch, setNomSwitch] = useState("");
  const [numVlan, setNumVlan] = useState("");
  const [nomVlan, setNomVlan] = useState("");
  const [turnOn, setTurnOn] = useState("");
  const [turnOff, setTurnOff] = useState("");
  const [deleteVlan, setDeleteVlan] = useState("");
  const [showVlan, setShowVlan] = useState("");

  const onChangeSwitchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomSwitch(event.target.value);
  };

  const onChangeNumVlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumVlan(event.target.value);
  };

  const onChangeNomVlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomVlan(event.target.value);
  };

  const onChangeTurnOn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnOn(event.target.value);
  };

  const onChangeTurnOff = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnOff(event.target.value);
  };

  const onChangeDeleteVlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteVlan(event.target.value);
  };

  const changeNameExec = () => {
    // Je change le nom
    SocketHandler.emit(
      "switch_config_change_name",
      "sudo /script/ChangementNomSwitch " + nomSwitch
    );
  };

  const createVlan = () => {
    // Je crée un vlan
    SocketHandler.emit(
      "switch_config_createVlan",
      "sudo /script/CreationVlan " + numVlan + " " + nomVlan
    );
  };

  const clickTurnOn = () => {
    // Je turn on
    SocketHandler.emit(
      "switch_config_turnOn",
      "sudo /script/AllumerInterface " + turnOn
    );
  };

  const clickTurnOff = () => {
    // Je turn off
    SocketHandler.emit(
      "switch_config_turnOff",
      "sudo /script/EteindreInterface " + turnOff
    );
  };

  const clickDeleteVlan = () => {
    // Je delete un vlan
    SocketHandler.emit(
      "switch_config_deleteVlan",
      "sudo /script/SupressionVlan " + deleteVlan
    );
  };

  const onSaveConfig = () => {
    // Je save la config
    SocketHandler.emit(
      "switch_config_saveConfig",
      "sudo /script/SauvegardeSwitch"
    );
  };

  const onShowVlan = () => {
    // Je show les vlan
    SocketHandler.emit("switch_config_showVlan", "sudo /script/VoirVlan");
    SocketHandler.listen("switch_config_showVlan_return", s => {
      setShowVlan(s);
      return SocketHandler.removeListener("switch_config_showVlan_return");
    });
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
          placeholder="Nom du switch"
        />{" "}
        <Button
          onClick={changeNameExec}
          style={{ width: "10%" }}
          type="primary"
        >
          Modifier
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
        <Button onClick={createVlan} style={{ width: "12.2%" }} type="primary">
          Créer / Modifier
        </Button>
      </div>
      <br />
      <div>
        <Input
          style={{ width: "89.5%" }}
          onChange={onChangeDeleteVlan}
          placeholder="Numéro VLAN"
        />{" "}
        <Button
          onClick={clickDeleteVlan}
          style={{ width: "10%" }}
          type="primary"
        >
          Supprimer
        </Button>
      </div>
      <br />
      <div>
        <Input
          onChange={onChangeTurnOn}
          style={{ width: "80.5%" }}
          placeholder="Numéros interface FA"
        />{" "}
        <Button onClick={clickTurnOn} style={{ width: "19%" }} type="primary">
          Allumer
        </Button>
      </div>
      <br />
      <div>
        <Input
          onChange={onChangeTurnOff}
          style={{ width: "80.5%" }}
          placeholder="Numéros interface FA"
        />{" "}
        <Button onClick={clickTurnOff} style={{ width: "19%" }} type="primary">
          Eteindre
        </Button>
      </div>
      <br />
      <div>
        <Button onClick={onSaveConfig} type="primary">
          Sauvegarder la configuration du switch
        </Button>
        {"  "}
        <Button onClick={onShowVlan} type="primary">
          Afficher les Vlan
        </Button>
      </div>
      <div>
        {showVlan && (
          <pre>
            <code>{showVlan}</code>
          </pre>
        )}
      </div>
    </>
  );
};

export default ConfigCisco;
