import React from "react";
import "./Accueil.css";
import { Icon } from "antd";

const Accueil: React.FC = () => {
  return (
    <>
      <h1>
        <Icon type="sync" /> Bienvenue sur l'application de monitoring en temps
        réel
      </h1>
      <h2>Technologies utilisés :</h2>
      <h3>
        <Icon type="right" /> Server Socket.IO pour executer les commandes et
        récupérer les données en temps réel
      </h3>
      <h3>
        <Icon type="right" /> React 16 en TypeScript
      </h3>
      <h3>
        <Icon type="right" /> Raspberry ( Rasbian Buster )
      </h3>
      <h3>
        <Icon type="right" /> SNMP
      </h3>
    </>
  );
};

export default Accueil;
