module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Arts & Photography'
      },
      {
        name: 'Biographies & Memoirs'
      },
      {
        name: 'Business & Money'
      },
      {
        name: 'Calendars'
      },
      {
        name: 'Comics & Graphic Novels'
      },
      {
        name: 'Computers & Technology'
      },
      {
        name: 'Cookbooks, Food & Wine'
      },
      {
        name: 'Crafts, Hobbies & Home'
      },
      {
        name: 'Christian Books & Bibles'
      },
      {
        name: 'Engineering & Transportation'
      },
      {
        name: 'Health, Fitness & Dieting'
      },
      {
        name: 'History'
      },
      {
        name: 'Humor & Entertainment'
      },
      {
        name: 'Law'
      },
      {
        name: 'Literature & Fiction'
      },
      {
        name: 'Medical Books'
      },
      {
        name: 'Mystery, Thriller & Suspense'
      },
      {
        name: 'Parenting & Relationships'
      },
      {
        name: 'Politics & Social Sciences'
      },
      {
        name: 'Reference'
      },
      {
        name: 'Religion & Spirituality'
      },
      {
        name: 'Romance'
      },
      {
        name: 'Science & Math'
      },
      {
        name: 'Science Fiction & Fantasy'
      },
      {
        name: 'Self-Help'
      },
      {
        name: 'Sports & Outdoors'
      },
      {
        name: 'Teen & Young Adult'
      },
      {
        name: 'Test Preparation'
      },
      {
        name: 'Travel'
      },
      {
        name: 'Education & Teaching'
      }
    ], {})
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories')
  }
}
  