using JITestJqueryDataTables.Models;
using JITestJqueryDataTables.ViewModels.Home;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JITestJqueryDataTables.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            TestViewModel tvm = new TestViewModel();
            List<Student> students = tvm.GetAllStudents();
            return View(students);
        }

        public ActionResult Desktop()
        {
            TestViewModel tvm = new TestViewModel();
            List<Student> students = tvm.GetAllStudents();
            return View(students);
        }

        public ActionResult Ajax()
        {
            return View();
        }

        public ActionResult StudentList()
        {
            TestViewModel tvm = new TestViewModel();
            List<Student> students = tvm.GetAllStudents();

            return Json(new { data = students }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Ajax2()
        {
            return View();
        }

        public ActionResult StudentInfo(int Id=0)
        {
            TestViewModel tvm = new TestViewModel();
            Student student = tvm.GetStudentInfoById(Id);

            return View(student);
        }
    }
}