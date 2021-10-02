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
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value').then(function (snapshot) {
            snapshot.forEach(element => {
                let user = element.val();
                document.getElementById('user').innerHTML = user.firstname + " " + user.lastname;
             });
        });
    }

}