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
    }
}