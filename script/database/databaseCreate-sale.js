var label = document.getElementById('productLabel');
var labelType = document.getElementById('typeLabel');
let select = document.createElement('select');
let labelQuantity = document.getElementById('labelQuantity');
let labelPrice = document.getElementById('labelPrice');
let labelTotal = document.getElementById('labelTotal');
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
        quantity.setAttribute('id', 'quantity' + idTypeSelect);
        quantity.setAttribute('type', 'text');
        priceUnity.setAttribute('id', 'price' + idTypeSelect);
        priceUnity.setAttribute('type', 'text');
        total.setAttribute('id', 'pricetotal' + idTypeSelect);
        total.setAttribute('type', 'text');
        labelQuantity.appendChild(quantity);
        labelPrice.appendChild(priceUnity);
        labelTotal.appendChild(total);

        let selectTypes = document.createElement('select');
        selectTypes.setAttribute('id', 'p' + idTypeSelect);
        labelType.appendChild(selectTypes);
    }
    
    valueUnit(product, type, id){
        let quantity = 'price' + id; 
        let quantityReal = 'quantity' + id;
        let labelvalue = 'p' + id;
        let totalGeneral = 'pricetotal' + id;
        const firebaseref = firebase.database().ref("production");
     
        firebaseref.once('value', function(all){
          all.forEach((item)=>{
                if(item.val().product == product && item.val().type == document.getElementById(labelvalue).value){
                    console.log(item.val());
                    console.log(item.val().value);
                    document.getElementById(quantityReal).addEventListener("change", function(){
                       if(item.val().value){
                           
                           document.getElementById(totalGeneral).value = parseFloat(document.getElementById(quantityReal).value * item.val().value).toFixed(2);
                       }
                    });
                    if(item.val().value){
                        document.getElementById(quantity).value = item.val().value;
                    }
                }
          })
      })
      // document.getElementById(quantity).value;
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

            arrayTypesValid.forEach((item)=>{
                    var dados = "<option " + "id="+item +" >" + item + "</option>";
                    selecttype.innerHTML += dados;
            })
        
          })
        this.valueUnit(document.getElementById(id).value,document.getElementById(labelvalue).value, id);
    }
}