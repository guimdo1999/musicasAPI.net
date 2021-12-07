import React from "react";
import "./Menu.css";
import { Layout, Menu } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import Mainpage from "../pages/MainPage";
import CadastrarMusica from "../pages/CadastrarMusica";
const { Header, Content } = Layout;

function MainMenu() {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#C0EEB9",
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            backgroundColor: "#C0EEB9",
          }}
        >
          <Menu.Item key="Main">
            <Link to={`/main/cadastrar`} />
            Cadastrar Músicas
          </Menu.Item>
          <Menu.Item key="Musicas">
            <Link to={`/main/musicas`} />
            Ver Músicas
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, backgroundColor: "#fff" }}
      >
        <Switch>
          <Route path="/main/musicas">
            <Mainpage />
          </Route>
          <Route path="/main/cadastrar">
            <CadastrarMusica />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}

export default MainMenu;
