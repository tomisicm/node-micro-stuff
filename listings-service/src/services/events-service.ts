import amqp, { Message, Connection, Channel } from 'amqplib'
import { ListingBooksService } from '#root/services/listing-books-service'

const connectAndListen = async function () {
	try {
		// TODO
		const connection: Connection = await amqp.connect('amqp://admin:password@events-service:5672')
	
		const channel: Channel = await connection.createChannel()
		await channel.prefetch(1)

		// console.log(connection.connection.channels)
		// await consume({ connection, channel })
	} catch (e) {
		console.log(e)
	}
}

// TODO
function consume ({ connection, channel }) {
	return new Promise((resolve, reject) => {
		channel.consume('book-jobs', async function (msg: Message) {
			const data = JSON.parse(msg.content.toString())
			const destroyedItems = await ListingBooksService.destroy(data)

			if (destroyedItems) {
				await channel.ack(msg)
			}
		})
  
		connection.on('close', (err: Error) => {
			return reject(err)
		})
  
		// handle errors
		connection.on('error', (err: Error) => {
			return reject(err)
		})
	})
}

module.exports = {
	connectAndListen
}
