const uuidv4 = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ratings = getArrayOfRatings(5000)
    return queryInterface.bulkInsert('ratings', ratings, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ratings')
  }
}

function getArrayOfRatings(size, userPool) {
  let ratings = []
  let users = getUsers(userPool)

  users.forEach(user => {
    let userRatings = []

    // TODO: 
    // generate array of user reviews for a list of movies

    ratings.push({
      userId: user,
      bookId: Math.floor(Math.random() * Math.floor(5001)),
      value: Math.floor(Math.random() * Math.floor(11))
    })
  })

  for (let i=0; i<size; i+=1) {
    ratings.push({
      userId: uuidv4(),
      bookId: Math.floor(Math.random() * Math.floor(5001)),
      value: Math.floor(Math.random() * Math.floor(11))
    })
  }

  return ratings
}

function getUsers(size = 4000) {
  let users = []

  for (let i=0; i<size; i+=1) {
    users.push(uuidv4())
  }

  return users
}
