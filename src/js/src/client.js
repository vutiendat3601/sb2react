import axios from "axios";

const BASE_URL = "api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiEndpoints = {
  // Define your API endpoints here
  students: "/students",
};

const apiClient = {
  // Define functions to call your API endpoints here
  getAllStudents: async () => {
    const response = await api.get(apiEndpoints.students);
    return response.data;
  },
  addNewStudent: async (student) => {
    const response = await api.post(apiEndpoints.students, student);
    return response.data;
  },
  // Add more API endpoint functions here
};
export default apiClient;
