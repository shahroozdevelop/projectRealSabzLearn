const showSwal = (text, icon, confirmButtonText, callBack) => {
    Swal.fire({
        text,
        icon,
        confirmButtonText
    }).then((result) => {
        callBack(result)
    })

}



const saveToLocalStorage = (key, value) => {

    return localStorage.setItem(key, JSON.stringify(value))
}
const getFromLocalStorage = (key) => {

    return JSON.stringify(localStorage.getItem(key))
}

const  getToken   = () =>  {
    const  userInfos  =    JSON.parse(localStorage.getItem("user"))
    return  userInfos ? userInfos.token :  null
}
export { showSwal  ,  saveToLocalStorage  ,  getFromLocalStorage  ,  getToken }