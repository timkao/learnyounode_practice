var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
    
    var result = list.filter(function(element){
        return element.split('.')[1] === process.argv[3];
    });

    result.forEach(function(element){
        console.log(element);
    });
});

