document.addEventListener('DOMContentLoaded', function () {
   
    var basePowerChartOptions = {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['P1kWATT']
        },
        yAxis: {
            title: {
                text: 'Puterea faza (kW)'
            },
            min: 0,
            max: 4
        },
         plotOptions: {
        column: {
            
            dataLabels: {
                enabled: true, // Enable data labels
                format: '{point.y:.2f}', // Format to show the value
                style: {
                    color: 'black', // You can adjust the style as needed
                    fontWeight: 'bold'
                }
            }
        }
    },
        series: [{
            name: 'Power',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    };

 
    var powerChart1 = Highcharts.chart('container-Power', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Putere faza 1'
        },
        xAxis: {
            categories: ['P1kWATT']
        }
    }));

    var powerChart2 = Highcharts.chart('container2-Power2', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Putere faza 2'
        },
        xAxis: {
            categories: ['P2kWATT']
        }
    }));

    var powerChart3 = Highcharts.chart('container3-Power3', Highcharts.merge(basePowerChartOptions, {
        title: {
            text: 'Putere faza 3'
        },
        xAxis: {
            categories: ['P3kWATT']
        }
    }));

    var basePowerFactorChartOptions = {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['PF1']
        },
        yAxis: {
            title: {
                text: 'Factor de putere'
            },
            min: 0,
            max: 1
        },
        plotOptions: {
        column: {
            pointWidth: 47, // latimea coloanelor
            // Alternativ,  pointPadding
            // pointPadding: ,
                borderWidth: 0,
            dataLabels: {
                enabled: true, // Enable data labels
                format: '{point.y:.2f}', // Format to show the value
                style: {
                    color: 'black', // You can adjust the style as needed
                    fontWeight: 'bold'
                }
            }
        }
    },
        series: [{
            name: '',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    };

    var PFChart1 = Highcharts.chart('container-PF', Highcharts.merge(basePowerFactorChartOptions, {
        title: {
            text: 'Factor de putere faza 1'
        },
        xAxis: {
            categories: ['PF1']
        }
    }));

    var PFChart2 = Highcharts.chart('container-PF2', Highcharts.merge(basePowerFactorChartOptions, {
        title: {
            text: 'Factor de putere faza 2'
        },
        xAxis: {
            categories: ['PF2']
        }
    }));

    var PFChart3 = Highcharts.chart('container-PF3', Highcharts.merge(basePowerFactorChartOptions, {
        title: {
            text: 'Factor de putere faza 3'
        },
        xAxis: {
            categories: ['PF3']
        }
    }));
 
    var baseVoltageGaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 300,
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Tensiune',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:15px">{y}</span><br/><span style="font-size:12px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }],
        credits: {
            enabled: false
        }
    };

    
    var voltageGauge1 = Highcharts.chart('container-voltage', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Tensiune faza 1'
        }
    }));

    var voltageGauge2 = Highcharts.chart('container2-voltage2', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Tensiune faza 2'
        }
    }));

    var voltageGauge3 = Highcharts.chart('container3-voltage3', Highcharts.merge(baseVoltageGaugeOptions, {
        title: {
            text: 'Tensiune faza 3'
        }
    }));

 
    var baseCurrentGaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:15px">{y}</span><br/><span style="font-size:12px;opacity:0.4">A</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }],
        credits: {
            enabled: false
        }
    };

   
    var currentGauge1 = Highcharts.chart('container-current', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent faza 1'
        }
    }));

    var currentGauge2 = Highcharts.chart('container2-current2', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent faza 2'
        }
    }));

    var currentGauge3 = Highcharts.chart('container3-current3', Highcharts.merge(baseCurrentGaugeOptions, {
        title: {
            text: 'Curent faza 3'
        }
    }));


    var powerDistributionChart = Highcharts.chart('containerPWDIST', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii Active(kWATT)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true, 
                    format: '<b>{point.name}</b>: {point.y}', 
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Putere kW',
            data: []
        }],
        credits: {
            enabled: false
        }
    });

    
    var powerVarChart1 = Highcharts.chart('containerPVAR1', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii Reactive(kVAR)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true, 
                    format: '<b>{point.name}</b>: {point.y}', 
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Power (kVAR)',
            data: []
        }],
        colors: ['#ff9999', '#ffcc99', '#99ff99'],
        credits: {
            enabled: false
        }
    });

    // Chart unghi faze

   var phaseAngleChart = Highcharts.chart('containerungifaze', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Defazajul Tensiunilor'
    },
    pane: {
        startAngle: 90,
        endAngle: 450,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            //  pane aditional pt marcaje 360 grade 
            background: null,
            outerRadius: '105%',
            innerRadius: '103%',
            backgroundColor: '#DDD'
        }]
    },
    yAxis: {
        min: 0,
        max: 360,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Degrees'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // Green
        }, {
            from: 120,
            to: 240,
            color: '#DDDF0D' // Yellow
        }, {
            from: 240,
            to: 360,
            color: '#DF5353' // Red
        }]
    },
    series: [{
        name: 'Phase AB',
        data: [0],
        color: 'red',
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'Phase AC',
        data: [0],
        color: 'blue',
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'Phase BC',
        data: [0],
        color: 'green',
        tooltip: {
            valueSuffix: ' degrees'
        }
        }],
    credits: {
        enabled: false
    }
});


    var phaseAngleChartI = Highcharts.chart('containerungifazecurenti', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Defazajul Curentilor'
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{}, {}, {}, {}] //arrays goale ca  background-ul default sa nu mai fie
    },
    yAxis: {
        min: 0,
        max: 360,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Degrees'
        },
        plotBands: [] // fara plot bands colorate
    },
    series: [{
        name: 'I1-I2',
        data: [0],
        color: '#FF0000', // Red
        dial: {
            backgroundColor: '#FF0000',
            baseWidth: 5, // ac mai subtire(ajusteaza)
            topWidth: 1,
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'I1-I3',
        data: [0],
        color: '#00FF00', // Green
        dial: {
            backgroundColor: '#00FF00',
            baseWidth: 5, 
            topWidth: 1, 
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
    }, {
        name: 'I2-I3',
        data: [0],
        color: '#0000FF', // Blue
        dial: {
            backgroundColor: '#0000FF',
            baseWidth: 5, 
            topWidth: 1, //  ac - mai modern
            baseLength: '0%',
            radius: '100%'
        },
        tooltip: {
            valueSuffix: ' degrees'
        }
            }],
    credits: {
            enabled: false
        }
  });


 var temperatureChart = Highcharts.chart('container-temperature', {
        chart: {
            type: 'bar',
            inverted: true,
        },
        title: {
             text: '',
        style: {
            fontSize: '14px' 
        },
        align: 'center',
        verticalAlign: 'top', 
        y: 5 
        },
        xAxis: {
            categories: ['DSP']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Temperatura'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y} °C',
                    inside: true,
                    color: '#000000',
                    style: {
                        textOutline: 'none'
                    }
                },
                pointWidth: 22
            }
        },
        series: [{
            name: '',
            data: [{
                y: 0,
                color: '#00ff00'
            }], 
        }],
        credits: {
            enabled: false
        }
    });


     
    var realtimePlot = Highcharts.chart('realtime-plot', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, 
            marginRight: 10,
            events: {
                load: function () {
                    // Functie pt date updatate
                    var series = this.series;
                    setInterval(function () {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send('get_data'); // cere new data de la server
                        }
                    }, 5000); // freq cu Arduino data tx trimise
                }
            }
        },
        title: {
            text: 'Valori efective'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: true
        },
        series: [{
            name: 'V1rms',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
        },
        
        {
            name: 'V2rms',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'V3rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'I1rms ',
            data: (function () {
               
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'I2rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        {
            name: 'I3rms ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'Inull ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'P1kW ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        
            {
            name: 'P2kW ',
            data: (function () {
                // genereaza un sir cu date initial
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
        {
            name: 'P3kW ',
            data: (function () {
                // genereaza un sir cu date initial
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P1kVAR ',
            data: (function () {
                
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P2kVAR ',
            data: (function () {
                // genereaza un sir cu date initial
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random() * (240 - 215) + 215
                    });
                }
                return data;
            }())
            },
            {
            name: 'P3kVAR',
            data: (function () {

                var data = [],
                    time = (new Date()).getTime(),
                    i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random() * (0.9 - 0) + 0
                        });
                        }
                return data;
            }())
            }],
        credits: {
            enabled: false
        }
    });

    // chart pentru small gauges
    var smallGaugeOptions = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: '#FFFFFF',
            width: 350,
            height: 270
        },
        title: {
            text: 'jjj'
        },
        pane: {
            center: ['35%', '50%'],
            startAngle: -90,
            endAngle: 90,
            background: null
        },
        yAxis: {
            min: 0,
            max: 270,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: ''
            },
            plotBands: []
        },
        series: [{
            name: 'Angle',
            data: [0],
            tooltip: {
                valueSuffix: ' degrees'
            }
        }]
    };

    // V1-I1 Gauge
    var gaugeV1I1 = Highcharts.chart('container_angle_V1_I1', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'Defazaj U-I faza 1',
            
        }
    }));

    // V2-I2 Gauge
    var gaugeV2I2 = Highcharts.chart('container_angle_V2_I2', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'Defazaj U-I faza 2'
        }
    }));

    // V3-I3 Gauge
    var gaugeV3I3 = Highcharts.chart('container_angle_V3_I3', Highcharts.merge(smallGaugeOptions, {
        title: {
            text: 'Defazaj U-I faza 3'
        }
    }));

    

    const standardCurrentInput = document.getElementById('standardCurrent');
    const percentageDifferences = [];

    function updatePercentageDifference(standardCurrent, currentValue) {
        const percentageDifference = ((currentValue / standardCurrent) - 1) * 100;
        return percentageDifference.toFixed(2);
    }



    // Conexiunea WebSocket si data update. instanta websocket
    var ws = new WebSocket('ws://' + window.location.hostname + '/ws');
    // Ascultă evenimentul de mesaj, care conține datele primite de la uart(backend)
    ws.onmessage = function (event) {
        var data = JSON.parse(event.data);
        
        document.getElementById('ID').textContent = data.ID;
        document.getElementById('CTR').textContent = data.CTR;
        document.getElementById('fHz').textContent = data.fHz + ' Hz';
        document.getElementById('InullA').textContent = data.InullA;
        document.getElementById('Isum').textContent = data.Isum;
        //document.getElementById('temperature').textContent = data.TbC;


        const standardCurrent = parseFloat(standardCurrentInput.value);

        const currentValue1 = data.V1rmsV;
        const percentage1 = updatePercentageDifference(standardCurrent, currentValue1);
        document.getElementById('percentage1').textContent = percentage1;
        percentageDifferences[0] = parseFloat(percentage1);

        const currentValue2 = data.V2rmsV;
        const percentage2 = updatePercentageDifference(standardCurrent, currentValue2);
        document.getElementById('percentage2').textContent = percentage2;
        percentageDifferences[1] = parseFloat(percentage2);

        const currentValue3 = data.V3rmsV;
        const percentage3 = updatePercentageDifference(standardCurrent, currentValue3);
        document.getElementById('percentage3').textContent = percentage3;
        percentageDifferences[2] = parseFloat(percentage3);

        const maxPercentage = Math.max(...percentageDifferences);
        document.getElementById('maxPercentage').value = maxPercentage.toFixed(2);

        
        //  Tensiune Gauges Update
        voltageGauge1.series[0].points[0].update(parseFloat(data.V1rmsV));
        voltageGauge2.series[0].points[0].update(parseFloat(data.V2rmsV));
        voltageGauge3.series[0].points[0].update(parseFloat(data.V3rmsV));

        //  Curent Gauges Update
        currentGauge1.series[0].points[0].update(parseFloat(data.I1rmsA));
        currentGauge2.series[0].points[0].update(parseFloat(data.I2rmsA));
        currentGauge3.series[0].points[0].update(parseFloat(data.I3rmsA));

        //  Powerr Charts Update // puterea watt
        powerChart1.series[0].setData([parseFloat(data.P1WATT)]);
        powerChart2.series[0].setData([parseFloat(data.P2WATT)]);
        powerChart3.series[0].setData([parseFloat(data.P3WATT)]);

         //  Factor putere Chart 
        PFChart1.series[0].setData([parseFloat(data.PF1)]);
        PFChart2.series[0].setData([parseFloat(data.PF3)]);
        PFChart3.series[0].setData([parseFloat(data.PF3)]);


        // Update Chart puteree
        powerDistributionChart.series[0].setData([
            { name: 'P1', y: data.P1WATT },
            { name: 'P2', y: data.P2WATT },
            { name: 'P3', y: data.P3WATT }
        ]);
        powerVarChart1.series[0].setData([
            { name: 'P1', y: data.P1VAR },
            { name: 'P2', y: data.P2VAR },
            { name: 'P3', y: data.P3VAR }
        ]);




 // Update unghi faze chart
        phaseAngleChart.series[0].setData([data.uUab]);
        phaseAngleChart.series[1].setData([data.uUac]);
        phaseAngleChart.series[2].setData([data.uUbc]);

        

        //Update unghi curent Chart
        phaseAngleChartI.series[0].setData([data.uIab]);
        phaseAngleChartI.series[1].setData([data.uIac]);
        phaseAngleChartI.series[2].setData([data.uIbc]);

        // Update unghi gauges V-I
        gaugeV1I1.series[0].setData([parseFloat(data.uUIa)]);
        gaugeV2I2.series[0].setData([parseFloat(data.uUIb)]);
        gaugeV3I3.series[0].setData([parseFloat(data.uUIc)]);

        // Temperature Bar Chart  Update
        //temperatureChart.series[0].setData([parseFloat(data.TbC)]);
        //vechi, nu mai il folosesc

        // culoarea in functie de val temp
        var temperatureValue = parseFloat(data.TbC);
        var color;
        if (temperatureValue <= 30) {
            color = '#00ff00'; // Green
        } else if (temperatureValue <= 70) {
            color = '#ffff00'; // Yellow
        } else {
            color = '#ff0000'; // Red
        }

        // Update graf temp cu culoarea aferenta
        temperatureChart.series[0].setData([{
            y: temperatureValue,
            color: color
        }]);
        
        // Update real-time plot with voltage and current data
        var currentTime = new Date(); //  local time
        var x = currentTime.getTime(); // timp in milli  // nu prea funct 
        
       

        realtimePlot.series[0].addPoint([x, parseFloat(data.V1rmsV)], true, true);
        realtimePlot.series[1].addPoint([x, parseFloat(data.V2rmsV)], true, true);
        realtimePlot.series[2].addPoint([x, parseFloat(data.V3rmsV)], true, true);
        realtimePlot.series[3].addPoint([x, parseFloat(data.I1rmsA)], true, true);
        realtimePlot.series[4].addPoint([x, parseFloat(data.I2rmsA)], true, true);
        realtimePlot.series[5].addPoint([x, parseFloat(data.I3rmsA)], true, true);
        realtimePlot.series[6].addPoint([x, parseFloat(data.InullA)], true, true);
        realtimePlot.series[7].addPoint([x, parseFloat(data.P1WATT)], true, true);
        realtimePlot.series[8].addPoint([x, parseFloat(data.P2WATT)], true, true);
        realtimePlot.series[9].addPoint([x, parseFloat(data.P3WATT)], true, true);
        realtimePlot.series[10].addPoint([x, parseFloat(data.P1VAR)], true, true);
        realtimePlot.series[11].addPoint([x, parseFloat(data.P2VAR)], true, true);
        realtimePlot.series[12].addPoint([x, parseFloat(data.P3VAR)], true, true);



        // Update display data si timp
        document.getElementById('currentDateTime').textContent = currentTime.toLocaleString();
    };

    const initialCurrentValue = parseFloat(document.getElementById('I1rmsA').textContent);
    const initialStandardCurrent = parseFloat(standardCurrentInput.value);
    updatePercentageDifference(initialStandardCurrent, initialCurrentValue);

   
    //Call-ul initial ca sa afisez data si timpul imediat
    document.getElementById('currentDateTime').textContent = new Date().toLocaleString();
});

