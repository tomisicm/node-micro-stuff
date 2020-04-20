import fs from 'fs'
import * as fastcsv from 'fast-csv';
import sequelize from '#root/db/connection'

const handleImportData = function (dataSize) {
  let rawDataStream = fs.createReadStream('src/helpers/book32-listing.csv')

  let csvData = []

  let csvStream = fastcsv
    .parse({ maxRows: dataSize })
    // .transform(data => ({

    // }))
    .on('data', (data) => {
      const book = {
        title: data[3],
        categoryId: (Number(data[5]) + 1).toString(),
        author: data[4],
        createdBy: 'me'
      }
      csvData.push(book)
    })
    .on('error', error => console.error(error))
    .on('end', function (rowCount) {
      console.log(csvData)
      console.log(`Parsed ${rowCount} rows`)

      // sequelize.models.Book.bulkCreate(csvData)
      process.exit
    })

  const process = rawDataStream.pipe(csvStream)
}

export default handleImportData
