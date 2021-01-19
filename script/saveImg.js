function PrintDiv(div, fileName){
	div = div[0]
	html2canvas(div).then(function(canvas){
        var myImage = canvas.toDataURL('image/png');
		downloadURI(myImage, `${fileName}.png`) 
	});
}

function downloadURI(uri, name){
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
    link.click();
    $(function() {
        $('script').remove('[style]');
        $('a').remove('[download]');
    })
}

$(function() {
    $('div.box').dblclick(function() {
        let scroll = $(document).scrollTop();
        $(this).nextAll().css('display', 'none');
        $(this).prevAll().css('display', 'none');
        PrintDiv($('#' + $(this).attr('id')), $(`div#${$(this).attr('id')} h4.name`).text());
        $(this).nextAll().css('display', 'block');
        $(this).prevAll().css('display', 'block');
        $(document).scrollTop(scroll);
    });
});