$(function () {
var chart = c3.generate({

    bindto: '#chart',

    data: {
    columns: [
    ['总客资', 0,30, 200, 100, 200, 150, 10,50,300,200,100,200],
    ['有效客资',0,50, 20, 10, 40, 15, 1,50,280,0,200,400]
    ],
    types: {
    '总客资': 'line',
    '有效客资': 'line'
    }
},

axis: {
    x: {
    type: 'categorized'
    }
}

});



});
$(function () {
var chart = c3.generate({
    bindto: '#combine-chart',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150]
        ],
        types: {
            data1: 'bar',
            data2: 'bar',
            data3: 'spline',
            data4: 'line',
            data5: 'bar'
        },
        groups: [
            ['data1','data2']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});

});
    $(function () {
    var chart = c3.generate({
        bindto: '#roated-chart',
        data: {
        columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
        ],
        types: {
        data1: 'bar'
        }
    },
    axis: {
        rotated: true,
        x: {
        type: 'categorized'
        }
    }
    });
    });