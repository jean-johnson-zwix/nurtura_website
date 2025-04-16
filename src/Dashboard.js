import React, { useState } from "react";
import { Card, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import logo from "./images/nurtura_logo.svg";
import "./login-page.css"; // Reuse same styles

const DashboardPage = () => {
  const [file, setFile] = useState(null);

  const handleBeforeUpload = (file) => {
    setFile(file);
    return false; // prevent auto upload
  };

  const handleSubmit = () => {
    if (!file) {
      message.error("Please select a file first!");
      return;
    }

    // Placeholder for now
    message.success("File ready for processing (OCR logic coming next)");
    console.log("Selected file:", file);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2>Upload Nutrition Label</h2>

        <Upload beforeUpload={handleBeforeUpload} showUploadList={{ showRemoveIcon: true }}>
          <Button icon={<UploadOutlined />}>Choose Image</Button>
        </Upload>

        <Button
          className="analyze-button"
          style={{ marginTop: 20, width: "100%" }}
          onClick={handleSubmit}
        >
          Analyze Label
        </Button>

        {/* Placeholder for extracted data */}
        <div style={{ marginTop: 30 }}>
          <h3>Extracted Data (Coming Soon)</h3>
          <p>Once you upload a label, the nutrition info will appear here.</p>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
