$( document ).ready(function() {

	$.post( "getComparison.php",function( data ) {
		
		data = $.parseJSON(data);
		paintGraph(data);
	});
	
});

var margin = {top: 100, right: 100, bottom: 200, left: 100},
				width = Math.min(800, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

var color = d3.scale.ordinal().range(["#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF", "#FFFFFF"]);

	
var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0,
  wrapWidth: 60,
  levels: 5,
  roundStrokes: true,
  color: color,
};

function paintGraph(data)
{	
	var graphMegaData = {};
	graphMegaData["SyntacticFeatures"] = [];
	graphMegaData["WordBasedFeatures"] = [];
	graphMegaData["SentenceBasedFeatures"] = [];
	graphMegaData["DictionaryBasedFeatures"] = [];
	graphMegaData["DiscourseFeatures"] = [];
	graphMegaData["CharacterBasedFeatures"] = [];
	i=0;
	$.each(data, function(author, featGroupObject)
	{
		console.log(i);
		console.log(author);
		console.log(color(i));

		var graphElem = [];
		$.each(featGroupObject['SyntacticFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});
		});
		graphMegaData["SyntacticFeatures"].push(graphElem);

		var graphElem = [];
		$.each(featGroupObject['WordBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphMegaData["WordBasedFeatures"].push(graphElem);

		var graphElem = [];
		$.each(featGroupObject['SentenceBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphMegaData["SentenceBasedFeatures"].push(graphElem);

		var graphElem = [];
		$.each(featGroupObject['DictionaryBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphMegaData["DictionaryBasedFeatures"].push(graphElem);

		var graphElem = [];
		$.each(featGroupObject['DiscourseFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphMegaData["DiscourseFeatures"].push(graphElem);

		var graphElem = [];
		$.each(featGroupObject['CharacterBasedFeatures'], function(k, v) {
			graphElem.push({axis:k,value:v});

		});
		graphMegaData["CharacterBasedFeatures"].push(graphElem);

		i++;
	});
	RadarChart(".radarChartWord", graphMegaData["WordBasedFeatures"], radarChartOptions);
	RadarChart(".radarChartSyn", graphMegaData["SyntacticFeatures"], radarChartOptions);
	RadarChart(".radarChartChar", graphMegaData["CharacterBasedFeatures"], radarChartOptions);
	RadarChart(".radarChartDisc", graphMegaData["DiscourseFeatures"], radarChartOptions);
	RadarChart(".radarChartDict", graphMegaData["DictionaryBasedFeatures"], radarChartOptions);
	RadarChart(".radarChartSent", graphMegaData["SentenceBasedFeatures"], radarChartOptions);

	/*

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
	RadarChart(".radarChartChar", graphData, radarChartOptions);*/
}