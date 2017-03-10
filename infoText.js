var margin = {top: 100, right: 100, bottom: 100, left: 100},
width = Math.min(800, window.innerWidth - 10) - margin.left - margin.right,
height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
var color = d3.scale.ordinal().range(["orange"]);

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

	var filename = window.location.href.split("?")[1];
	$.post( "getFileData.php", { filename: filename} ,function( data ) {
		console.log(data);
		data = $.parseJSON(data);

		$("#info").append("<div id='title'>"+filename+"</div>")
		$("#info").append("<div id='content'>"+data["txt"]+"</div>");

		graphs = data["graphs"];

		var graphData = [];
		var graphElem = [];
		$.each(graphs['SyntacticFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});
		});
		graphData.push(graphElem);
		RadarChart(".radarChartSyn", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(graphs['WordBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartWord", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(graphs['SentenceBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartSent", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(graphs['DictionaryBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartDict", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(graphs['DiscourseFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartDisc", graphData, radarChartOptions);

		var graphData = [];
		var graphElem = [];
		$.each(graphs['CharacterBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphData.push(graphElem);
		RadarChart(".radarChartChar", graphData, radarChartOptions);

	});
	
});

