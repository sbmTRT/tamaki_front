//Datatables Option Setting
const options_disp = {
    language: {
        emptyTable: "テーブルにデータがありません",
        info: " _TOTAL_ 件中 _START_ から _END_ まで表示",
        infoEmpty: " 0 件中 0 から 0 まで表示",
        infoFiltered: "（全 _MAX_ 件より抽出）",
        infoThousands: ",",
        lengthMenu: "_MENU_ 件表示",
        loadingRecords: "読み込み中...",
        processing: "処理中...",
        search: "検索:",
        zeroRecords: "一致するレコードがありません",
        paginate: {
            first: "先頭",
            last: "最終",
            next: "次へ",
            previous: "前へ",
        },
    },
    paging: true,
    lengthChange: true,
    lengthMenu: [10, 25, 50, 100],
    displayLength: 50,
    searching: true,
    ordering: true,
    info: true,
    autoWidth: true,
    stateSave: false,
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    scrollY: true,
    scrollX: true,
    scrollCollapse: true,
    order: [
        [1, "asc"]
    ],
    fixedColumns: {
        leftColumns: 1,
    },
    columnDefs: [
        { targets: 1, visible: false, searchable: false }
    ]
};

//Datatables Column Setting
const columns_disp = [
    {
        data: "sys_id",
        orderable: false,
        render: function (data, type, row, meta) {
        return `<div class="btn-toolbar">
            <div class="btn-group btn-group-sm" role="group">
            <button class="btn btn-secondary" id="disp_m002c" name="disp_m002c" value="${data}" data-jnum="${meta.row}">閲覧</button>
            </div>
            </div>`;
        },
    },
    { data: "user_id" },
    { data: "role" },
    { data: "user_name" },
    { data: "user_email" },
    { data: "auth_flag" }
];

export default {
    options,
    columns,
    options_disp,
    columns_disp,
};
