var data = [
  {
  x: [3.7, 7.5, 11.2, 14.9, 18.6, 22.4],
  y: [0.06, 0.387, 0.698, 1.204, 1.815, 2.662],
  name: '\u03BC: 10.0 nm',
  error_y: {
    type: 'data',
    array: [0.096, 0.152, 0.343, 0.360, 0.438, 0.503],
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
     title: '\u03C3<sub>d</sub> (nm)',
     titlefont: std_font,
     showgrid: false,
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
    y: 0.80,
    bgcolor: '#222',
    font: {
        size: '16',
        color: 'white'
     }
  },
  titlefont: std_font
};

Plotly.newPlot('plot4', data, layout);

function plot4a() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.06, 0.387, 0.698, 1.204, 1.815, 2.662],
      error_y: {
        type: 'data',
        array: [0.096, 0.152, 0.343, 0.360, 0.438, 0.503],
        color: '#AAA',
        visible: true
      }
    }
    ],
      layout:  [{
      }]
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    }
  });

  var update = {
     title: 'Vector (\u03BC = 10 nm, n=100, 10 frames)'
  };
  Plotly.relayout('plot4', update) 
}

function plot4b() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.008, 0.116, 0.089, 0.141, 0.034, 2.044],
      error_y: {
        type: 'data',
        array: [0.106, 0.179, 0.378, 0.434, 0.805, 4.02],
        color: '#AAA',
        visible: true
      }
    }
    ],
      layout:  [{
      }]
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    }
  });

  var update = {
     title: 'Vector-P2D (\u03BC = 10 nm, n=100, 10 frames)'
  };
  Plotly.relayout('plot4', update) 
}

function plot4c() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.009, 0.104, 0.11, 0.093, 0.048, 0.577],
      error_y: {
        type: 'data',
        array: [0.090, 0.185, 0.579, 0.814, 1.248, 1.752],
        color: '#AAA',
        visible: true
      }
    }
    ],
      layout:  [{
      }]
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    }
  });

  var update = {
       title: 'Sigma-P2D (\u03BC = 10 nm, n=1000)'
  };
  Plotly.relayout('plot4', update) 
}
