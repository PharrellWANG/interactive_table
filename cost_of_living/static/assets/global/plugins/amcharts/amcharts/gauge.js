(function(){var c=window.AmCharts;c.GaugeAxis=c.Class({construct:function(a){this.cname="GaugeAxis";this.radius="95%";this.createEvents("rollOverBand","rollOutBand","clickBand");this.labelsEnabled=!0;this.startAngle=-120;this.endAngle=120;this.startValue=0;this.endValue=200;this.gridCount=5;this.tickLength=10;this.minorTickLength=5;this.tickColor="#555555";this.labelFrequency=this.tickThickness=this.tickAlpha=1;this.inside=!0;this.labelOffset=10;this.showLastLabel=this.showFirstLabel=!0;this.axisThickness=