var data = [
  {
  x: [0.37, 0.75, 1.12, 1.49, 1.86, 2.24],
  y: [0.068, 0.308, 0.651, 1.051, 1.436, 1.87],
  name: 'Error in Gaussian esitimate',
  error_y: {
    type: 'data',
    array: [0.011, 0.013, 0.026, 0.057, 0.039, 0.043],
    color: '#AAA',
    visible: true
  },
  type: 'scatter'
  }
];
var std_font = {
        size: '20',                                 
        color: 'white'
};
var layout = {
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
               font: std_font,
  xaxis: {
     title: '\u03C3<sub>d</sub> / \u03BC',
     titlefont: std_font,
     showgrid: false,
     tickfont: {
        size: '16',
        color: 'white'
     }
  },
  yaxis: {
     title: '[Error] (\u03BC)',
     titlefont: std_font,
     tickfont: {
        size: '16',
        color: 'white'                              
     }
  },
  legend: {
    traceorder: 'normal',
    x: 0.70,
    y: 0.80,
    bgcolor: '#222',
    font: {
        size: '16',
        color: 'white'
     }
  }
};

Plotly.newPlot('plot1', data, layout);
