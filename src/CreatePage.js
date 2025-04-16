// dependencies
import axios from "axios";
import { useState } from "react";
import { Card, Form, Input, Button, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import "./login-page.css"; // reuse same styles
import logo from "./images/nurtura_logo.svg";

console.log("CreatePage loaded");

const CreatePage = () => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (data) => {
        setLoading(true);
        setAlert(null);
        console.log("Signup Data: ", data);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/register`,
                {
                    username: data.username,
                    password: data.password,
                    email: data.email,
                }
            );

            if (response.data.success) {
                setAlert(<Alert message="Account created successfully!" type="success" closable />);
                setTimeout(() => navigate("/login"), 1500); // Redirect after short delay
            } else {
                setAlert(<Alert message="Failed to create account." type="error" closable />);
            }
        } catch (e) {
            setAlert(<Alert message="Server error. Try again later." type="error" closable />);
        }

        setLoading(false);
    };

    return (
        <div className="login-container">
            <Card className="login-card">
                <div className="login-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h2>Create Account</h2>

                {alert}

                <Form name="create-form" onFinish={onFinish}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please enter a username." }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email." },
                            { type: "email", message: "Enter a valid email." },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter a password." }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className="login-button-container">
                    <div className="login-button-container">
                        <div style={{ fontSize: "13px" }}>
                        <span>Already have an account? </span>
                        <Button type="link" onClick={() => navigate("/")}>
                            Sign in
                        </Button>
                        </div>
                        <Button className="signup-button" htmlType="submit" loading={loading}>
                        Sign Up
                        </Button>
                    </div>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    );
};

export default CreatePage;
