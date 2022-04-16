import {
  HomeOutlined,
  ScheduleOutlined,
  SnippetsFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

interface SiderProps {
  children?: any;
}

function CustomSider({ children }: SiderProps) {
  const [collapsed, setcollapsed] = useState<boolean>(false);

  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultOpenKeys={["sub1"]}>
          <Menu.Item icon={<HomeOutlined />} key="sub0">
            <NavLink to={"/"}>Home</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" title="Horario" icon={<ScheduleOutlined />}>
            {days.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <NavLink reloadDocument to={`/${item}`}>
                    {item}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </SubMenu>
          <SubMenu key="sub2" title="Planchas" icon={<SnippetsFilled />}>
            <Menu.Item key={1}>
              <a
                href="https://sites.google.com/uni.pe/drivefc/inicio?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                CEC
              </a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined
              style={{ margin: "0 0 0 20px" }}
              onClick={toggle}
            />
          ) : (
            <MenuFoldOutlined
              style={{ margin: "0 0 0 20px" }}
              onClick={toggle}
            />
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px ",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          NFT Schedule ©2022 Created by andr33wD
        </Footer>
      </Layout>
    </Layout>
  );
}

export default CustomSider;
