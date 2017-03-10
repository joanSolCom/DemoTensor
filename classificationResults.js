$( document ).ready(function() {

	$("#showOut").click(function() {
		$("#wekaOut").toggle();
		$("#experimentDetails").hide();
	  	$("#wekaInfoGain").hide();
	});

	$("#showInfoGain").click(function() {
	  	$("#wekaInfoGain").toggle();
	  	$("#wekaOut").hide();
	  	$("#experimentDetails").hide();
	});

	$("#showExp").click(function() {
	  	$("#experimentDetails").toggle();
	  	$("#wekaOut").hide();
	  	$("#wekaInfoGain").hide();
	});
});

