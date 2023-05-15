import { Table } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import { getAllStudents } from "./client.js";

const columns = [
  {
    title: "Student ID",
    dataIndex: "studentId",
    key: "studentId",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];

const App = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getAllStudents()
      .then((resp) => resp.json())
      .then((students) => {
        setStudents(students);
      });
  };

  if (students && students.length) {
    return (
      <Table columns={columns} dataSource={students} rowKey={"studentId"} />
    );
  }
  return <h1>Spring Boot with React</h1>;
};

export default App;
