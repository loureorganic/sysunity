export default class databaseuser{

    objectinitial(){
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value').then(function (snapshot) {
            snapshot.forEach(element => {
                let user = element.val();
                document.getElementById('hello').innerHTML = "Olá " + user.firstname + ",";
             });
        });
    }
    objectuser(){
        let authUser = localStorage.getItem("id");
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value').then(function (snapshot) {
            snapshot.forEach(element => {
                if(element.key === authUser)
                {
                    document.getElementById('user').innerHTML =element.val().firstname + " " + element.val().lastname;
                }
             });
        });
    }

}