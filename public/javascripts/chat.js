$(function() {
    const socket = io.connect('http://localhost:8000')
    const message = $("#message")
    const send_message = $("#send_message")

    send_message.click(function () {
        console.log('sending message')
        console.log(message.val())
        socket.emit('new_message', {
            message: message.val(),
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