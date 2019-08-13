var data = [
  {
  x: [0.37, 0.75, 1.12, 1.49, 1.86, 2.24],
  y: [0.003, 0.066, 0.880, 0.966, 0.959, 0.952],
  name: '\u03BC: 10.0 nm',
  error_y: {
    type: 'data',
    array: [0.013, 0.108, 0.266, 0.009, 0.016, 0.012],
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
  },
  titlefont: std_font
};

Plotly.newPlot('plot3', data, layout);

function plot3a() {
  Plotly.animate('plot3', {
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
  Plotly.relayout('plot3', update) 
}

function plot3b() {
  Plotly.animate('plot3', {
    data: [
    {
      y: [0.0046, 0.0072, 0.0271, 0.0188, 0.1386, 0.1221],
      error_y: {
        type: 'data',
        array: [0.0107, 0.015, 0.038, 0.137, 0.111, 0.2156],
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
       title: 'Avg-Sigma-P2D'
  };
  Plotly.relayout('plot3', update) 
}

function plot3c() {
  Plotly.animate('plot3', {
    data: [
    {
      y: [0.0046, 0.0059, 0.0116, 0.0161, 0.0106, 0.0212],
      error_y: {
        type: 'data',
        array: [0.0080, 0.0161, 0.0254, 0.0676, 0.0506, 0.1763],
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
       title: 'Sigma-P2D'
  };
  Plotly.relayout('plot3', update) 
}
