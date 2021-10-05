export default class databaseuser{

    objectinitial(){
        let authUser = localStorage.getItem("id");
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value').then(function (snapshot) {
            snapshot.forEach(element => {
                if(element.key === authUser)
                {
                document.getElementById('hello').innerHTML = "Olá " + element.val().firstname + ",";
                }
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