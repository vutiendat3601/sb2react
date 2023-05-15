package com.datvutech.sb2react.student;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datvutech.sb2react.student.Student.Gender;

@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(),
                        "Dat",
                        "Vu",
                        "vutien.dat.3601@gmail.com",
                        Gender.MALE),
                new Student(UUID.randomUUID(),
                        "Nhan",
                        "Huynh",
                        "thanhthu10102006@gmail.com",
                        Gender.FEMALE)
        );
    }
}
