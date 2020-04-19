const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    try {
      const users = getArrayOfUsers(50)
      console.log(uuidv4('email'))
      return queryInterface.bulkInsert('users', users, {})
    } catch (e) {
      console.log(e)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}

function getArrayOfUsers(userPool) {
  const users = []
  let password =  bcrypt.hashSync('password', bcrypt.genSaltSync(12))
  let date = new Date().getTime().toString()
  
  for (let i = 1; i <= userPool; i++ ) {
    let defaultDate = new Date()

    users.push({
      id: uuidv4(),
      email: date + i + '@user.com',
      passwordHash: password,
      createdAt: defaultDate,
      updatedAt: defaultDate,
      deletedAt: null
    })
  }
  return users
}
