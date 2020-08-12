$(document).ready(function () {
    $('#example').DataTable();
});

var database = firebase.database();

database.ref('1/matkul')