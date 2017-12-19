var trace1 = {
  x: ['10nm', '20nm', '40nm'],
  y: [0.03, 0.05, 0.04],
  name: '\u03C3<sub>d</sub> 3.7 nm',
  error_y: {
    type: 'data',
    array: [0.13, 0.07, 0.09],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var trace2 = {
  x: ['10nm', '20nm', '40nm'],
  y: [0.66, 0.05, 0.01],
  name: '\u03C3<sub>d</sub> 7.5 nm',
  error_y: {
    type: 'data',
    array: [1.08, 0.24, 0.32],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var trace3 = {
  x: ['10nm', '20nm', '40nm'],
  y: [8.8, 0.38, 0.07],
  name: '\u03C3<sub>d</sub> 11 nm',
  error_y: {
    type: 'data',
    array: [2.66, 0.38, 0.35],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var trace4 = {
  x: ['10nm', '20nm', '40nm'],
  y: [9.66, 2.39, 0.10],
  name: '\u03C3<sub>d</sub> 15 nm',
  error_y: {
    type: 'data',
    array: [0.09, 2.13, 0.31],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var trace5 = {
  x: ['10nm', '20nm', '40nm'],
  y: [9.59, 15.34, 0.13],
  name: '\u03C3<sub>d</sub> 19 nm',
  error_y: {
    type: 'data',
    array: [0.16, 7.74, 0.64],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var trace6 = {
  x: ['10nm', '20nm', '40nm'],
  y: [9.52, 17.56, 0.15],
  name: '\u03C3<sub>d</sub> 22 nm',
  error_y: {
    type: 'data',
    array: [0.12, 2.55, 0.87],
    color: '#AAA',
    visible: true
  },
  type: 'bar'
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6];
var std_font = {
        size: '20',
        color: 'white'
};
var layout = {barmode: 'group',
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
               font: std_font,                                   
  xaxis: {
     title: 'Distance (nm)',
     titlefont: std_font,
     tickfont: {
        size: '16',
        color: 'white'
     }
  },
  yaxis: {
     title: '[Error] (nm)',
     titlefont: std_font,
     tickfont: {
        size: '16',
        color: 'white'
     }
  },
  legend: {
    traceorder: 'normal',
    x: 0.70,
    y: 0.90,
    bgcolor: '#222',
    font: {
        size: '16',
        color: 'white'
     }
  },
  title: 'Churchman-P<sub>2</sub>D',
  titlefont: std_font
};

Plotly.newPlot('plotChP2D', data, layout);
