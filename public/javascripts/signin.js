$(function() {

    const username = $("#username")
    const password = $("#password")

    const signInAction = $("#signIn")
    const createAccountAction = $("#createAccount")

    signInAction.click(function () {
        console.log('trying to sign in')
        userCredentialAction('/signin')
    })

    createAccountAction.click(function () {
        console.log('trying to create an account')
        userCredentialAction('/createAccount')
    })

    function userCredentialAction(action) {
        axios.post(action, {
            username: username.val(),
            password: password.val()
        }).then(function (response) {
            console.log('Got response')
            window.location.assign(response.request.responseURL)
        })
    }
});