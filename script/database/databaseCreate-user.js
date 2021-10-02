export default class databasecreateuser{

        createuser(){
            const database = firebase.database();
            let newClientKey = database.ref().child('user').push().key;
            database.ref('user/'+newClientKey+'/firstname').set('Elivania');
            database.ref('user/'+newClientKey+'/lastname').set('Jesus');
            database.ref('user/'+newClientKey+'/username').set('elivaniajesus');
            database.ref('user/'+newClientKey+'/password').set(123456);
        }
            

}