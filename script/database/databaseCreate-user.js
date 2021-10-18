
export default class databasecreateuser{

        createuser(firstname, lastname, username, email, job, acesslevel){
            const database = firebase.database();
            let newClientKey = database.ref().child('user').push().key;
            database.ref('user/'+newClientKey+'/firstname').set(firstname);
            database.ref('user/'+newClientKey+'/lastname').set(lastname);
            database.ref('user/'+newClientKey+'/username').set(username);
            database.ref('user/'+newClientKey+'/email').set(email);
            database.ref('user/'+newClientKey+'/job').set(job);
            database.ref('user/'+newClientKey+'/acesslevel').set(acesslevel);
        }
            

}