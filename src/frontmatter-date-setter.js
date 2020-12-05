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
          '!!timestamp': 'canonical',
        },
      }
    )

    fs.writeFileSync(filename, newContent, 'utf8')
  } catch (err) {
    console.log(err.stack || String(err))
  }
}

const frontmatterDateSetter = async (options) => {
  options.debug && console.log('⚡ ~ frontmatter-date-setter > start')
  try {
    const stamps = await gitDates.getStamps({
      projectRootPath: path.join(path.resolve(), options.directory),
    })
    Object.keys(stamps).forEach((item) => {
      if (options.fileExtension.includes(path.extname(item))) {
        options.debug &&
          console.log(`⚡ ~ frontmatter-date-setter > file: ${item}`)
        writeDate(
          path.join(path.resolve(), options.directory, item),
          stamps[item]
        )
      }
    })
    options.debug && console.log('⚡ ~ frontmatter-date-setter > finish')
  } catch (error) {
    console.log(error.stack || String(error))
  }
}

module.exports = frontmatterDateSetter
