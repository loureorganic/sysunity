export default class databasecreateproduct{

    createproduct(){
        const database = firebase.database();
        let newProductKey = database.ref().child().push().key;
        database.ref('product/'+newProductKey+'/name').set('Coxinha');
        database.ref('product/'+newProductKey+'/type').set('Frango');
        database.ref('product/'+newProductKey+'/value').set(2.00);
    }
}