var label = document.getElementById('productLabel')
export default class databasecreatesale{

    createsale(){
        document.getElementById("btn_cadastrar").addEventListener("click", function() {
            
            var seller = document.getElementById('seller').value;
            var date = document.getElementById('date').value;
            var totalgeneral = document.getElementById('total-general').value;
            var quantidade = document.getElementById('quantidade').value;
            var price = document.getElementById('price').value;
            var total = document.getElementById('total').value;
            var select1 = document.getElementById('selectProdutoVendas');
            var select2 = document.getElementById('selectTipoVendas');
            var value1 = select1.options[select1.selectedIndex].value;
            var value2 = select2.options[select2.selectedIndex].value;
            
            
            var select3 = document.getElementById('selectPagamentoVendas');
            var value3 = select3.options[select3.selectedIndex].value;
            var totalvalue = document.getElementById('total-value');
            var totalpaid = document.getElementById('total-paid');
            var discount = document.getElementById('discount');
            
            const database = firebase.database();
            let active = false;
            database.ref('sale/-MmzKkAAgksDrVcpWdtL').remove();
            let newProductKey = database.ref().child('sale').push().key;
            database.ref('sale/'+newProductKey+'/seller').set(seller);
            database.ref('sale/'+newProductKey+'/date').set(date);
            database.ref('sale/'+newProductKey+'/totalGeneral').set(totalgeneral);
            database.ref('sale/'+newProductKey+'/quantidade').set(quantidade);
            database.ref('sale/'+newProductKey+'/price').set(price);
            database.ref('sale/'+newProductKey+'/total').set(total);
            database.ref('sale/'+newProductKey+'/productSale').set(value1);
            database.ref('sale/'+newProductKey+'/typeSale').set(value2);

            database.ref('sale/'+newProductKey+'/paySale').set(value3);
            database.ref('sale/'+newProductKey+'/totalValue').set(totalvalue);
            database.ref('sale/'+newProductKey+'/totalPaid').set(totalpaid);
            database.ref('sale/'+newProductKey+'/discount').set(discount);
    
            window.location.reload(active);
          })
    }

    optionProducts(){
        const firebaseref = firebase.database().ref("production");

        firebaseref.once('value', function(all){
            let elementsFiltered = [];
            var array = [];
            let select = document.createElement('select');
            all.forEach((text) => {
                console.log(text.val().product);
                array.push(text.val().product);
            })
            console.log(array);
            elementsFiltered = array.filter(function(item, pos) {
                return array.indexOf(item) == pos;
            })
            console.log('filtered', elementsFiltered);
           elementsFiltered.map((item)=> {
           var dados = "<option " + "id="+item +" >" + item + "</option>"
           select.innerHTML += dados;
           label.appendChild(select);
})
        //   Object.keys(all.val()).map((keyname)=> {
        //   })
        })
    }
}