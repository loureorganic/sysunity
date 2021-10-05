// modal - VISUALIZAR

document.getElementById("btnVisibility").addEventListener("click",function(){

  Swal.fire({
title: '<strong>HTML <u>example</u></strong>',
icon: 'info',
html:
  'Usuários cadastrados, ' +
  '<a href="//user_management">links</a> ' +
  'and other HTML tags',
showCloseButton: true,
showCancelButton: true,
focusConfirm: false,
confirmButtonText:
  '<i class="fa fa-thumbs-up"></i> OK!',
confirmButtonAriaLabel: 'Thumbs up, great!',
cancelButtonText:
  '<i class="fa fa-thumbs-down"></i>',
cancelButtonAriaLabel: 'Thumbs down'
});
});

// ---------------------------
// modal - EDITAR
document.getElementById("btnEdit").addEventListener("click",function(){

  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })


});


// ---------------------------
// modal -> DELETAR
document.getElementById("btnDelete").addEventListener("click",function(){

  const btnDelete = Swal.mixin({
customClass: {
  confirmButton: 'btn btn-success',
  cancelButton: 'btn btn-danger'
},
buttonsStyling: false
})

btnDelete.fire({
title: 'Tem certeza que quer deletar este usuário?',
text: "Você não poderá reverter isso!",
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Sim, deletar!',
cancelButtonText: 'Não, cancelar!',
reverseButtons: true
}).then((result) => {
if (result.isConfirmed) {
  btnDelete.fire(
    'Deletedo!',
    'Seu arquivo foi deletado.',
    'Sucesso'
  )
} else if (
  /* Read more about handling dismissals below */
  result.dismiss === Swal.DismissReason.cancel
) {
  btnDelete.fire(
    'Cancelado',
    'Os dados estão seguros',
    'Erro'
  )
}
})


});