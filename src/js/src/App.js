import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container.js";
import { getAllStudents } from "./client.js";

const studentCols = [
  {
    title: "",
    key: "avatar",
    render: (text, student) => (
      <Avatar size={"large"}>
        {`${student.firstName.charAt(0)}${student.lastName.charAt(0)}`}
      </Avatar>
    ),
  },
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

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App = () => {
  const [students, setStudents] = useState([]);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    setFetching(true);
    getAllStudents()
      .then((resp) => resp.json())
      .then((students) => {
        setStudents(students);
        setFetching(false);
      });
  };

  if (fetching) {
    return (
      <Container>
        <Spin indicator={antIcon}></Spin>
      </Container>
    );
  }

  if (students && students.length) {
    return (
      <Container>
        <Table
          columns={studentCols}
          dataSource={students}
          rowKey={"studentId"}
          pagination={false}
        />
      </Container>
    );
  }
  return <h1>No Student found</h1>;
};

export default App;
