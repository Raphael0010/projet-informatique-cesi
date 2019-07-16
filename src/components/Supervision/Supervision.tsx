import React from "react";
import { Icon } from "antd";
import "./Supervision.css";

const Supervision: React.FC = () => {
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
