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
        
    },
    
    changePassword: function(username, newPassword) {
        
    },
    
    removeUser: function(username) {
        
    }
    
};