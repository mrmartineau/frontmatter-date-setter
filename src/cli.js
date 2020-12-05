#!/usr/bin/env node
'use strict'
const meow = require('meow')
const frontmatterDateSetter = require('./frontmatter-date-setter')

const cli = meow(
  `
  Usage
    $ frontmatterDateSetter <input>

  Options
    --directory, -d  The directory of the files to add dates to
    --fileExtension, -ext  The file extensions that you wish to add dates to

  Examples
    $ frontmatterDateSetter --directory="notes" --fileExtension=md  --fileExtension=mdx

`,
  {
    flags: {
      directory: {
        type: 'string',
        alias: 'd',
        default: '.',
      },
      fileExtension: {
        type: 'string',
        alias: 'ext',
        isMultiple: true,
        default: ['md', 'mdx'],
      },
    },
  }
)

const options = cli.flags

frontmatterDateSetter(options.flags.directory, options.fileExtensions)
