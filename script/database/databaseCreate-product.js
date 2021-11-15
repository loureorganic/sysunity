export default class databasecreateproduct{

    createproduct(name, type, value){
        const database = firebase.database();
        let active = false;
        let newProductKey = database.ref().child('product').push().key;
        database.ref('product/'+name).set(name);
        database.ref('product/'+name+'/'+type).set(type);
        database.ref('product/'+name+'/'+type+'/value').set(value);

        window.location.reload(active);
    }
}