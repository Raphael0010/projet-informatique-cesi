import React from "react";
import "./ConfigCisco.css";
import { Icon, Input, Button } from "antd";

const ConfigCisco: React.FC = () => {
  return (
    <>
      <div className="title-config">
        <h3>
          <Icon type="control" />
          Configuration
        </h3>
      </div>
      <div className="">
        <Input style={{ width: "89.5%" }} placeholder="Switch Name" />{" "}
        <Button style={{ width: "10%" }} type="primary">
          Executer
        </Button>
      </div>
    </>
  );
};

export default ConfigCisco;
