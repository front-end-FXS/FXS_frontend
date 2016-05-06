$( document ).ready(function() {
	// sticky

    // disable when sidebar is active
    $('#showRightPush').on('click',function(){
        $(".pinned" ).toggle();
    })
    $(".pinned").pin({
        containerSelector: ".container", minWidth: 940, padding: {top: 120, bottom: 10}
    })

});