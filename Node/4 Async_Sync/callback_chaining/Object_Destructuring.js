//Object Destructuring

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

//console.log(user.name);

const {age,name} = user;
console.log(age + name);