package com.datvutech.sb2react.student;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StudentService {
    private StudentDataAccessService studentDataAccessService;

    public StudentService(StudentDataAccessService studentDataAccessService) {
        this.studentDataAccessService = studentDataAccessService;
    }

    public List<Student> getAllStudents() {
        return studentDataAccessService.selectAllStudents();
    }
}
