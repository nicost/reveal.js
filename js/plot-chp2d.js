var trace1 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-0.2, -0.2, -0.2],
  name: '\u03C3<sub>d</sub> = 3.5 nm',
  error_y: {
    type: 'data',
    array: [0.1, 0.1, 0.1],
    visible: true
  },
  type: 'bar'
};
var trace2 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-0.8, -0.1, -0.1],
  name: '\u03C3<sub>d</sub> = 7 nm',
  error_y: {
    type: 'data',
    array: [0.8, 0.2, 0.1],
    visible: true
  },
  type: 'bar'
};
var trace3 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-9.0, -0.7, -0.1],
  name: '\u03C3<sub>d</sub> = 10.5 nm',
  error_y: {
    type: 'data',
    array: [3.0, 0.2, 0.1],
    visible: true
  },
  type: 'bar'
};
var trace4 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-9.9, -2.1, -0.05],
  name: '\u03C3<sub>d</sub> = 14 nm',
  error_y: {
    type: 'data',
    array: [0.1, 1.8, 0.1],
    visible: true
  },
  type: 'bar'
};
var trace5 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-9.8, -14.6, -0.05],
  name: '\u03C3<sub>d</sub> = 17.5 nm',
  error_y: {
    type: 'data',
    array: [0.1, 7.2, 0.8],
    visible: true
  },
  type: 'bar'
};
var trace6 = {
  x: ['10nm', '20nm', '40nm'],
  y: [-9.8, -14.6, -0.05],
  name: '\u03C3<sub>d</sub> = 21 nm',
  error_y: {
    type: 'data',
    array: [0.1, 7.2, 0.8],
    visible: true
  },
  type: 'bar'
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6];
var std_font = {
        size: '24',
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
        size: '20',
        color: 'white'
     }
  },
  yaxis: {
     title: 'Error (nm)',
     titlefont: std_font,
     tickfont: {
        size: '20',
        color: 'white'
     }
  },
  legend: {
     font: {
        size: '20',
        color: 'white'
     }
  }
};

Plotly.newPlot('plotChP2D', data, layout);
