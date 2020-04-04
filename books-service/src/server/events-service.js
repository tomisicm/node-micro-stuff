import ampq from 'amqplib'

let channel = null;

function connect () {
    return ampq.connect('amqp://admin:password@events-service:5672')
        .then(conn => conn.createChannel())
        .then(ch => {
            channel = ch 
            ch.assertQueue('book-jobs')
        })
}

async function sendToBookJobQueue (msg) {
    await channel.assertQueue('book-jobs')
    return await channel.sendToQueue('book-jobs',
            Buffer.from(JSON.stringify(msg)
        )
    )
}

module.exports = { connect, sendToBookJobQueue }