$(document).ready(function () {
    $('#jdTable').dataTable();
});

$(document).ready(function () {
    $('#desktopjdTable').dataTable({
        "scrollY": '50vh',
        "paging": false
    });
});

$(document).ready(function () {
    $('#ajaxjdTable').dataTable({
        "scrollY": '50vh',
        "paging": false,
        "ajax": {
            "url": "/Home/StudentList",
            "type": "Get",
            "datatype": "json"
        },
        "columns": [
            { "data": "StudentId" },
            { "data": "FullName" },
            { "data": "Email" },
            { "data": "Mobile" },
            { "data": "Telephone" }
        ]
    });
});


$(document).ready(function () {
    $('#ajaxjdTable2').dataTable({
        "ajax": {
            "url": "/Home/StudentList",
            "type": "Get",
            "datatype": "json"
        },
        "columns": [
            { "data": "StudentId" },
            { "data": "FullName" },
            { "data": "Email" },
            { "data": "Mobile" },
            { "data": "Telephone" }
        ]
    });
});