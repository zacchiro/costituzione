$(document).ready(function () {

    // hyperlink article headings to their id
    $('h5').wrap(function () {
	return '<a href="#' + $(this)[0].id + '"></a>';
    });

});
