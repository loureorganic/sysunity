var label = document.getElementById('productLabel');
var labelType = document.getElementById('typeLabel');
let select = document.createElement('select');
let labelQuantity = document.getElementById('labelQuantity');
let labelPrice = document.getElementById('labelPrice');
let labelTotal = document.getElementById('labelTotal');
let totalend = [];
let confirmButton = document.getElementById('btn_confirmar');
let labelPayment = document.getElementById('labelPaymentWay');
let labelTotalGeneral = document.getElementById('labelTotalGeneral');
export default class databasecreatesale{

    createSaleOrder(id, idPayment){
        
        const database = firebase.database();
        let newProductKey = database.ref().child('sale').push().key;
        database.ref('sale/'+newProductKey+'/seller').set(document.getElementById('seller').value);
        database.ref('sale/'+newProductKey+'/date').set(document.getElementById('date').value);
        database.ref('sale/'+newProductKey+'/totalGeneral').set(document.getElementById('total-general').value);
        database.ref('sale/'+newProductKey+'/totalPaid').set(document.getElementById('total-paid').value);
        for (let i = 0; i < id + 1; i++){
            let productValue = '' + i;
            let typeValue = 'type' + i;
            let quantityValue = 'quantity' + i;
            let priceValue = 'price' + i;
            let priceTotalValue = 'pricetotal' + i;
            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/' +productValue).set(document.getElementById(productValue).value);
            database.ref('sale/'+newProductKey+'/products/'+  'product'+ i + '/'  +typeValue).set(document.getElementById(typeValue).value);
            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/' +quantityValue).set(document.getElementById(quantityValue).value);
            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/' +priceValue).set(document.getElementById(priceValue).value);
            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/' +priceTotalValue).set(document.getElementById(priceTotalValue).value);
        }
        for (let i = 0; i < idPayment + 1; i++){
            let paymentForm = 'payment_method' + i;
            let valueForm = 'total-value' + i;
            database.ref('sale/'+newProductKey+'/paymentWays/'+  'paymentWay'+ i + '/' +paymentForm).set(document.getElementById(paymentForm).value);
            database.ref('sale/'+newProductKey+'/paymentWays/'+  'paymentWay'+ i + '/'  +valueForm).set(document.getElementById(valueForm).value);
        }

      }
      
      createSalePublic(idPayment){
      
      const database = firebase.database();
      let newProductKey = database.ref().child('saleBalance').push().key;
      database.ref('saleBalance/'+newProductKey+'/seller').set(document.getElementById('seller').value);
      database.ref('saleBalance/'+newProductKey+'/date').set(document.getElementById('date').value);
      database.ref('saleBalance/'+newProductKey+'/totalPaid').set(document.getElementById('total-paid').value);
      database.ref('saleBalance/'+newProductKey+'/totalGeneral').set(document.getElementById('total-general-order').value);
      for (let i = 0; i < idPayment + 1; i++){
        let paymentForm = 'payment_method' + i;
        let valueForm = 'total-value' + i;
        database.ref('saleBalance/'+newProductKey+'/paymentWays/'+  'paymentWay'+ i + '/' +paymentForm).set(document.getElementById(paymentForm).value);
        database.ref('saleBalance/'+newProductKey+'/paymentWays/'+  'paymentWay'+ i + '/'  +valueForm).set(document.getElementById(valueForm).value);
     }
      }
    valueFinal(idPayment){

        if(document.getElementById('total-value0').value == '') {

            document.getElementById('total-value0').style.borderColor = "red";
            document.getElementById('alerta_valortotal').style.display = 'flex';

        } else {

            document.getElementById('total-value0').style.borderColor = "blue";
            document.getElementById('alerta_valortotal').style.display = 'none';

        }
        if (document.getElementById('payment_method0').value == '' || document.getElementById('payment_method0').value == null){
            alert("222")
        }
        if(document.getElementById('total-value0').value !== '' && document.getElementById('payment_method0').value == '') {

            alert("333")

            let total = 0;
            let totalInputs = idPayment + 1;
            for (let i = 0; i < totalInputs; i++){
                let totalGeneral = 'total-value' + i;
                total = total + Number(document.getElementById(totalGeneral).value);  
            }
            document.getElementById('total-paid').value = total;

        }

    }
    paymentWay(id){
        let select = document.createElement('select');
        var dados = "<option id='PIX'>PIX</option>" + "<option id='Dinheiro'>Dinheiro</option>" + "<option id='credito'>Cartão de crédito</option>" +  "<option id='debito'>Cartão de Débito</option>"
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'total-value' + id)
        select.innerHTML += dados;
        select.setAttribute('id', 'payment_method' + id);
        labelPayment.appendChild(select);
        labelTotalGeneral.appendChild(input);
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
        selectTypes.setAttribute('id', 'type' + idTypeSelect);
        labelType.appendChild(selectTypes);
    }
    
    valueUnit(product, type, id, id2){
        let quantity = 'price' + id; 
        let quantityReal = 'quantity' + id;
        let labelvalue = 'type' + id;
        let totalGeneral = 'pricetotal' + id;   
        const firebaseref = firebase.database().ref("production");
     
        firebaseref.once('value', function(all){
          all.forEach((item)=>{
                if(item.val().product == product && item.val().type == document.getElementById(labelvalue).value){
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

    valueGeneral(id){

        if(document.getElementById('total-general-order').value == '') {

            document.getElementById('total-general-order').style.borderColor = "red";
            document.getElementById('alerta_totalgeral').style.display = 'flex';

        } else {

            document.getElementById('total-general-order').style.borderColor = "blue";
            document.getElementById('alerta_totalgeral').style.display = 'none';

        }
        if(document.getElementById('date').value == '') {

            document.getElementById('date').style.borderColor = "red";
            document.getElementById('alerta_data').style.display = 'flex';

        } else {

            document.getElementById('date').style.borderColor = "blue";
            document.getElementById('alerta_data').style.display = 'none';

        }
        if(document.getElementById('quantity0').value == '') {

            document.getElementById('quantity0').style.borderColor = "red";
            document.getElementById('quantity-0').style.display = 'flex';

        } else {

            document.getElementById('quantity0').style.borderColor = "blue";
            document.getElementById('quantity-0').style.display = 'none';

        }
        if(document.getElementById('total-general-order').value !== '' && document.getElementById('date').value !== '') {

            let total = 0;
            let totalInputs = id + 1;
            for (var i = 0; i < totalInputs; i++){
                let totalGeneral = 'pricetotal' + i;
            total = total +  Number(document.getElementById(totalGeneral).value);
            }
            document.getElementById('total-general').value = parseFloat(total).toFixed(2);
            document.getElementById('totalGeneralPayment').value = parseFloat(total).toFixed(2);
            document.getElementById('payment-tab').disabled = false;

            document.getElementById('total-general-order').style.borderColor = "blue";
            document.getElementById('alerta_totalgeral').style.display = 'none';

        }
    }

    typeSelect(option, id, id2){
        
        let labelvalue = 'type' + id;
       let selecttype = document.getElementById(labelvalue);

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
        this.valueUnit(document.getElementById(id).value,document.getElementById(labelvalue).value, id, id2);
    }
}