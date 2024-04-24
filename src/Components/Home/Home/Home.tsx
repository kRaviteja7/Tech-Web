import React from "react";
import {
  MoneyCollectOutlined,
  ProductOutlined,
  WindowsOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Image } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

import img1 from "./WhatsApp Image 2024-04-22 at 10.53.22 PM (1).jpeg";
import Instances from "../Instances/Instances";
import Products from "../Products/Products";

const { Title } = Typography;
const { Content, Sider } = Layout;

const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [user, setUser] = useState<{
    username: string;
    email: string;
    img: string;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser(parsedUserData);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleMenuClick = (item: any) => {
    setSelectedItem(item.key);
  };
  const handleEnvisionClick = () => {
    setSelectedItem(null);
    setSelectedItem("Default");
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Products":
        return <Products />;
      case "Instances":
        return <Instances />;
      case "Billing":
        return "bil";
      default:
        return (
          <Layout>
            <Content>
              <Image
                src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4="
                style={{ width: 1280,borderRadius:5, height: 400, marginLeft: 16 }}
                preview={false}
              />
              <Content style={{ display: "flex", flexDirection: "row" }}>
                <Title level={5} style={{ width: "55%", marginLeft: 10 }}>
                  Your challenges are to deliver useful information and added
                  value, and maximising your brand is key. We help you overcome
                  these challenges by handling the content technology for you,
                  so you can focus on what you do best: creating the content. We
                  help you do this by using the latest innovations in
                  multi-channel publishing, digital asset management, digital
                  publishing, and creative & automation software.At Creative
                  Folks, we enable you to deliver your content in a way your
                  customers want to consume it. We use the latest cutting edge
                  technologies to do this. And we have the expertise to
                  recommend and implement the best platforms to reach your
                  audience and promote your brand.
                </Title>
                <Image
                  src={img1}
                  style={{ width: 600, height: 330,borderRadius:10 }}
                  preview={false}
                />
              </Content>
            </Content>
          </Layout>
        );
    }
  };

  return (
    <Layout style={{ height: 736, margin: 20, borderRadius: 10 }}>
      <Sider collapsed={collapsed} style={{ height: 736,borderRadius:10 }}>
        <Title
          onClick={handleEnvisionClick}
          style={{
            color: "white",
            marginLeft: 25,
            width: "100%",
            cursor: "pointer",
          }}
        >
          Tech
        </Title>
        <Button
          onClick={toggleCollapsed}
          style={{
            position: "absolute",
            left: collapsed ? 65 : 170,
            borderRadius: 20,
            width: 10,
            height: 30,
            backgroundColor:'yellow',
            textAlign:'start'
          }}
        >
          {collapsed ? (
            <RightCircleOutlined
              style={{ fontSize: 20 }}
            />
          ) : (
            <LeftCircleOutlined style={{ fontSize: 20 }} />
          )}
        </Button>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedItem ? [selectedItem] : []}
          style={{ marginTop: 50 }}
          onClick={handleMenuClick}
        >
            <Content style={{marginLeft:30, display: "flex",marginBottom:50, flexDirection: 'column' }}>
              <Menu.Item>
                <Image
                  src={user?.img}
                  preview={false}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
              </Menu.Item>
              <Content >
                <Menu.Item>
                  <Title level={4} style={{ color: "white",marginTop:10 }}>
                    {user?.username}
                  </Title>
                </Menu.Item>
                <Menu.Item >
                  <Title level={5} style={{ color: "white",textAlign:'start',height:30 }}>
                    {user?.email}
                  </Title>
                </Menu.Item>
              </Content>
            </Content>
          <Menu.Item key="Products" icon={<ProductOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="Instances" icon={<WindowsOutlined />}>
            Instances
          </Menu.Item>
          <Menu.Item key="Billing" icon={<MoneyCollectOutlined />}>
            Billing
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>{renderContent()}</Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
