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
            { "data": "Telephone" }
        ],
        dom: 'lfBrtip',
        buttons: [
            'copy', 'excel', 'csv', 'pdf', 'print'
        ]
    });

    table.buttons().container().appendTo($("#printbar"));
});