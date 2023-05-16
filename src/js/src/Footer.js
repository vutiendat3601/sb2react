import React from "react";
import Container from "./Container";
import { Button, Avatar } from "antd";
import "./Footer.css";

const Footer = ({ numberOfStudents, onAddStudentClick }) => (
  <div className="footer">
    <Container>
      {numberOfStudents !== undefined ? (
        <Avatar
          style={{ backgroundColor: "#f56a00", marginRight: "5px" }}
          size="large">
          {numberOfStudents}
        </Avatar>
      ) : null}
      <Button onClick={() => onAddStudentClick()} type="primary">
        Add new student +
      </Button>
    </Container>
  </div>
);

export default Footer;
