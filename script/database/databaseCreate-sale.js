var label = document.getElementById('productLabel');
var labelType = document.getElementById('typeLabel');
let select = document.createElement('select');
let labelQuantity = document.getElementById('labelQuantity');
let labelPrice = document.getElementById('labelPrice');
let labelTotal = document.getElementById('labelTotal');
let labelProductionRecommended = document.getElementById('labelProductionRecommended');
export default class databasecreatesale{

    // createsale(){
    //     document.getElementById("btn_cadastrar").addEventListener("click", function() {       
    //         const database = firebase.database();
    //         let active = false;
    //         let newProductKey = database.ref().child('sale').push().key;
    //         database.ref('sale/'+newProductKey+'/seller').set(seller);
    //         database.ref('sale/'+newProductKey+'/date').set(date);
    //         database.ref('sale/'+newProductKey+'/totalGeneral').set(totalgeneral);
    //         database.ref('sale/'+newProductKey+'/quantidade').set(quantidade);
    //         database.ref('sale/'+newProductKey+'/price').set(price);
    //         database.ref('sale/'+newProductKey+'/total').set(total);
    //         database.ref('sale/'+newProductKey+'/productSale').set(value1);
    //         database.ref('sale/'+newProductKey+'/typeSale').set(value2);

    //         database.ref('sale/'+newProductKey+'/paySale').set(value3);
    //         database.ref('sale/'+newProductKey+'/totalValue').set(totalvalue);
    //         database.ref('sale/'+newProductKey+'/totalPaid').set(totalpaid);
    //         database.ref('sale/'+newProductKey+'/discount').set(discount);
    
    //         window.location.reload(active);
    //       })
    // }

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

    optionProductsNew(idTypeSelect){
        const firebaseref = firebase.database().ref("production");

        firebaseref.once('value', function(all){
            let elementsFiltered = [];
            var array = [];
            let select = document.createElement('select');
           select.setAttribute('id', idTypeSelect);
           select.setAttribute('class', 'productItems');
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
        let quantity = document.createElement('input');
        let priceUnity = document.createElement('input');
        let total = document.createElement('input');      
        let productionRecommended = document.createElement('input');
        quantity.setAttribute('id', 'quantity');
        quantity.setAttribute('type', 'text');
        priceUnity.setAttribute('id', 'price');
        priceUnity.setAttribute('type', 'text');
        total.setAttribute('id', 'price');
        total.setAttribute('type', 'text');
        productionRecommended.setAttribute('id', 'price');
        productionRecommended.setAttribute('type', 'text');
        labelQuantity.appendChild(quantity);
        labelPrice.appendChild(priceUnity);
        labelTotal.appendChild(total);
        labelProductionRecommended.appendChild(productionRecommended);

        let selectTypes = document.createElement('select');
        selectTypes.setAttribute('id', 'p' + idTypeSelect);
        labelType.appendChild(selectTypes);
    }

    typeSelect(option, id){
        
        let labelvalue = 'p' + id;
       let  selecttype = document.getElementById(labelvalue);

        if(selecttype.hasChildNodes){
            selecttype.innerHTML = '';
        }
        const firebaseref = firebase.database().ref("production");
        firebaseref.once('value', function(all){
            let arrayTypesValid = [];
            let arrayTypes = [];
            
            all.forEach((item)=>{
                if(item.val().product === option){
                    arrayTypes.push(item.val().type);
                }
            })
            arrayTypesValid = arrayTypes.filter(function(item, pos) {
                return arrayTypes.indexOf(item) == pos;
            })
            
            arrayTypesValid.map((item)=>{
                console.log(item)
            var dados = "<option " + "id="+item +" >" + item + "</option>"
            console.log(dados);
            selecttype.innerHTML += dados;
        })

        
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
                document.getElementById('production-available').value = bestProduction.batch
            })
        })
    }
}