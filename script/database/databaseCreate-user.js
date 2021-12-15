export default class databasecreateuser{

        createuser(firstname, lastname, username, email, job, acesslevel){

            let today = new Date();
            const database = firebase.database();
            let authUser = localStorage.getItem("id");

            let cadastrationDate = today.toLocaleDateString();
            let cadastrationHour = today.toLocaleTimeString();

            let newClientKey = database.ref().child('user').push().key;
            database.ref('user/'+newClientKey+'/firstname').set(firstname);
            database.ref('user/'+newClientKey+'/lastname').set(lastname);
            database.ref('user/'+newClientKey+'/username').set(username);
            database.ref('user/'+newClientKey+'/email').set(email);
            database.ref('user/'+newClientKey+'/job').set(job);
            database.ref('user/'+newClientKey+'/acesslevel').set(acesslevel);
            
            database.ref('historic/'+newClientKey+'/userAction').set(authUser);
            database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
            database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
            database.ref('historic/'+newClientKey+'/action').set("cadastrarUser");
        }
            

}