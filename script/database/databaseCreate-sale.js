var label = document.getElementById('productLabel');
var labelType = document.getElementById('typeLabel');
let select = document.createElement('select');
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
           select.setAttribute('id', 'productItems');
            all.forEach((text) => {
                array.push(text.val().product);
            })
            elementsFiltered = array.filter(function(item, pos) {
                return array.indexOf(item) == pos;
            })
           elementsFiltered.map((item)=> {
           var dados = "<option " + "id="+item +" >" + item + "</option>"
           select.innerHTML += dados;
           label.appendChild(select);
            })
        })
    }

    typeSelect(data){
    
        if(select.hasChildNodes){
            select.innerHTML = '';
        }
        const firebaseref = firebase.database().ref("production");
        firebaseref.once('value', function(all){
            let arrayTypesValid = [];
            let arrayTypes = [];
          
        all.forEach((item)=>{
            if(item.val().product === data){
                arrayTypes.push(item.val().type);
            }
        })
        arrayTypesValid = arrayTypes.filter(function(item, pos) {
            return arrayTypes.indexOf(item) == pos;
        })
        select.setAttribute('id', 'productType');
        arrayTypesValid.map((item)=>{
            var dados = "<option " + "id="+item +" >" + item + "</option>"
            select.innerHTML += dados;
        })
        labelType.appendChild(select);
          })
      }

   

    bestProduction(product, type){
          let arrayProductions = [];
          let minorDate = "31:31:31";
          let minorHour = "31:31:31";
          let bestProduction;
        const firebaseref = firebase.database().ref("production");
        firebaseref.once('value', function(all){
            all.forEach((text) => {
               if(text.val().product === product && text.val().type === type){
                   console.log(text.val())
                   arrayProductions.push(text.val())
               }
            })
            arrayProductions.map((item)=>{
                if(item.cadastrationDate < minorDate){
                    minorDate = item.cadastrationDate;
                    minorHour = item.cadastrationHour;
                    bestProduction = item;
                
                }
                else if(item.cadastrationDate === minorDate){
                    if(item.cadastrationHour < minorHour){
                        minorHour = item.cadastrationHour;
                        bestProduction = item;
                    }
                }
                console.log(minorDate);
                console.log(minorHour);
                document.getElementById('production-available').value = bestProduction.batch
            })
        })
    }
}