const getUsers = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const json = await response.json()

    const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(v=>({name:v.name,email:v.email}))

    return result

}

(async function() {
    try{
     console.log(await getUsers())

    }catch(err){
        console.log(err)
    }
})();
