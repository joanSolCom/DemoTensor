$( document ).ready(function() {

	$.post( "listFiles.php", function( data ) {
		data = $.parseJSON(data);
		$("#filenames").append("<h1 class='title'>Select a file to visualize its features</h1>");
		$.each(data, function(i, item) {
			if(!item.includes("Features"))
			{
				$("#filenames").append("<a href='infoText.html?"+item+"' class='fileName' id="+item+">"+ item + "</a><br/>");

			}
		});
	});
	


});