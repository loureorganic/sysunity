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

        let active = false;
        
        const database = firebase.database();
        let newProductKey = database.ref().child('sale').push().key;
        let today2 = new Date();
        let date = today2.getFullYear()+'-'+(today2.getMonth()+1)+'-'+today2.getDate();
        let cadastrationDate1 = date;
        let cadastrationHour2 = today2.toLocaleTimeString();
        
        let generalTimeBatch = cadastrationDate1.toString()+ '-' + cadastrationHour2.toString();
        let batch = generalTimeBatch.replace(/:/g, '-').replace(/-/g, '')
        database.ref('sale/'+newProductKey+'/numberSale').set(batch);
        database.ref('sale/'+newProductKey+'/seller').set(document.getElementById('seller').value);
        database.ref('sale/'+newProductKey+'/date').set(document.getElementById('date').value);
        database.ref('sale/'+newProductKey+'/totalGeneral').set(document.getElementById('total-general').value);
        database.ref('sale/'+newProductKey+'/totalPaid').set(document.getElementById('total-paid').value);
        database.ref('sale/'+newProductKey+'/totalPending').set(document.getElementById('totalpendente').value);
        database.ref('sale/'+newProductKey+'/dateDelivery').set(document.getElementById('datedelivery').value);

        for (let i = 0; i < id + 1; i++){

            let productValue = '' + i;
            let typeValue = 'type' + i;
            let quantityValue = 'quantity' + i;
            let priceValue = 'price' + i;
            let priceTotalValue = 'pricetotal' + i;

            // const stofirebaseref = firebase.database().ref("storage");
            // stofirebaseref.once('value',(resultado)=>{
      
            //     resultado.forEach(element => {

            //         if(element.child("product").val() == document.getElementById(productValue).value && element.child("type").val() == document.getElementById(typeValue).value) {

            //             let oldTotal = element.child("total").val();
            //             let oldValue = element.child("totalValue").val();
            //             let newTotal = document.getElementById(quantityValue).value;
            //             let newValue = document.getElementById(priceValue).value;

            //             let calc = oldValue - newTotal * newValue;
            //             let calc2 = oldTotal - newTotal;

            //             database.ref('storage/'+element.key+'/total').set(calc2);
            //             database.ref('storage/'+element.key+'/totalValue').set(calc);

            //         }
            //     })
            // })

            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/' +productValue).set(document.getElementById(productValue).value);
            database.ref('sale/'+newProductKey+'/products/'+ 'product'+ i + '/'  +typeValue).set(document.getElementById(typeValue).value);
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

        let today = new Date();
        let authUser = localStorage.getItem("id");
        let cadastrationDate = today.toLocaleDateString();
        let cadastrationHour = today.toLocaleTimeString();
        let newClientKey = database.ref().child('sale').push().key;
        
        database.ref('historic/'+newClientKey+'/userAction').set(authUser);
        database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
        database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
        database.ref('historic/'+newClientKey+'/action').set("cadastrarSale");

        const modal = document.getElementById("modal-reg");

        if(modal){

          modal.classList.add('mostrar');

          modal.addEventListener("click", (e) => {

            if(e.target.id == "modal-reg" || e.target.className == 'fechar'){

                modal.classList.remove('mostrar');
                window.location.reload(active);

            }else if(e.target.id == "viacli") {

                

                
    
                const doc = new jsPDF("portrait","mm",[210,297])
                doc.setFont("helvetica")
                doc.setFontStyle("normal")
                doc.setFontSize(11)

                doc.text('Vendedor: ' + document.getElementById('seller').value, 10, 10)
                doc.text('Data: ' + document.getElementById('date').value, 10, 20)
                doc.text('Data de Entrega: ' + document.getElementById('datedelivery').value, 10, 30)

                doc.text('____________________________________________________________', 10, 40)

                var idgeneral = 50;
                
                for (let i = 0; i < id + 1; i++){
                    let productValue = '' + i;
                    let typeValue = 'type' + i;
                    let quantityValue = 'quantity' + i;
                    let priceValue = 'price' + i;
                    let priceTotalValue = 'pricetotal' + i;

                    doc.text("Produto: " + document.getElementById(productValue).value + " de " + document.getElementById(typeValue).value, 10, idgeneral)
                    idgeneral += 10;
                    doc.text("Quantidade: " + document.getElementById(quantityValue).value, 10, idgeneral)
                    idgeneral += 10;
                    doc.text("Preço unidade: " + document.getElementById(priceValue).value, 10, idgeneral)
                    idgeneral += 10;
                    doc.text("Valor Total: " + document.getElementById(priceTotalValue).value, 10, idgeneral)
                    idgeneral += 10;
                    doc.text("____________________________________________________________", 10, idgeneral)
                    idgeneral += 10;
                    doc.text("Total da Venda: " + document.getElementById("totalGeneralPayment").value, 10, idgeneral)
                    idgeneral += 10;
                    doc.text("Total Pendente: " + document.getElementById("totalpendente").value, 10, idgeneral)
                    idgeneral += 10;
                }
     
                doc.save("nota-nao-fiscal-venda");
                
            }
          })
        }

      }
      
      createSalePublic(idPayment){
        let active = false;
      
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

     const modal = document.getElementById("modal-reg");

     if(modal){

        modal.classList.add('mostrar');

        modal.addEventListener("click", (e) => {
          if(e.target.id == "modal-reg" || e.target.className == 'fechar'){
              modal.classList.remove('mostrar')
              window.location.reload(active);
          }
        })
      }

      }
    valueFinal(idPayment){

        let total = 0;
        let totalInputs = idPayment + 1;
        for (let i = 0; i < totalInputs; i++){
            let totalGeneral = 'total-value' + i;
            total = total + Number(document.getElementById(totalGeneral).value);  
        }
        document.getElementById('total-paid').value = total;
        document.getElementById('totalpendente').value = Number(document.getElementById('totalGeneralPayment').value - total);
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

    removePaymentWay(id){

        let paymentForm = 'payment_method' + id;
        let valueForm = 'total-value' + id;

        document.getElementById(paymentForm).remove();
        document.getElementById(valueForm).remove();
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
    
    optionProductsRemove(idRemove){
        let productValue = '' + idRemove;
        let typeValue = 'type' + idRemove;
        let quantityValue = 'quantity' + idRemove;
        let priceValue = 'price' + idRemove;
        let priceTotalValue = 'pricetotal' + idRemove;
        document.getElementById(productValue).remove();
        document.getElementById(typeValue).remove();
        document.getElementById(quantityValue).remove();
        document.getElementById(priceValue).remove();
        document.getElementById(priceTotalValue).remove();
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