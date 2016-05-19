var users = [
    {
        username: 'fran',
        password: 'foo'
    },
    {
        username: 'test',
        password: 'test'
    }
];


module.exports = {
    
    allUsers: function(username) {
        return users.map(function(user) {
            return user.username;
        });
    },
    
    findUser: function(username) {
        var user = users.find(function(usr) {
            return usr.username === username;
        });
        return user ? user.username : undefined;
    },
    
    addUser: function(username, password) {
        if(!this.findUser(username)) {
            users.push({ username: username, password: password });
        }
    },
    
    changePassword: function(username, newPassword) {
        var user = this.findUser(username);
        if(user) {
            user.password = newPassword;
        }
    },
    
    removeUser: function(username) {
        var user = this.findUser(username);
        users.splice(users.indexOf(user), 1);
    }
    
};