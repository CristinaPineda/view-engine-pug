const express = require('express');

const app = express();

app.use(express.static(__dirname + '/styles'));

app.set('view engine', 'pug');

app.get('/', (req, res) => 
	res.render('index')
);

app.listen(3000, () => 
	console.log('Servidor iniciado na porta 3000')
);

