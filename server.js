var http =  require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>Crate Node Server</h1>')
    res.end()
})

server.listen(8800)