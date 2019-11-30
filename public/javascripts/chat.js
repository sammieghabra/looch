$(function() {
    const socket = io.connect('http://192.168.1.2:8000')
    const message = $("#message")
    const send_message = $("#send_message")

    send_message.click(function () {
        console.log('sending message')
        console.log(message.val())
        socket.emit('new_message', {
            message: message.val(),
            cookie: document.cookie,
        })
        $("#message").val("")
    })

    socket.on('client_message', args => {
        const message = args.message
        const username = args.username
        const final = username + ': ' + message
        const oldhistory = $("#history").val()
        if (oldhistory) {
            $("#history").val(oldhistory + '\n' + final)
        } else {
            $("#history").val(final)
        }
    })
});