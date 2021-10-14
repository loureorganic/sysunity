export default class databasecreateproduct{

    createproduct(name, type, value){
        const database = firebase.database();
        let newProductKey = database.ref().child('product').push().key;
        database.ref('product/'+newProductKey+'/name').set(name);
        database.ref('product/'+newProductKey+'/type').set(type);
        database.ref('product/'+newProductKey+'/value').set(value);
    }
}