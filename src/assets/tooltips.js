function initControlPanel() {
    $(document).ready(function() {
        var hideTooltip = function (elem, shouldRecover) {
            if (!elem.hasClass('toggling') || shouldRecover) {
                var title = elem.attr("tmp_title");
                elem.attr("title",title);
            }

            $('#tooltip').css('opacity', '0');
            $('#tooltip').css('visibility', 'hidden');
        }

        $("a.btn-control").mouseenter(function (e) { //event fired when mouse cursor enters "a" element
            //var $tooltip_text = $(this).attr("title"); //get title attribute of "a" element

            var $tooltip_text = ($(this).hasClass('toggling')) ? 
                                    ($(this).attr('id').indexOf('Zooming') !== -1 ? zoomingText : brutoNetoText) : 
                                        $(this).attr("title");

            var $tooltip = $('#tooltip');

            if ($tooltip_text && $tooltip_text.length > 0) { //display tooltip only if it has more than zero characters
                $tooltip.text($tooltip_text);

                $(this).attr("tmp_title", $tooltip_text);
                $(this).attr("title","");

                $tooltip.css('opacity', '1');
                $tooltip.css('visibility', 'visible');
            }
        });

        $("a.btn-control").mouseleave(function() {
            hideTooltip($(this), true);
        });
        $("a.btn-control").click(function() {
            hideTooltip($(this), false);
        });
    });
}

var brutoNetoText;
var zoomingText;

function toggleBrutoNetoText(text) {
    brutoNetoText = text;
}

function toggleZoomingText(text) {
    zoomingText = text;
}