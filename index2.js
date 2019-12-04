const express = require('express');
const app = express();
const mysql = require ("mysql");

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'root',
	database: 'iststudents'
});



con.connect((err)=>{
	if(!err)
		console.log('connected');
	else
		console.log('failed');
});
       
	app.get('/',function(req,res){
		res.sendFile(__dirname+"/"+"index.html")
	});
	app.get('/reg_form',function(req,res){
		res.sendFile(__dirname+"/"+"Registration.html")
	});
	app.get('/login',function(req,res){
		res.sendFile(__dirname+"/"+"workspace.html")
	});

	app.get("/reg",function(req,res){
		// const response={
			firstname=req.query.fname;
			lname=req.query.Lname;
			email=req.query.email;
            county=req.query.county;
            course=req.query.course;
            username=req.query.Username;
            password=req.query.Password;
		
	// res.send(response);
	console.log("testing here");
	con.query(`INSERT INTO registration (firstname,lname,email,county,course,username,password)
		VALUES('${firstname}','${lname}','${email}','${county}','${course}','${username}','${password}')`,
		(err,rows,fields)=>{
			if (!err)
				console.log(rows);
			else
				console.log('failed');
		});
	res.redirect('/');
	});

	//view
	app.get("/view",function(req,res){
		
	con.query(`SELECT * from Registration`,
		(err,rows,fields)=>{
			if (!err){
				console.log(rows);
				res.send(rows);
			}
			
			else{
				console.log('failed');
			}
		});
});
	// delete
	app.get("/delete",function(req,res){
		
	con.query(`DELETE * from Registration`,
		(err,rows,fields)=>{
			if (!err){
				console.log(rows);
				res.send(rows);
			}
			
			else{
				console.log('failed');
			}
		});
});
	// update
	app.get("/UPDATE",function(req,res){
		
	con.query(`SELECT * from Registration`,
		(err,rows,fields)=>{
			if (!err){
				console.log(rows);
				res.send(rows);
			}
			
			else{
				console.log('failed');
			}
		});
		res.redirect('/');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

