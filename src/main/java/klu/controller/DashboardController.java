package klu.controller;


import klu.*;
import klu.model.Attendance;
import klu.model.Grade;
import klu.model.Report;
import klu.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DashboardController {

    @Autowired private AttendanceRepository attendanceRepo;
    @Autowired private ReportRepository reportRepo;
    @Autowired private GradeRepository gradeRepo;
    @Autowired private UserRepository userRepo;

    @GetMapping("/attendance/{username}")
    public List<Attendance> getAttendance(@PathVariable String username) {
        return attendanceRepo.findByUserUsername(username);
    }

    @GetMapping("/reports/{username}")
    public List<Report> getReports(@PathVariable String username) {
        return reportRepo.findByUserUsername(username);
    }

    @GetMapping("/grades/{username}")
    public List<Grade> getGrades(@PathVariable String username) {
        return gradeRepo.findByUserUsername(username);
    }
}

