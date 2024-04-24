import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import {
  DisconnectOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const customHeader = (
    <Title level={3} style={{ fontWeight: "bold", fontSize: "20px",marginTop:2 }}>
      Artemis
    </Title>
);
const customHeader2 = (
    <Title level={3} style={{ fontWeight: "bold", fontSize: "20px",marginTop:2 }}>
      XMS
    </Title>
);
const customHeader3 = (
    <Title level={3} style={{ fontWeight: "bold", fontSize: "20px",marginTop:2 }}>
      Pluse Bot
    </Title>
);
const customHeader4 = (
    <Title level={3} style={{ fontWeight: "bold", fontSize: "20px",marginTop:2 }}>
      RPT
    </Title>
);
const customHeader5 = (
    <Title level={3} style={{ fontWeight: "bold", fontSize: "20px",marginTop:2 }}>
      Wayyak
    </Title>
);

const Instances: React.FC = () => {
    
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    boxShadow: "0px 2px 0px 0px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Layout style={{ minHeight: "95vh" }}>
      <Content
        style={{ paddingLeft: 20, backgroundColor: "rgba(51, 51, 51, 0.2)" }}
      >
        <Title style={{ color: "blue" }}>Instances</Title>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
            marginTop: 5,
            marginRight: 10,
          }}
        >
            <Collapse.Panel
            key="1"
            header={customHeader}
            style={panelStyle}
          >
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Name</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Region</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Provider</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Plan</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Environment</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Created</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Status</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Action</Title>
            </Content>
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Artemis testdemo 1</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Mumbai</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>GCP</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Free</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>kuberneties</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Des 10, 2022 ,03:42 PM</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>In Progress</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}><DisconnectOutlined /><DeleteOutlined /><MoreOutlined /></Title>
            </Content>
          </Collapse.Panel>
        </Collapse>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
            marginTop: 5,
            marginRight: 10,
          }}
        >
            <Collapse.Panel
            key="1"
            header={customHeader2}
            style={panelStyle}
          >
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Name</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Region</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Provider</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Plan</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Environment</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Created</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Status</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Action</Title>
            </Content>
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Artemis testdemo 1</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Mumbai</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>GCP</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Free</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>kuberneties</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Des 10, 2022 ,03:42 PM</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>In Progress</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}><DisconnectOutlined /><DeleteOutlined /><MoreOutlined /></Title>
            </Content>
          </Collapse.Panel>
        </Collapse>
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
              marginTop: 5,
              marginRight: 10,
            }}
        >
            <Collapse.Panel
            key="1"
            header={customHeader3}
            style={panelStyle}
          >
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Name</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Region</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Provider</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Plan</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Environment</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Created</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Status</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Action</Title>
            </Content>
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Artemis testdemo 1</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Mumbai</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>GCP</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Free</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>kuberneties</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Des 10, 2022 ,03:42 PM</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>In Progress</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}><DisconnectOutlined /><DeleteOutlined /><MoreOutlined /></Title>
            </Content>
          </Collapse.Panel>
        </Collapse>
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
              marginTop: 5,
              marginRight: 10,
            }}
        >
          <Collapse.Panel
            key="1"
            header={customHeader4}
            style={panelStyle}
          >
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Name</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Region</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Provider</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Plan</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Environment</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Created</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Status</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Action</Title>
            </Content>
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Artemis testdemo 1</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Mumbai</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>GCP</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Free</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>kuberneties</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Des 10, 2022 ,03:42 PM</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>In Progress</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}><DisconnectOutlined /><DeleteOutlined /><MoreOutlined /></Title>
            </Content>
          </Collapse.Panel>
        </Collapse>
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
              marginTop: 5,
              marginRight: 10,
            }}
        >
          <Collapse.Panel
            key="1"
            header={customHeader5}
            style={panelStyle}
          >
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Name</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Region</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Provider</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Plan</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Environment</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Created</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Status</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'white',backgroundColor:'black',marginLeft:1,marginTop:2,paddingLeft:10}}>Action</Title>
            </Content>
            <Content style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                <Title level={4} style={{width:220,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Artemis testdemo 1</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Mumbai</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>GCP</Title>
                <Title level={4} style={{width:80,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Free</Title>
                <Title level={4} style={{width:150,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>kuberneties</Title>
                <Title level={4} style={{width:230,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>Des 10, 2022 ,03:42 PM</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}>In Progress</Title>
                <Title level={4} style={{width:120,height:40,borderRadius:5,boxShadow:'2px 2px 2px 2px',color:'black',backgroundColor:'white',marginLeft:1,marginTop:2,paddingLeft:10}}><DisconnectOutlined /><DeleteOutlined /><MoreOutlined /></Title>
            </Content>
          </Collapse.Panel>
        </Collapse>
      </Content>
    </Layout>
  );
};

export default Instances;
