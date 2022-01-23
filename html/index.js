$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://lyz-exhaust/exit', JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('http://lyz-exhaust/exit', JSON.stringify({}));
        return
    })
	$("#reset").click(function () {
        $.post('http://lyz-exhaust/reset', JSON.stringify({}));
        return
    })
    //when the user clicks on the submit button, it will run
    $(".submit").click(function () {
		var model = $(this).data('exh');
        $.post('http://lyz-exhaust/exhaustchange', JSON.stringify({
        type: model,
		}));
		return;
    })
})