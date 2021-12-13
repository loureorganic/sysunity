import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectinitial();
dados.objectuser();

const grafico1 = document.getElementById('grafico').getContext('2d');
const myChart = new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: ['produto1', 'produto2', 'produto3'],
        datasets: [{
            label: 'Produtos',
            data: [10, 20, 30],
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
        labels: ['produto1', 'produto2', 'produto3'],
        datasets: [{
            label: 'Produtos',
            data: [10, 80, 30],
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
        labels: ['produto1', 'produto2', 'produto3'],
        datasets: [{
            label: 'Produtos',
            data: [10, 20, 30],
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