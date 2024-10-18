// เริ่มเขียนโค้ดตรงนี้
async function getUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        let filterName = data.map(user => user.name).filter(name => name.length > 17)
        console.log(filterName)
        return filterName
    }catch(error){
        return error
    }
}


getUsers();




