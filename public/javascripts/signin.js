$(function() {

    const username = $("#username")
    const password = $("#password")

    const signInAction = $("#signIn")
    const createAccountAction = $("#createAccount")

    signInAction.click(function () {
        console.log('trying to sign in')

        axios.post('/signin', {
            username: username.val(),
            password:password.val()
        }).then(function (response) {
            console.log('Got response')
            window.location.assign(response.request.responseURL)
        })
    })
});