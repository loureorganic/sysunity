export default class home{

    objectuser(){
        let suco = localStorage.getItem("id");
        const firebaseref = firebase.database().ref("Usuario");
        firebaseref.once('value').then(function(snapshot) {
            let a = snapshot.child(suco).val();
            document.getElementById('hello').innerHTML = "Olá " + a.firstname + ",";
            document.getElementById('user').innerHTML = a.firstname + " " + a.lastname;
        });
    }

}