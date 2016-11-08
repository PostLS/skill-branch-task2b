import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2b', (req, res) => {
	const fullName = req.query.fullname;
	const numbers = new RegExp('[0-9_\/]', 'g');
	if(fullName.match(numbers)) {
		return res.send("Invalid fullname");
	}
	var newFullName = fullName.replace(/ +/g, ' ');
	console.log(newFullName);
	var fullNameArr = newFullName.split(' ');
	while(fullNameArr[0] === '') {
		fullNameArr.shift();
	}
	fullNameArr = fullNameArr.map((item) => {
		var newItem = item[0].toUpperCase() + item.slice(1).toLowerCase();
		return newItem;
	});
	var result;
	if(fullNameArr.length === 3) {
		result = fullNameArr[2] + ' ' + fullNameArr[0].slice(0, 1) + '. ' + fullNameArr[1].slice(0, 1)  + '.';
	} else if(fullNameArr.length === 2) {
		result = fullNameArr[1] + ' ' + fullNameArr[0].slice(0, 1) + '.';
	} else if(fullNameArr.length === 1 && !fullNameArr[0]) {
		result = "Invalid fullname";
	} else if(fullNameArr.length === 1)  {
		result = fullNameArr[0];
	} else {
		result = "Invalid fullname";
	}
	res.send(result);
})

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
