const fetch = require('node-fetch');
const fs = require("fs");
const url = 'https://jsonplaceholder.typicode.com/posts/100';

function jsonData() {
    
        return fetch(url)
         .then(res =>  {
        return res.json()

    })
    .then((output) =>{
        let result = output;
        let data = JSON.stringify(result);
        fs.writeFile("posts.json", data, function(err){
            if(err) throw err;
            console.log("JSON file is created ")
        });
    });

    

}
jsonData();