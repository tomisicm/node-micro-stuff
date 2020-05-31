import { Sequelize } from 'sequelize-typescript'
import { Listing } from './../models/Listing'
import { ListingBooks } from './../models/ListingBooks'

import accessEnv from '#root/helpers/accessEnv'

const DB_URI = accessEnv('DB_URI')

const sequelize = new Sequelize(
	DB_URI,
	{
		dialectOptions: {
			charset: 'utf8',
			multipleStatements: true
		},
		models:[Listing, ListingBooks],
		logging: false
	}
)

export default sequelize
