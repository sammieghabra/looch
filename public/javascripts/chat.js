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
    })

    socket.on('client_message', args => {
        console.log('got it')
    })
});