const users =[
    {
        id: 1,
        firstName: "milad",
        lastName:"bahtami",
        age: 28,
        gender : "male"
    },
    {
        id: 2,
        firstName: "asghar",
        lastName:"tazavi",
        age: 40,
        gender : "male"
    },
    {
        id: 2,
        firstName: "mahsa",
        lastName:"bahtami",
        age: 15,
        gender : "female"
    },
    {
        id: 3,
        firstName: "mahdy",
        lastName:"ahmad",
        age: 27,
        gender : "male"
    },
    {
        id: 4,
        firstName: "kardo",
        lastName:"karzan",
        age: 32,
        gender : "male"
    },
    {
        id: 5,
        firstName: "razhan",
        lastName:"pasha",
        age: 30,
        gender : "female"
    },
    {
        id: 6,
        firstName: "rezan",
        lastName:"pasha",
        age: 15,
        gender : "female"
    },
    {
        id: 7,
        firstName: "peshawa",
        lastName:"ahmad",
        age: 19,
        gender : "male"
    },
    {
        id: 8,
        firstName: "haval",
        lastName:"bahtami",
        age: 45,
        gender : "male"
    },
    {
        id: 9,
        firstName: "Hevar",
        lastName:"mahammad",
        age: 17,
        gender : "male"
    },
    {
        id: 10,
        firstName: "lerzan",
        lastName:"pasha",
        age: 34,
        gender : "female"
    },
    {
        id: 11,
        firstName: "soran",
        lastName:"xdr",
        age: 34,
        gender : "male"
    },
]

const userContainer = document.querySelector('.userContainer');
const filterInput = document.querySelector('input')
const filterBtn = document.querySelector('button')

//serch item 

filterBtn.onclick = function(){
    const inputValue = filterInput.value
    const filteredUsers =users.filter((user) => user.firstName.startsWith(inputValue))
    if(filteredUsers.length > 0){
        userContainer.innerHTML = generateUsersElement(filteredUsers)
    } else{
        userContainer.innerHTML = '<h2>user not found</h2>'
    }
}


//add userItem in userConteiner
window.onload = function(){ 
    const usersString = generateUsersElement(users)
    userContainer.innerHTML = usersString
}


function generateUsersElement(users){
     let str = ''
     users.forEach((user) => str += `
       <div class="userItem">
            <p><b>firstName :</b>${user.firstName}</p>
            <p><b>lasrName :</b>${user.lastName}</p>
            <p><b>age :</b>${user.age}</p>
            <p><b>gender :</b>${user.gender}</p>
        </div>
        `)

     return str
}
