/**
 * Created by westilian on 1/19/14.
 */

(function(){
    var t;
    function size(animate){
        if (animate == undefined){
            animate = false;
        }
        clearTimeout(t);
        t = setTimeout(function(){
            $("canvas").each(function(i,el){
                $(el).attr({
                    "width":$(el).parent().width(),
                    "height":$(el).parent().outerHeight()
                });
            });
            redraw(animate);
            var m = 0;
            $(".chartJS").height("");
            $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
            $(".chartJS").height(m);
        }, 30);
    }
    $(window).on('resize', function(){ size(false); });


    function redraw(animation){
        var options = {};
        if (!animation){
            options.animation = false;
        } else {
            options.animation = true;
        }


        var barChartData = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "#2a323f",
                    strokeColor : "#2a323f",
                    data : [65,59,90,150,56,55,40]
                },
                {
                    fillColor : "#6dc5a3",
                    strokeColor : "#6dc5a3",
                    data : [28,48,40,19,96,27,100]
                }
            ]

        }

        var myLine = new Chart(document.getElementById("bar-chart-js").getContext("2d")).Bar(barChartData);


        var Linedata = {
            labels : ["1","2","3","4","5","6","7",'8','9','10'],
            datasets : [
//              {
//                  fillColor : "#2a323f",
//                  strokeColor : "#2a323f",
//                  pointColor : "#2a323f",
//                  pointStrokeColor : "#fff",
//                  data : [100,159,190,281,156,155,140]
//              },
                {
                    fillColor : "rgba(0,0,0,0)",
                    strokeColor : "rgba(102,204,255,1)",
                    pointColor : "rgba(255,255,255,1)",
                    pointStrokeColor : "rgba(0,0,0,0.6)",
                    data : [100,80,20,100,100,80,90,80,90,100]
                },
                {
                    fillColor : "rgba(0,0,0,0)",
                    strokeColor : "rgba(204,253,99,1)",
                    pointColor : "rgba(255,255,255,1)",
                    pointStrokeColor : "rgba(0,0,0,0.6)",
                    data : [28,48,0,19,10,20,70,30,20,10]
                }

            ]
        }
        var myLineChart = new Chart(document.getElementById("line-chart-js").getContext("2d")).Line(Linedata);


        var pieData = [
            {
                value: 30,
                color:"#2a323f"
            },
            {
                value : 50,
                color : "#5f728f"
            },
            {
                value : 100,
                color : "#6dc5a3"
            }

        ];

        var myPie = new Chart(document.getElementById("pie-chart-js").getContext("2d")).Pie(pieData);



        var donutData = [
            {
                value: 30,
                color:"#2a323f"
            },
            {
                value : 50,
                color : "#5f728f"
            },
            {
                value : 100,
                color : "#6dc5a3"
            },
            {
                value : 40,
                color : "#95D7BB"
            },
            {
                value : 120,
                color : "#b8d3f5"
            }

        ]
        var myDonut = new Chart(document.getElementById("donut-chart-js").getContext("2d")).Doughnut(donutData);
    }




    size(true);

}());
