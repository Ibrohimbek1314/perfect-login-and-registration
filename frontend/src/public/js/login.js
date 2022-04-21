const bekentApi = 'http://192.168.43.139:4020'
let userId = window.localStorage.getItem('todoUserId')
userId ? window.location.replace('/') : null


form.onsubmit = async (event) => {
    event.preventDefault()
    const username = document.querySelector("username").value
    const password = document.querySelector("psw-repeat").value

    let data = await fetch('http://192.168.43.139:4021/users',)
    data = await data.json()
    if(data){
        k = 0 
        for(let i of data) {
        if(i.username == username) {
            if(i.password == password){
                window.localStorage.setItem('todoUserId', i.userId)
                window.location.replace('/')
            } else {
                k += 1
                return alert('Correct password!')
            }
        }
        if(k) {
            return alert('Username not found!')
        }
        }
    }
    

}