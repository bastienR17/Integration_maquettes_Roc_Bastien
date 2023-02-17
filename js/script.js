var ctx = document.getElementById('graph').getContext('2d')
var graph = new Chart(ctx, {
    type: 'line',

    data: {
        labels: [
            '5Nov',
            '6Nov',
            '7Nov',
            '8Nov',
            '9Nov',
            '10Nov',
            '11Nov',
            '12Nov',
            '13Nov',
            '14Nov',
            '15Nov',
        ],
        datasets: [
            {
                label: 'ETH',
                data: [100, 400, 600, 400, 300, 100, 350, 200, 300, 700, 600],
                borderColor: 'rgba(25, 112, 214, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'BTC',
                data: [null, 600, 200, 250, 100, 450, 100, 400, 700, 600, 500],
                borderColor: 'rgba(89, 39, 149, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'LTC',
                data: [null, null, null, null, null, 100, 500, 400, 150, 400, 500],
                borderColor: 'rgba(77, 145, 165, 1)',
                backgroundColor: 'transparent',
            },
        ],
    },
    options: {
        legend: {
            display: false,
        }  ,
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        tooltips: {
            mode: 'index',
            intersect: false,
           },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'

                }
                }
            }
        })
