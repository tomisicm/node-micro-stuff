import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import sequelize from '../db/connection'

const db = {}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.ts')
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
