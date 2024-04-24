import {Select, Button, Image, Layout, Typography, Collapse, theme, Input } from "antd";
import React, { useState, useEffect } from "react";
import { CaretRightOutlined, CloseCircleFilled,CalendarOutlined,AlertOutlined, TabletOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

const i1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9ODK5ovy1Y5oVcI-seUB0NF9ib_wiTwqxozH16Hg8w&s";
const i2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylObEfIVgdzJgz6gTcGdbiL2ogOzr_BAuHlr4zPu12w&s";
const i3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9ODK5ovy1Y5oVcI-seUB0NF9ib_wiTwqxozH16Hg8w&s";
const i4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9ODK5ovy1Y5oVcI-seUB0NF9ib_wiTwqxozH16Hg8w&s";
const i5 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylObEfIVgdzJgz6gTcGdbiL2ogOzr_BAuHlr4zPu12w&s";
const i6 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9ODK5ovy1Y5oVcI-seUB0NF9ib_wiTwqxozH16Hg8w&s";
const i7 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9ODK5ovy1Y5oVcI-seUB0NF9ib_wiTwqxozH16Hg8w&s";

const images = [i1, i2, i3, i4, i5, i6, i7];

//content create instance
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
//end

const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [create, setCreate] = useState(false);
  const [next, setNext] = useState(false);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    boxShadow: "0px 2px 0px 0px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const handleCreateInstance = () => {
    setCreate(true);
  };
  const handleNext=()=>{
    setNext(true)
  }
  const closeNext = () => {
    setNext(false)
  };
  const handleBack=()=>{
    setNext(false)
  }
  const handleCreate=()=>{
    setNext(false)
    setCreate(false);
  }
  const closeContent = () => {
    setNext(false)
    setCreate(false);
  };

  return (
    <Layout style={{ backgroundColor: "white", height: 600, borderRadius: 10 }}>
      <Content style={{ float: "left" }}>
        <Text type="secondary" style={{ fontSize: 25, marginLeft: 5 }}>
          FEATURES
        </Text>
        <Button
          onClick={handleCreateInstance}
          style={{
            marginLeft: 700,
            color: "white",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          Create Instance
        </Button>
        <Image
          preview={false}
          src={images[currentIndex]}
          style={{
            marginTop: 10,
            marginLeft: 20,
            width: 920,
            height: 200,
            borderRadius: 6,
          }}
        />
        <Paragraph style={{ fontSize: 15, paddingLeft: 20, paddingTop: 10 }}>
          Technological advancements have led to significant changes in society.
          The earliest known technology is the stone tool, used during
          prehistoric times, followed by the control of fire, which contributed
          to the growth of the human brain and the development of language
          during the Ice Age. The invention of the wheel in the Bronze Age
          allowed greater travel and the creation of more complex machines. More
          recent technological inventions, including the printing press,
          telephone, and the Internet, have lowered barriers to communication
          and ushered in the knowledge economy.
        </Paragraph>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          <Collapse.Panel key="1" header="Technology" style={panelStyle}>
            <Paragraph>
              Technological advancements have led to significant changes in
              society. The earliest known technology is the stone tool.
            </Paragraph>
          </Collapse.Panel>
          <Collapse.Panel key="2" header="Technology" style={panelStyle}>
            <Paragraph>
              Technological advancements have led to significant changes in
              society. The earliest known technology is the stone tool.
            </Paragraph>
          </Collapse.Panel>
          <Collapse.Panel key="3" header="Technology" style={panelStyle}>
            <Paragraph>
              Technological advancements have led to significant changes in
              society. The earliest known technology is the stone tool.
            </Paragraph>
          </Collapse.Panel>
        </Collapse>
      </Content>
      {create ? (
        <Content
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: 956,
            height: 600,
            borderRadius: 10,
          }}
        >
          <Content style={{top: 0,
                  height: "100%",
                  width: 658,
                  marginLeft: 300,
                  borderRadius: 10,
                  backgroundColor: "white",}}>
              <Content
                style={{
                  display: "flex",
                }}
              >
                <Content style={{ margin: 20 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                      backgroundColor: "lightblue",
                      borderRadius: 10,
                      boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    &#8704;
                  </Text>
                  <Text style={{ fontSize: 25, marginLeft: 25 }}>
                    NEW INSTANCE
                  </Text>
                </Content>
                <Button style={{ margin: 20,backgroundColor:'black',color:'white',fontSize:15, }} onClick={closeContent}>
                  <CloseCircleFilled />
                </Button>
              </Content>
              <Content>
                <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Instance Name</Button>
                <Input placeholder="Instance Name" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
              </Content>
              <Content>
                <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
              </Content>
              <Content>
                <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Cloud Provider</Button>
                <Select style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[ {value: 'jack',label: 'Jack',},{value: 'lucy',label: 'Lucy',},{value: 'tom',label: 'Tom',},]}
                />
              </Content>
              <Text style={{marginLeft:20,}}>Select Plane</Text>
              <Content style={{width:620,height:1,backgroundColor:'black',marginLeft:20,}}></Content>
              <Layout>
                <Layout style={{display:'flex',flexDirection:'row', marginLeft:20,marginTop:20,backgroundColor:'white'}}>
                    <Content style={{display:'flex',flexDirection:'column', height:290,width:50,backgroundColor:'lightblue',boxShadow:'2px 2px',borderRadius:5}}>
                        <Text  style={{marginRight:90, fontSize: 20, marginLeft: 5, fontWeight: 'bold', }}>Standard</Text>
                        <CalendarOutlined style={{fontSize:60,marginLeft:10,marginRight:100}}/>
                        <Text style={{marginLeft:10,fontWeight: 'bold',fontSize:20}}>******/-Per Month</Text>
                        <Text style={{marginLeft:10,marginTop:10,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                    </Content>
                    <Content style={{display:'flex',flexDirection:'column',marginLeft:3, height:290,width:50,backgroundColor:'lightblue',boxShadow:'2px 2px',borderRadius:5}}>
                        <Text  style={{ marginRight:120, fontSize: 20, marginLeft: 5, fontWeight: 'bold' }}>Free</Text>
                        <AlertOutlined style={{fontSize:60,marginLeft:10}}/>
                        <Text style={{marginLeft:10,fontWeight: 'bold',fontSize:20}}>******/-Per Month</Text>
                        <Text style={{marginLeft:10,marginTop:10,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                    
                    </Content>
                    <Content style={{display:'flex',flexDirection:'column',marginLeft:3,height:290,width:50,backgroundColor:'lightblue',boxShadow:'2px 2px',borderRadius:5}}>
                        <Text  style={{ marginRight:90,fontSize: 20, marginLeft: 5, fontWeight: 'bold' }}>Enterprise</Text>
                        <TabletOutlined style={{fontSize:60,marginLeft:10}}/>
                        <Text style={{marginLeft:10,fontWeight: 'bold',fontSize:20}}>******/-Per Month</Text>
                        <Text style={{marginLeft:10,marginTop:10,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        <Text style={{marginLeft:10,marginTop:4,fontSize:20}}>*Advancements have</Text>
                        
                        </Content>
                    </Layout>
                    <Content>
                        <Button onClick={handleNext} style={{marginLeft:560,marginTop:10,height:35,width:80,backgroundColor:'black',color:'white'}}>Next</Button>
                    </Content>
                </Layout>
              </Content>
            </Content>
          ) : null}
          {next?(
            <Content
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              width: 956,
              height: 600,
              borderRadius: 10,
            }}
          >
            <Content style={{top: 0,
                    height: "100%",
                    width: 658,
                    marginLeft: 300,
                    borderRadius: 10,
                    backgroundColor: "white",}}>
                <Content
                  style={{
                    display: "flex",
                  }}
                >
                  <Content style={{ margin: 20 }}>
                    <Text
                      style={{
                        fontSize: 24,
                        textAlign: "center",
                        backgroundColor: "lightblue",
                        borderRadius: 10,
                        boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      &#8704;
                    </Text>
                    <Text style={{ fontSize: 25, marginLeft: 25 }}>
                      NEW INSTANCE
                    </Text>
                  </Content>
                    <Button style={{ margin: 20,backgroundColor:'black',color:'white',fontSize:15, }} onClick={closeNext}>
                      <CloseCircleFilled />
                    </Button>
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Instance Name</Button>
                    <Input placeholder="Instance Name" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                    <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                    <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                    <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content style={{marginTop:30}}>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Cloud Provider</Button>
                    <Select style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[ {value: 'jack',label: 'Jack',},{value: 'lucy',label: 'Lucy',},{value: 'tom',label: 'Tom',},]}
                    />
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Cloud Provider</Button>
                    <Select style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[ {value: 'jack',label: 'Jack',},{value: 'lucy',label: 'Lucy',},{value: 'tom',label: 'Tom',},]}
                    />
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Cloud Provider</Button>
                    <Select style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[ {value: 'jack',label: 'Jack',},{value: 'lucy',label: 'Lucy',},{value: 'tom',label: 'Tom',},]}
                    />
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                    <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content>
                    <Button style={{width:150,height:40,marginLeft:20,backgroundColor:'black',color:'white'}}>Region</Button>
                    <Input placeholder="Region" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginBottom:5, width:470,height:40,marginLeft:1}}/>
                  </Content>
                  <Content style={{float:'left',marginTop:30,marginRight:20}}>
                        <Button onClick={handleBack} style={{marginLeft:460,marginTop:10,height:35,width:80,backgroundColor:'lightgrey',color:'black'}}>Back</Button>
                  </Content>
                  <Content style={{marginTop:30}}>
                        <Button onClick={handleCreate} style={{marginTop:10,height:35,width:80,backgroundColor:'black',color:'white'}}>Create</Button>
                  </Content>
              </Content>
            </Content>
          ):null}
        </Layout>
  );
};

export default Features;
