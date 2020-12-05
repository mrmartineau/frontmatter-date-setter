<div align="center">
  <h1>Frontmatter Date Setter</h1>
  <p>
    <a
      href="https://github.com/MrMartineau/frontmatter-date-setter/blob/master/LICENSE"
    >
      <img
        src="https://img.shields.io/badge/license-MIT-blue.svg"
        alt="frontmatter-date-setter is released under the MIT license."
      />
    </a>
    <a href="https://www.npmjs.org/package/frontmatter-date-setter">
      <img
        src="https://img.shields.io/npm/v/frontmatter-date-setter.svg"
        alt="Current npm package version."
      />
    </a>
    <a
      href="https://npmcharts.com/compare/frontmatter-date-setter?minimal=true"
    >
      <img
        src="https://img.shields.io/npm/dm/frontmatter-date-setter.svg"
        alt="Downloads per month on npm."
      />
    </a>
    <a
      href="https://npmcharts.com/compare/frontmatter-date-setter?minimal=true"
    >
      <img
        src="https://img.shields.io/npm/dt/frontmatter-date-setter.svg"
        alt="Total downloads on npm."
      />
    </a>
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs welcome!"
    />
    <a href="https://twitter.com/intent/follow?screen_name=MrMartineau">
      <img
        src="https://img.shields.io/twitter/follow/MrMartineau.svg?label=Follow%20@MrMartineau"
        alt="Follow @MrMartineau"
      />
    </a>
  </p>
  <p>
    <a href="#example">Example</a> •
    <a href="#Installation">Installation</a> • <a href="#usage">Usage</a> •
    <a href="https://code-notes-example.netlify.com/">Demo</a>
  </p>
</div>

This package adds git file creation and modification dates to yaml frontmatter. Give it a directory and some file extensions and it will do the rest.

If a creation or modification date is already present, they will be updated if they don't match.

## Example

Input

```md
---
title: Frontmatter Date Setter
---
```

Output

```md
---
title: Frontmatter Date Setter
created: 2020-03-22T14:53:49.000Z
modified: 2020-03-22T14:53:49.000Z
---
```

## Installation

```sh
yarn add frontmatter-date-setter
# or
npm install frontmatter-date-setter
```

For CLI use you may want to install it globally

```sh
yarn global add frontmatter-date-setter
# or
npm install -g frontmatter-date-setter
```

## Usage

### Node

```js
const fds = require('frontmatter-date-setter')

fds('tests', ['md', 'mdx'])
```

### CLI

```
Usage
    $ frontmatterDateSetter <input>

  Options
    --directory, -d  The directory of the files to add dates to
    --fileExtension, -ext  The file extensions that you wish to add dates to

  Examples
    $ frontmatterDateSetter --directory="notes" --fileExtension=md  --fileExtension=mdx
```

#### CLI Example

```js
frontmatterDateSetter --directory="notes" --fileExtension=md  --fileExtension=mdx
```
