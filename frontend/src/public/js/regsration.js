const bekentApi = 'http://192.168.43.139:4020'


form.onsubmit = async (event) => {
    event.preventDefault()
    const username = document.querySelector("#email").value
    const password = document.querySelector("#psw-repeat").value
    const brithday = document.querySelector("#brithday").value
    const gender = document.querySelector("#gender").value

    let user = {
        username,
        password,
        gender,
        brithday
    }

    let res = await fetch(`http://192.168.43.139:4021/users`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })

    let result = await res.json()

    console.log(result.data.userId);

    if (result.message == 'The user is added') {
        window.localStorage.setItem('todoUserId', result.data.userId)
        return window.location.replace('/')
    } 
    
    alert(result.message)

}