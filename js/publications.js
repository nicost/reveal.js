var data = [
  {
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [32, 65, 119, 182, 291, 473, 725, 1100, 1570, 2080, 2670, 3520, 4360],
  name: 'Publications mentioning &mu;Manager',
  type: 'scatter'
  }
];
var std_font = {
        size: '32',                                 
        color: 'white'
};
var layout = {
  paper_bgcolor: 'rgba(255,255,255,0)',
  plot_bgcolor: 'rgba(255,255,255,0)',
               font: std_font,
  xaxis: {
     title: 'Year',
     titlefont: std_font,
     showgrid: false,
     dtick: 2,
     tickfont: {
        size: '20',
        color: 'white'
     }
  },
  yaxis: {
     title: '# of publications',
     titlefont: std_font,
     color: 'white',
     range: [0, 5000],
     tickangle: -90,
     tickfont: {
        size: '20',
        color: 'white'
     }
  }
};

Plotly.newPlot('publications', data, layout);
