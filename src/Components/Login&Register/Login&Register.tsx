import React from "react";
import "./login&register.css";
import { Typography, Button, Checkbox, Input, Form } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { Link ,useNavigate} from "react-router-dom";

const { Title } = Typography;

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Basic validation
    if (!email.trim()) {
      message.error('Please enter your email.');
      return;
    }

    if (!password.trim()) {
      message.error('Please enter your password.');
      return;
    }
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.email === email && userData.password === password) {
        message.success('Login successful!');
        setEmail('');
        setPassword('');
        navigate('/home');
      } else {
        message.error('Invalid email or password.');
      }
    } else {
      message.error('No user found with this email.');
    }
  };

  return (
    <div className="log_con">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Title className="log_header" style={{ color: "blueviolet" }}>
          Technology
        </Title>
      </Link>
      <Title level={3} className="log_title">
        User Login
      </Title>
      <Form
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" className="log_in" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" className="log_in" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="log_checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit} className="log_but">
            Sign In
          </Button>
        </Form.Item>
        <Title level={5} className="log_for">
          Forget Password?
        </Title>
        <Title level={5} className="log_or">
          or
        </Title>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Title level={5} className="log_sign">
            Sign Up
          </Title>
        </Link>
      </Form>
    </div>
  );
};
//register

export const Register: React.FC = () => {
  // const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (info: any) => {
    setFileList(info.fileList);
    if (info.file.status === "done") {
      setPreviewImage(info.file.response.url); // Assuming the response contains the image URL
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleSubmit = () => {
    // Validate form fields
    if (!fileList.length) {
      message.error("Please upload an image.");
      return;
    }
    if (!username.trim()) {
      message.error("Please enter a username.");
      return;
    }
    if (!email.trim()) {
      message.error("Please enter an email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      message.error("Please enter a password.");
      return;
    }
    if (password !== rePassword) {
      message.error("Passwords do not match.");
      return;
    }
    const userData = {
      username,
      email,
      password,
      image: previewImage,
    };

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    setUsername("");
    setEmail("");
    setPassword("");
    setRePassword("");
    setPreviewImage("");

    message.success("Registration successful!");
    navigate('/login')
    
  };

  return (
    <div className="reg_con">
      <Title className="reg_header" style={{ color: "blueviolet" }}>
        Technology
      </Title>
      <Title level={3} className="reg_title">
        Register
      </Title>
      <Upload
        listType="picture-circle"
        onChange={handleChange}
        className="reg_img"
        fileList={fileList}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <img
          style={{ maxWidth: 200, maxHeight: 200, display: "block" }}
          alt="Preview"
          src={previewImage}
        />
      )}
      <Form
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="User Name"
            className="reg_in"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email"
            className="reg_in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            className="reg_in"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="rePassword"
          rules={[
            { required: true, message: "Please re-enter your password!" },
          ]}
        >
          <Input.Password
            placeholder="Re Enter Password"
            className="reg_in"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit} className="reg_but">
            Sign Up
          </Button>
        </Form.Item>
        <Title level={5} className="reg_or">
          or
        </Title>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <Title level={5} className="reg_sign">
            Sign In
          </Title>
        </Link>
      </Form>
    </div>
  );
};
