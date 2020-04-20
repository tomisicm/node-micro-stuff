const uuidv4 = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ratings = getArrayOfRatings(5, 10)
    return queryInterface.bulkInsert('ratings', ratings, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ratings')
  }
}

function getArrayOfRatings(size, userPool) {
  const ratings = []
  const users = getUsers(userPool)

  users.forEach(user => {
    // TODO: generate vector of zeros then replace certain indices
    let userRatings = Array
      .apply(null, { length: size })
      .map(() => {
        return {
          userId: user,
          bookId: Math.floor(Math.random() * 5001).toString(),
          value: generateRandomValue()
        }
      })

    ratings.push(...userRatings)
  })

  return ratings
}

function getUsers(size = 4000) {
  let users = []

  for (let i=0; i<size; i+=1) {
    users.push(uuidv4())
  }

  return users
}

function generateRandomValue() {
  return Math.random() < 0.7 ? 0 : Math.floor(Math.random() * 11)
}