var data = [
  {
  x: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [171, 276, 401, 585, 851, 1210, 1660, 2230, 2840, 3540, 4580],
  name: 'Publications mentioning &mu;Manager',
  type: 'scatter'
  }
];
var std_font = {
        size: '20',                                 
        color: 'black'
};
var layout = {
  paper_bgcolor: 'rgba(255,255,255,0)',
  plot_bgcolor: 'rgba(255,255,255,0)',
               font: std_font,
  xaxis: {
     title: 'Year',
     titlefont: std_font,
     showgrid: false,
     tickangle: -60,
     dtick: 2,
     tickfont: {
        size: '16',
        color: 'black'
     }
  },
  yaxis: {
     title: '# of publications',
     titlefont: std_font,
     color: 'black',
     range: [0, 5000],
     tickfont: {
        size: '16',
        color: 'black'
     }
  }
};

Plotly.newPlot('publications', data, layout);
