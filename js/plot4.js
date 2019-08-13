var data = [
  {
  x: [0.37, 0.75, 1.12, 1.49, 1.86, 2.24],
  y: [0.006, 0.0387, 0.0698, 0.1204, 0.1815, 0.2662],
  name: '\u03BC: 10.0 nm',
  error_y: {
    type: 'data',
    array: [0.0096, 0.0152, 0.0343, 0.0360, 0.0438, 0.0503],
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

Plotly.newPlot('plot4', data, layout);

function plot4a() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.006, 0.0387, 0.0698, 0.1204, 0.1815, 0.2662],
      error_y: {
        type: 'data',
        array: [0.0096, 0.0152, 0.0343, 0.0360, 0.0438, 0.0503],
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
     title: 'Vector (n=100, 10 frames)'
  };
  Plotly.relayout('plot4', update) 
}

function plot4b() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.0008, 0.0116, 0.0089, 0.0141, 0.0034, 0.2044],
      error_y: {
        type: 'data',
        array: [0.0106, 0.0179, 0.0378, 0.0434, 0.0805, 0.402],
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
     title: 'Vector-P2D (n=100, 10 frames)'
  };
  Plotly.relayout('plot4', update) 
}

function plot4c() {
  Plotly.animate('plot4', {
    data: [
    {
      y: [0.0009, 0.0104, 0.011, 0.0093, 0.0048, 0.0577],
      error_y: {
        type: 'data',
        array: [0.0090, 0.0185, 0.0579, 0.0814, 0.1248, 0.1752],
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
       title: 'Sigma-P2D (n=1000)'
  };
  Plotly.relayout('plot4', update) 
}
