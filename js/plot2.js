var data = [
  {
  x: [0.37, 0.75, 1.12, 1.49, 1.86, 2.24],
  y: [0.068, 0.308, 0.651, 1.051, 1.436, 1.87],
  name: '\u03BC: 10.0 nm',
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
     title: '\u03C3<sub>d</sub> (\u03BC)',
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
  },
  titlefont: std_font
};

Plotly.newPlot('plot2', data, layout);

function plotP2D() {
  Plotly.animate('plot2', {
    data: [
    {
      y: [0.003, 0.066, 0.880, 0.966, 0.959, 0.952],
      error_y: {
        type: 'data',
        array: [0.013, 0.108, 0.266, 0.009, 0.016, 0.012],
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
     title: 'Churchman-P2D'
  };
  Plotly.relayout('plot2', update) 
}

function plotAvg() {
  Plotly.animate('plot2', {
    data: [
    {
      y: [0.068, 0.308, 0.651, 1.051, 1.436, 1.87],
      error_y: {
        type: 'data',
        array: [0.011, 0.013, 0.026, 0.057, 0.039, 0.043],
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
       title: 'Average'
  };
  Plotly.relayout('plot2', update) 
}
