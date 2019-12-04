const express = require('express');

const app = express();

	app.get('/',function(req,res){
		res.sendFile(__dirname+"/"+"index.html")
	});
	app.get("/reg",function(req,res){
		const response={
			firstname:req.query.fname,
			email:req.query.email
		}
	res.send(response);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));