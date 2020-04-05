import amqp from 'amqplib'
import { ListingBooksService } from "#root/services/listing-books-service"

const connectAndListen = async function () {
    let connection = await amqp.connect('amqp://admin:password@events-service:5672')

    let channel = await connection.createChannel()
    await channel.prefetch(1)

    await consume({ connection, channel })
}

function consume ({ connection, channel }) {
    return new Promise((resolve, reject) => {
        channel.consume('book-jobs', async function (msg) {
            console.log(msg)

            let msgBody = msg.content.toString()
            let data = JSON.parse(msgBody)
            let requestData = data.requestData

            ListingBooksService.destroy(msg)
  
            await channel.ack(msg)
        })
  
        connection.on('close', (err) => {
            return reject(err)
        })
  
        // handle errors
        connection.on('error', (err) => {
            return reject(err)
        })
    })
}

module.exports = {
    connectAndListen
}
