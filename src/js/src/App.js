import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import { getAllStudents } from "./client";
import Footer from "./Footer";
import AddStudentForm from "./forms/AddStudentForm";
import Modal from "antd/es/modal/Modal";

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

  const [addingStudent, setAddingStudent] = useState(false);
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
  const openAddStudentModal = () => setAddingStudent(true);

  const closeAddStudentModal = () => setAddingStudent(false);

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
        <Modal
          title="Add new student"
          open={addingStudent}
          onOk={closeAddStudentModal}
          onCancel={closeAddStudentModal}
          width={1000}>
          <AddStudentForm
            onSuccess={() => {
              this.closeAddStudentModal();
              this.fetchStudents();
            }}
            onFailure={(error) => {
              const message = error.error.message;
              const description = error.error.httpStatus;
              // errorNotification(message, description);
            }}
          />
        </Modal>
        <Footer onAddStudentClick={openAddStudentModal}></Footer>
      </Container>
    );
  }
  return <h1>No Student found</h1>;
};

export default App;
