// import fs from 'fs'
// import path from 'path'

// import sequelize from '../db/connection'

// const models: string[] = []

// old
// fs
// 	.readdirSync(__dirname)
// 	.filter(file => {
// 		return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.ts')
// 	})
// 	.forEach(file => {
// 		const model = sequelize['import'](path.join(__dirname, file))
// 		db[model.name] = model
// 	})

// Object.keys(db).forEach(modelName => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db)
// 	}
// })


// new
// fs
// 	.readdirSync(__dirname)
// 	.filter(file => {
// 		return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.ts')
// 	})
// 	.forEach(file => {
// 		// const model = sequelize.import(path.join(__dirname, file))
// 		const model = path.join(__dirname, file)
// 		models.push(model)
// 	})

// // console.log(models)
// sequelize.addModels(models)

export default models

