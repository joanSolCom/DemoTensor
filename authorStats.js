var margin = {top: 100, right: 100, bottom: 100, left: 100},
width = Math.min(800, window.innerWidth - 10) - margin.left - margin.right,
height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
var color = d3.scale.ordinal().range(["red","#00A0B0"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0,
  levels: 5,
  roundStrokes: true,
  color: color
};


$( document ).ready(function() {
	var authorName = window.location.href.split("?")[1];

	$.post( "getAuthorStats.php", { authorName: authorName} ,function( data ) {
		$("#info").append("<h1><div id='title'>"+authorName +"'s Mean Feature Graphs</div></h1>")
		data = $.parseJSON(data);
		
		var graphData = [];
		var graphElem = [];
		$.each(data['SyntacticFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});
		});
		graphData.push(graphElem);
		RadarChart(".radarChartSyn", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(data['WordBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartWord", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(data['SentenceBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartSent", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(data['DictionaryBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartDict", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(data['DiscourseFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartDisc", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(data['CharacterBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartChar", graphData, radarChartOptions);

	});
	
});
