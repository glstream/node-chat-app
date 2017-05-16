[{
    id: '/23h343d67f#42',
    name: 'Gray',
    room: 'Office Fans'
}]

//add user(id,name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user)
        return user;
    }
    removeUser (id) {
        // return users that was removed
        var user = this.users.filter((user) => user.id ===id)[0];
        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id ===id)[0]
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name)

        return namesArray;
    }
}


module.exports = {Users};
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} years old`
//     }
// }

// var me = new Person('Gray', 25);

// var desc = me.getUserDescription()
// console.log(me.getUserDescription());