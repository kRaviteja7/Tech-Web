import { Typography, Image, Col, Row} from "antd";
import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <Row style={{height:'100%',width:'100%',backgroundColor:'ActiveCaption'}}>
      <Col span={12} style={{ height: 776 }}>
        <Image
          src='https://www.techbusinessnews.com.au/wp-content/uploads/2022/02/technology.jpg.webp'
          style={{ marginTop: 190, marginLeft: 80,borderRadius:10, height: 300 }}
          preview={false}
        />
      </Col>      
      <Col span={12}>
        <Title
          style={{
            fontSize:80,
            textAlign: "center",
            marginTop: 160,
            color:'white'
          }}
        >
          invention
        </Title>
        <Row>
          <Col style={{marginTop:60,marginLeft:250,color:'white'}}>
            <Link to='/'>
                <RiAdminFill style={{height:60,width:60,cursor:'pointer',color:'white'}}/>
            </Link>
            <Title
              level={3}
              style={{color:'white'}}
            >
              Admin
            </Title>
          </Col>
          <Col style={{marginTop:60,marginLeft:140}}>
            <Link to='/login'>
                <FaRegUserCircle
                    style={{height:60,width:60,color:'white',cursor:'pointer'}}
                />
            </Link>
            <Title
              level={3}
              style={{color:'white',marginLeft:5}}
            >
              User
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
