import React, { useState } from "react";
import { Input, Layout, Typography } from "antd";
import Features from "../Features/Features";


const { Title } = Typography;
const { Content } = Layout;

const Products: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const renderContent = () => {
        switch (selectedItem) {
            case "1":
                return <Features/>;
            case "2":
                return '2';
            case "3":
                return '3';
            case "4":
                return '4';
            case "5":
                return '5';
            default:
                return <Features/>;
    }}
    const handleMenuClick = (content:any) => {
        setSelectedItem(content);
    };
  return (
    <Layout
      style={{ minHeight: "95vh", backgroundColor: "rgba(51, 51, 51, 0.2)" }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 20,
        }}
      >
        <Title style={{ color: "blue" }}>Products</Title>
        <Input
          placeholder="Search"
          style={{
            width: 150,
            height: 40,
            borderRadius: 10,
            marginRight: 20,
            marginTop: 30,
          }}
        />
      </Content>
      <Content >
        <Content  style={{float: "left", height: 650, marginLeft: 20 }}>
          <Content  onClick={() => handleMenuClick('1')} key='1'
            style={{
              display: "flex",
              cursor:'pointer',
              marginBottom: 6,
              width: 280,
              backgroundColor: selectedItem === "1" ? "black" : "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Title
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: 10,
                paddingTop: 15,
                height: 60,
                marginTop: 19,
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              &#8704;
            </Title>
            <Content style={{ marginLeft: 20 }}>
              <Title level={3} style={{ margin: 0,color: selectedItem === "1" ? "white" : "black" }}>
                Artemis
              </Title>
              <Title level={5} style={{ margin: 0,color: selectedItem === "1" ? "white" : "black" }}>
                Borem ipsum dolor sit amet, jkndjkn fnjs, dolar.
              </Title>
            </Content>
          </Content>
          <Content key='2' onClick={() => handleMenuClick('2')}
            style={{
              display: "flex",
              cursor:'pointer',
              marginBottom: 6,
              width: 280,
              backgroundColor: selectedItem === "2" ? "black" : "white",
              
              padding: 10,
              borderRadius: 10,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Title
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: 10,
                paddingTop: 15,
                height: 60,
                marginTop: 19,
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
                
              }}
            >
              &#8707;
            </Title>
            <Content style={{ marginLeft: 20 }}>
              <Title level={3} style={{ margin: 0,color: selectedItem === "2" ? "white" : "black" }}>
                XMS
              </Title>
              <Title level={5} style={{ margin: 0,color: selectedItem === "2" ? "white" : "black" }}>
                Borem ipsum dolor sit amet, jkndjkn fnjs, dolar.
              </Title>
            </Content>
          </Content>
          <Content key='3' onClick={() => handleMenuClick('3')}
            style={{
              display: "flex",
              cursor:'pointer',
              marginBottom: 6,
              width: 280,
              backgroundColor: selectedItem === "3" ? "black" : "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Title
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: 10,
                paddingTop: 15,
                height: 60,
                marginTop: 19,
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              &#8713;
            </Title>
            <Content style={{ marginLeft: 20 }}>
              <Title level={3} style={{ margin: 0,color: selectedItem === "3" ? "white" : "black" }}>
                Pluse Bot
              </Title>
              <Title level={5} style={{ margin: 0,color: selectedItem === "3" ? "white" : "black" }}>
                Borem ipsum dolor sit amet, jkndjkn fnjs, dolar.
              </Title>
            </Content>
          </Content>
          <Content key='4' onClick={() => handleMenuClick('4')}
            style={{
              display: "flex",
              cursor:'pointer',
              marginBottom: 6,
              width: 280,
              backgroundColor: selectedItem === "4" ? "black" : "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Title
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: 10,
                paddingTop: 15,
                height: 60,
                marginTop: 19,
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              &#8711;
            </Title>
            <Content style={{ marginLeft: 20 }}>
              <Title level={3} style={{ margin: 0,color: selectedItem === "4" ? "white" : "black" }}>
                RPT
              </Title>
              <Title level={5} style={{ margin: 0,color: selectedItem === "4" ? "white" : "black" }}>
                Borem ipsum dolor sit amet, jkndjkn fnjs, dolar.
              </Title>
            </Content>
          </Content>
          <Content key='5' onClick={() => handleMenuClick('5')}
            style={{
              display: "flex",
              cursor:'pointer',
              marginBottom: 6,
              width: 280,
              backgroundColor: selectedItem === "5" ? "black" : "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Title
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                backgroundColor: "lightblue",
                borderRadius: 10,
                paddingTop: 15,
                height: 60,
                marginTop: 19,
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              &#8706;
            </Title>
            <Content style={{ marginLeft: 20 }}>
              <Title level={3} style={{ margin: 0 ,color: selectedItem === "5" ? "white" : "black"}}>
                Wayyak
              </Title>
              <Title level={5} style={{ margin: 0,color: selectedItem === "5" ? "white" : "black" }}>
                Borem ipsum dolor sit amet, jkndjkn fnjs, dolar.
              </Title>
            </Content>
          </Content>
        </Content>
        <Content style={{borderRadius: 10,height:600,marginRight:20,
              boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",marginLeft:320,backgroundColor: "white"}}
            >
            {renderContent()}
        </Content>
      </Content>
    </Layout>
  );
};

export default Products;
