using JITestJqueryDataTables.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JITestJqueryDataTables.ViewModels.Home
{
    public class TestViewModel
    {
        public List<Student> GetAllStudents()
        {
            List<Student> students = new List<Student>();

            using (Test2Context db = new Test2Context())
            {
                students = db.Students.ToList();
            }

            return students;
        }

        public Student GetStudentInfoById(int id)
        {
            Student student = new Student();

            using (Test2Context db = new Test2Context())
            {
                student = db.Students.Where(x => x.StudentId == id).FirstOrDefault();
            }

            return student;
        }
    }
}