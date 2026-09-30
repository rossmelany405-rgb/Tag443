var j = jQuery.noConflict();
j(document).ready(function()
{
	slide("#sliding-navigation", 55, 25, 150, .8);
});

function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	// creates the target paths
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";
	
	// initiates the timer used for the sliding animation
	var timer = 0;
	
	// creates the slide animation for all list elements 
	j(list_elements).each(function(i)
	{
		// margin left = - ([width of element] + [total vertical padding of element])
		j(this).css("margin-left","-180px");
		// updates timer
		timer = (timer*multiplier + time);
		j(this).animate({ marginLeft: "0" }, timer);
		j(this).animate({ marginLeft: "45px" }, timer);
		j(this).animate({ marginLeft: "0" }, timer);
	});

	// creates the hover-slide effect for all link elements 		
	j(link_elements).each(function(i)
	{
		j(this).hover(
		function()
		{
			j(this).animate({ paddingLeft: pad_out }, 150);
		},		
		function()
		{
			j(this).animate({ paddingLeft: pad_in }, 150);
		});
	});
}