$(".contact").on('click', function (event) {
    $("#email-modal").modal("show");
    if (Array(event.currentTarget.classList)[0][0] == 'question') {
        $("#what").val("Вопрос")
    } else if (Array(event.currentTarget.classList)[0][0] == 'idea') {
        $("#what").val("Идея")
    } else if (Array(event.currentTarget.classList)[0][0] == 'exp') {
        $("#what").val("Есть опыт использования")
    }

})

$(".btn-secondary").on('click', function () {
    $("#email-modal").modal("hide");
    $("#prev-meet-modal").modal("hide");
    $("#how-reg-modal").modal("hide");
})

$(".submit").on("click", function () {
    fetch('send.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: $("form").serialize(),
    }).then((response) => response.json())
        .then((data) => {
            $("#email-modal").modal("hide");

            if (data.status === 'ok') {
                $(".info").addClass("visible");
                $(".info").html("Сообщение отправлено");
                $(".info").css({ "background-color": "#2cd6b6" });
                setTimeout(() => $(".info").removeClass("visible"), 3000);
            }
            if (data.status === 'error') {
                $(".info").addClass("visible");
                $(".info").html("Произошла ошибка. Сообщите техотделу");
                $(".info").css({ "background-color": "#d6842c" });
                setTimeout(() => $(".info").removeClass("visible"), 3000);
            }
        });
});


function prevmeet() {
    $("#prev-meet-modal").modal("show");
}

function showvideo() {
    $("#how-reg-modal").modal("show");
}