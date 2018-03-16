var data = [
  {
  x: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [32, 65, 119, 182, 291, 473, 725, 1100, 1570, 2080, 2670],
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
     range: [0, 4000],
     tickfont: {
        size: '16',
        color: 'black'
     }
  }
};

Plotly.newPlot('publications', data, layout);
