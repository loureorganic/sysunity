$(document).ready(function() {
    $('#myTable').DataTable({
        lengthMenu:[5,10,20,50],
        "filter": false,
        'columnDefs': [ {
            'targets': [2], /* column index */       
            'orderable': false, /* true or false */
         }],
         "language": {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "Nada encontrado - desculpe",
            "info": " _MAX_ registros",
            "infoEmpty": "Nenhum registro disponível",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Último",
                "next":       "Próximo",
                "previous":   "Anterior"
            }
        }       
    });
} );

