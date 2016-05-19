(function() {
    
    
    $(document).ready(function() {
       
       $.get({
           url: 'http://127.0.0.1:8080/users'
       }).then(function(response) {
           console.log('Response');
           console.log(response); 
       }, function(err) {
           console.log('Error');
           console.log(err);
       });
        
    });
    
    
})();