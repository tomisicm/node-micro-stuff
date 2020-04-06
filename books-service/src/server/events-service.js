import ampq from 'amqplib'

let channel = null

const connect = async function () {
    try {
        const connection = await ampq.connect('amqp://admin:password@events-service:5672')
        const ch = await connection.createChannel()
        channel = ch
        await channel.assertExchange('book-jobs', 'direct', { durable: true })
        await channel.assertQueue('book-jobs', { durable: true })

        channel.on('close', () => {
            console.log('[AMQP] channel closed')
        })

        connection.on('error', (e) => {
            console.error('[AMQP] error', e)
            connection.close()
        })
    } catch (e) {
        console.error('[AMQP] error', e)
    }
}

async function sendToBookJobQueue (msg) {
    await channel.assertQueue('book-jobs')
    return await channel.sendToQueue('book-jobs',
            Buffer.from(JSON.stringify(msg)
        ), { persistent: true }
    ) 
}

module.exports = { connect, sendToBookJobQueue }
