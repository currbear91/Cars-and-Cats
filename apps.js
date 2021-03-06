var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
    
    console.log('client request URL: ', request.url);
    
    if(request.url === '/cars') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if (request.url === "/images/car.jpg") {
         fs.readFile('./images/car.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }

        else if (request.url === "/images/cat-car.jpg") {
         fs.readFile('./images/cat-car.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }

            else if (request.url === "/images/cat-cars2.jpg") {
         fs.readFile('./images/cat-cars2.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === "/stylesheets/style.css") {
         fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents); 
             response.end();
         });
    }


/***************************Cats***************************************/ 



    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

        else if (request.url === "/images/cat.jpg") {
         fs.readFile('./images/cat.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }

        else if (request.url === "/images/white-cat.jpg") {
         fs.readFile('./images/white-cat.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }

            else if (request.url === "/images/nick-cat.jpg") {
         fs.readFile('./images/cat-cars2.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }




/***************************New Cars ***************************************/

    else if (request.url === "/cars/new") {
         fs.readFile('views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

       else if (request.url === "/cars/add") {
         fs.readFile('views/index.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }


    
    else {
        response.end('File not found!!!');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");