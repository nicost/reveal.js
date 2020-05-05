var data = [
  {
  x: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [920, 2131, 3895, 6087, 8953, 12531, 16833, 21607, 26507, 30997, 35974, 40482],
  name: 'Cumulative Registrations',
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
     title: '# of Registrations',
     titlefont: std_font,
     color: 'black',
     range: [0, 42000],
     tickfont: {
        size: '16',
        color: 'black'
     }
  }
};

Plotly.newPlot('registrations', data, layout);
