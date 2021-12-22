import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

const grafico1 = document.getElementById('grafico').getContext('2d');
const ref = firebase.database().ref('production');
ref.once('value', (snapshot) =>{
    let lbl = [];
    let value = [];
    snapshot.forEach((data) =>{
        if(!lbl.includes(data.child('product').val())){
            lbl.push(data.child('product').val());
            value.push(data.child('totalquantity').val());
        }else{
           value[lbl.indexOf(data.child('product').val())] += data.child('totalquantity').val();  
        }
    });
    const myChart = new Chart(grafico1, {
        type: 'bar',
        data: {
            labels: lbl,
            datasets: [{
                label: 'Produtos',
                data: value,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const grafico2 = document.getElementById('grafico2').getContext('2d');
const myChart2 = new Chart(grafico2, {
    type: 'line',
    data: {
        labels: lbl,
        datasets: [{
            label: 'Produtos',
            data: value,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInOutBounce',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        }
    }
});

const grafico3 = document.getElementById('grafico3').getContext('2d');
const myChart3 = new Chart(grafico3, {
    type: 'doughnut',
    data: {
        labels: lbl,
        datasets: [{
            label: 'Produtos',
            data: value,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

})



document.getElementById("button_bar").addEventListener('click', function(){
    document.getElementById("grafico").style.display = "flex";
    document.getElementById("grafico2").style.display = "none";
    document.getElementById("grafico3").style.display = "none";
});


document.getElementById("button_line").addEventListener('click', function(){
    document.getElementById("grafico").style.display = "none";
    document.getElementById("grafico2").style.display = "flex";
    document.getElementById("grafico3").style.display = "none";
});

document.getElementById("button_doughnut").addEventListener('click', function(){
    document.getElementById("grafico").style.display = "none";
    document.getElementById("grafico2").style.display = "none";
    document.getElementById("grafico3").style.display = "flex";
});