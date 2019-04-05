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
    }
}