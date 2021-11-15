
export default class databasecreateproduction{

    createproduction(){
      
      document.getElementById("btn_cadastrar").addEventListener("click", function() {
        var select1 = document.getElementById('selectNomeProducao');
        var select2 = document.getElementById('selectTipoProducao');
        var select3 = document.getElementById('package01');
        var value1 = select1.options[select1.selectedIndex].value;
        var value2 = select2.options[select2.selectedIndex].value;
        var value3 = select3.options[select3.selectedIndex].value;
        var fabrication = document.getElementById('fabrication').value;
        var batch = document.getElementById('batch').value;
        var days = document.getElementById('days').value;
        var unity = document.getElementById('unity').value;
        var pay = document.getElementById('pay').value;

        
        const database = firebase.database();
        let active = false;
        database.ref('production/-MmzKkAAgksDrVcpWdtL').remove();
        let newProductKey = database.ref().child('production').push().key;
        database.ref('production/'+newProductKey+'/name').set(value1);
        database.ref('production/'+newProductKey+'/type').set(value2);
        database.ref('production/'+newProductKey+'/batch').set(batch);
        database.ref('production/'+newProductKey+'/fabrication').set(fabrication);
        database.ref('production/'+newProductKey+'/days').set(days);
        database.ref('production/'+newProductKey+'/pay').set(pay);
        database.ref('production/'+newProductKey+'/unity').set(unity);
        database.ref('production/'+newProductKey+'/package').set(value3);

        window.location.reload(active);
      })
    }
}