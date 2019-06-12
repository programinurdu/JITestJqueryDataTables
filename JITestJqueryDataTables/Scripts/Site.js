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
    var table = $('#ajaxjdTable2').DataTable({
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
            { "data": "Telephone" },
            {
                "render": function (data, type, row, meta) {
                    return '<a class="btn btn-primary btn-xs" href="/Home/StudentInfo/' + row.StudentId + '">View</a> <a class="btn btn-danger btn-xs" href="/Home/DeleteStudent/' + row.StudentId + '">Delete</a>';
                }
            }
        ],
        dom: 'lfBrtip',
        buttons: [
            'copy', 'excel', 'csv', 'pdf', 'print'
        ]
    });

    table.buttons().container().appendTo($("#printbar"));
});