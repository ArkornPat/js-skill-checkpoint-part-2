// เริ่มเขียนโค้ดตรงนี้
async function getUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        let filterName = data.map(user => user.name).filter(name => name.length > 17)
        return filterName
    }catch(error){
        return error
    }
}


( async () =>{
    let data = await getUsers();
    console.log(data)
})()




