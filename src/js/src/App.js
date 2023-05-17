import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Empty, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import apiClient, { getAllStudents } from "./client";
import Footer from "./Footer";
import AddStudentForm from "./forms/AddStudentForm";
import Modal from "antd/es/modal/Modal";
import { errorNotification } from "./Notification";

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

  const fetchStudents = async () => {
    setFetching(true);
    try {
      const studentsData = await apiClient.getAllStudents();
      setStudents(studentsData);
    } catch (error) {
      const errorData = error.response.data;
      errorNotification(errorData.message);
    } finally {
      setFetching(false);
    }
  };
  const openAddStudentModal = () => setAddingStudent(true);

  const closeAddStudentModal = () => setAddingStudent(false);

  const commonElements = () => (
    <div>
      <Modal
        title="Add new student"
        open={addingStudent}
        onOk={closeAddStudentModal}
        onCancel={closeAddStudentModal}
        width={1000}
      >
        <AddStudentForm
          onSuccess={() => {
            closeAddStudentModal();
            fetchStudents();
          }}
          onFailure={(error) => {
            console.log(error);
          }}
        />
      </Modal>
      <Footer
        numberOfStudents={students.length}
        onAddStudentClick={openAddStudentModal}
      ></Footer>
    </div>
  );

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
          style={{ marginBottom: "100px" }}
          columns={studentCols}
          dataSource={students}
          rowKey={"studentId"}
          pagination={false}
        />

        {commonElements()}
      </Container>
    );
  }
  return (
    <Container>
      <Empty description={<h1>No Student found</h1>} />
      {commonElements()}
    </Container>
  );
};

export default App;
