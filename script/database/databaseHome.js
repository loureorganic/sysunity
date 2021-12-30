
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
        let today2 = new Date();
        let date = today2.getFullYear()+'-'+(today2.getMonth()+1)+'-'+today2.getDate();
        console.log(Number(item.dateDelivery));
        console.log(Number(date))
        console.log(Number(item.dateDelivery) - Number(date));
        document.getElementById(valuePosition).innerText = 'A encomenda de n° '+ item.numberSale +' faltam' + 'dias até o prazo limite para a entrega.'
        console.log({item});
      })
    })
  }
}