import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./Navbar.css";
import Terminal from "../Terminal/Terminal";
import Supervision from "../Supervision/Supervision";
import Accueil from "../Accueil/Accueil";
import ConfigCisco from "../ConfigCisco/ConfigCisco";

const Navbar: React.FC = () => {
  return (
    <>
      <Router>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">
              <Icon type="home" />
              Accueil
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/terminal/">
              <Icon type="code" />
              Terminal
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/dashboard/">
              <Icon type="dashboard" />
              Supervision
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/configuration/">
              <Icon type="control" />
              Configuration
            </Link>
          </Menu.Item>
        </Menu>
        <Route path="/" exact component={Accueil} />
        <Route path="/terminal/" component={Terminal} />
        <Route path="/dashboard/" component={Supervision} />
        <Route path="/configuration/" component={ConfigCisco} />
      </Router>
    </>
  );
};

export default Navbar;
