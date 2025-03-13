//dependencies 
import axios from "axios"; //api calls 
import { useState } from "react"; //manage state variables 
import { Card, Form, Input, Button, Alert } from "antd"; //antdesign 
import { useNavigate } from "react-router-dom";
import "./login-page.css";  
import logo from "./images/nurtura_logo.svg"; 


const LoginPage = ({ loginUser }) => {

    const[loading, setLoading] = useState(false); 
    const[alert, setAlert] = useState(null); 
    const navigate = useNavigate(); //hook for nav 

    //form submission 
    const onFinish = async (data) => {
        setLoading(true); 
        setAlert(null); //clears prev alerts 
        console.log("Login Success: ", data);

        try {
            //sending api request 
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/login`, 
                {
                username: data.username, 
                password: data.password
                }
            );

            if (response.data.success) {
                loginUser(response.data.success); 
                navigate("/dashboard"); // redirect on success
            } else {
                setAlert(<Alert message="Invalid data" type="error" closable />);
            }
        
        } catch (e) {
            setAlert(<Alert message="Server error. Try again later." type="error" closable />);
        }

        setLoading(false);

    };

    return (

        <div className = "login-container"> {/*wrapper container*/}

            <Card className = "login-card"> {/*Box for login form*/}

            <div className="login-logo"> 
                <img src={logo} alt="Logo" />
            </div>
            <h2>Sign in:</h2>

            {alert} 

            <Form name = "login-form" onFinish={onFinish}> 


                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please enter your username." }]}
                    >
                        <Input />
                    </Form.Item>

                <Form.Item 
                    label = "Password"
                    name = "password"
                    rules= {[{ required: true, message: "Please enter your password."}]}
                    >
                        <Input.Password />
                    </Form.Item>

                <Form.Item className= "login-button-container">
                    <Button className="login-button" htmlType="submit" loading={loading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </div>
    );

};


export default LoginPage;


