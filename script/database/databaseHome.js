
export default class databasehome{

  homePackage(){
    var self = this;

    const firebaseref = firebase.database().ref("sale");
    firebaseref.once('value', function(all){
      var venda = [];
      var geral = [];
      all.forEach(
        function(curecord){
          venda.push(curecord.val());
      
        }
      )
      venda.slice(0, 3).map((item, index) => {
        let valuePosition = 'td' + index;
        document.getElementById(valuePosition).innerText = 'A encomenda de n°'+ 'faltam' + ' até o prazo limite para a entrega.'
        console.log({item});
      })
    })
  }
}