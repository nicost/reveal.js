var data = [
  {
  x: [3.7, 7.5, 11.2, 14.9, 18.6, 22.4],
  y: [0.03, 0.66, 8.80, 9.66, 9.59, 9.52],
  name: '\u03BC: 10.0 nm',
  error_y: {
    type: 'data',
    array: [0.13, 1.08, 2.66, 0.09, 0.16, 0.12],
    array: [0.11, 0.13, 0.26, 0.57, 0.39, 0.43],
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

Plotly.newPlot('plot3', data, layout);

function plot3a() {
  Plotly.animate('plot3', {
    data: [
    {
      y: [0.03, 0.66, 8.80, 9.66, 9.59, 9.52],
      error_y: {
        type: 'data',
        array: [0.13, 1.08, 2.66, 0.09, 0.16, 0.12],
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
     title: 'Churchman-P2D (\u03BC = 10 nm)'
  };
  Plotly.relayout('plot3', update) 
}

function plot3b() {
  Plotly.animate('plot3', {
    data: [
    {
      y: [0.046, 0.072, 0.271, 0.188, 1.386, 1.221],
      error_y: {
        type: 'data',
        array: [0.107, 0.15, 0.38, 1.37, 1.11, 2.156],
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
       title: 'Avg-Sigma-P2D (\u03BC = 10 nm)'
  };
  Plotly.relayout('plot3', update) 
}

function plot3c() {
  Plotly.animate('plot3', {
    data: [
    {
      y: [0.046, 0.059, 0.116, 0.161, 0.106, 0.212],
      error_y: {
        type: 'data',
        array: [0.080, 0.161, 0.254, 0.676, 0.506, 1.763],
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
       title: 'Sigma-P2D (\u03BC = 10 nm)'
  };
  Plotly.relayout('plot3', update) 
}
