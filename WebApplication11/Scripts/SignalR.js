

(function () {
    $.connection.hub.start()
    .done(function () {

        console.log("it works");
        $.connection.myHub.server.announce("connected");
    })
    .fail(function () { alert("error!!!"); });
    $.connection.myHub.client.announce = function (message) { $("#welcomemessage").append(message); }})()