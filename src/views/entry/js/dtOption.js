//Datatables Option Setting
const dtOption = {
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
    select: {
        rows: {
        _: "(%d 件選択)",
        0: "",
        1: "(%d 件選択)",
        },
    },
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
    select: {
    style: "single",
    },
    stateSave: false,
    scrollCollapse: true,
    order: [
    [4, "asc"],
    ],
    fixedColumns: {
    leftColumns: 1,
    },
    // columnDefs: [
    // { targets: 1, visible: false, searchable: false }
    // ]
};

//Datatables Column Setting
const dtColumn = [
    { data: 'USERID', title: 'ユーザーID' },
    { data: 'ROLE', title: '役割' },
    { data: 'USER_NAME', title: 'ユーザー名' },
    { data: 'USER_EMAIL', title: 'メール' },
    { data: 'AUTH_FLAG', title: '認証フラグ' },
];

export {
    dtOption,
    dtColumn,
};