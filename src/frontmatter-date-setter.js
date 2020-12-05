const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const gitDates = require('git-date-extractor')

const writeDate = async (filename, dates) => {
  try {
    const contents = fs.readFileSync(filename, 'utf8')
    const data = matter(contents)
    const newContent = matter.stringify(
      data,
      {
        created: new Date(dates.created * 1000),
        modified: new Date(dates.modified * 1000),
      },
      {
        styles: {
          // '!!int': 'hexadecimal',
          // '!!int': 'hexadecimal',
          '!!str': 'canonical',
          '!!timestamp': 'canonical',
        },
      }
    )

    fs.writeFileSync(filename, newContent, 'utf8')
  } catch (err) {
    console.log(err.stack || String(err))
  }
}

const frontmatterDateSetter = async (directory, fileExtensions) => {
  try {
    const stamps = await gitDates.getStamps({
      projectRootPath: path.join(__dirname, directory),
    })
    Object.keys(stamps).forEach((item) => {
      writeDate(path.join(__dirname, directory, item), stamps[item])
    })
    console.log('🚀 ~ Dates updated')
  } catch (error) {
    console.log(error.stack || String(err))
  }
}

module.exports = frontmatterDateSetter
