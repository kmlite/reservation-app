const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const config = require('./config')
const FakeDb = require('./fake-db')

const path = require('path')

const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')

mongoose.connect(config.DB_URI).then(
	() => {
		if(process.env.NODE_ENV !== 'production') {
			const fakeDb = new FakeDb()
			// 必要なときだけ初期化
			// fakeDb.initDb()
		}
	}
)

const app = express()  

app.use(bodyParser.json())
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)

if(process.env.NODE_ENV === 'production') {
	const appPath = path.join( __dirname, '..', 'dist', 'reservation-app')
	app.use(express.static(appPath))
	app.get("*", function(req, res){
		res.sendFile(path.resolve(appPath, "index.html"))
	})
}

const PORT = process.env.PORT || '3001'
app.listen(PORT, function() {
    console.log('I am running!')
})

