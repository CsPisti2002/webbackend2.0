const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const fileupload = require("express-fileupload");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //sajatbackend végpontok

  app.use(fileupload());
  app.post("/upload", (req, res) => {
    const newpath = "./kepek/";
    const file = req.files.file;
    const filename = file.name;
  
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed", code: 200 });
      }
        return res.status(200).send({ message: "File Uploaded", code: 200 });        

    });
  });



  app.post('/kommentfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database:'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    let dt=new Date();
    let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
    connection.query("INSERT INTO kerdes VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres felvitel!")

      res.send("Sikeres felvitel!")
    })
    
    connection.end()    

  })  





  app.get('/kerdes', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    connection.query('SELECT * from kerdes', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)

      res.send(rows)
    })
    
    connection.end()    

  })
  


  app.post('/kommentfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database:'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    let dt=new Date();
    let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
    connection.query("INSERT INTO kerdes VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres felvitel!")

      res.send("Sikeres felvitel!")
    })
    
    connection.end()    

  })  




  app.get('/termekek', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    connection.query('SELECT * from termekek', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)

      res.send(rows)
    })
    
    connection.end()    

  })



 

  app.post('/torol', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    /*var feltetel2='komment_nev LIKE "%'+req.body.bevitel1+'%"';
    var feltetel1='komment_szoveg LIKE "%'+req.body.bevitel1+'%"';*/
    connection.query('DELETE  FROM kerdes WHERE komment_id='+req.body.bevitel1, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
  
      res.send(rows)
    })
    
    
    connection.end()    
 

  })



  app.post('/adatfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    
    let dt=new Date();
    let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();

    connection.query("INSERT INTO idopont VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"','"+req.body.bevitel3+"')", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres feltoltés!")

      res.send("Sikeres feltoltés!")
    })
    
    connection.end()    

  })

/*
  app.post('/termekfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    
   

    connection.query("INSERT INTO termekek VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"','"+req.body.bevitel3+"',"+req.body.bevitel4+",'"+req.body.bevitel5+"')", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres feltoltés!")

      res.send("Sikeres feltoltés!")
    })
    
    connection.end()    

  })
  */

  app.post('/termekfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    
   

    connection.query("INSERT INTO termekek VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"','"+req.body.bevitel3+"',"+req.body.bevitel4+",'"+req.body.bevitel5+"')", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres feltoltés!")

      res.send("Sikeres feltoltés!")
    })
    
    connection.end()    

  })



  app.post('/termekdel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    /*var feltetel2='komment_nev LIKE "%'+req.body.bevitel1+'%"';
    var feltetel1='komment_szoveg LIKE "%'+req.body.bevitel1+'%"';*/
    connection.query('DELETE  FROM termekek WHERE termek_id='+req.body.bevitel1, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
  
      res.send(rows)
    })
    
    
    connection.end()    
 

  })





  app.get('/kosar', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
   
    connection.query('SELECT termek_id FROM termekek', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
  
      res.send(rows)
    })
    
    
    connection.end()    
 

  })



}