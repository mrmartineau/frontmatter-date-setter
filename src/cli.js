#!/usr/bin/env node
'use strict'
const meow = require('meow')
const frontmatterDateSetter = require('./frontmatter-date-setter')

const cli = meow(
  `
  Usage
    $ frontmatter-date-setter <input>
    $ fds <input>

  Options
    --directory, -d  The directory of the files to add dates to
    --fileExtension, -ext  The file extensions that you wish to add dates to
    --debug Turn on debugging messages

  Examples
    $ frontmatter-date-setter --directory="notes" --fileExtension=.md  --fileExtension=.mdx
    $ fds --directory="notes" --fileExtension=.md  --fileExtension=.mdx

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
        default: ['.md', '.mdx'],
      },
      debug: {
        type: 'boolean',
        default: false,
      },
    },
  }
)

frontmatterDateSetter(cli.flags)
