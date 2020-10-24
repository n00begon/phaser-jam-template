# Phaser 3 Jam Template

A [Phaser 3](https://phaser.io/) Jam Template with [TypeScript](https://www.typescriptlang.org/), [MatterJS](https://brm.io/matter-js/) and [Webpack](https://webpack.js.org/)

<div align="center">

!["Toasty"](assets/images/toasty.png)

</div>
<div align="center">

![GitHub licence](https://img.shields.io/github/license/n00begon/phaser-jam-template)
![GitHub issues](https://img.shields.io/github/issues/n00begon/phaser-jam-template)
![Travis Build](https://travis-ci.com/n00begon/phaser-jam-template.svg?branch=master)
![Snyk vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/n00begon/phaser-jam-template)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange.svg)

</div>

Try out the [live game](https://n00begon.com/games/toasty/) to see what you will start with.

## Getting Started

Install the dependencies

```bash
npm install
```

Run the live updating development server

```bash
npm run start
```

Create the production build

```bash
npm run build
```

Head over to [phaser.io/learn](https://phaser.io/learn) for tutorials and code examples

## Layout

`assets` contains the spritesheets, audio and physics json

`src` has the source code. The three scenes are a `bootloader` to load the initial assets, `preloader` which loads the main game assets and `main` which has the gameplay loop.

`web` contains the webpage layout

`webpack` contains the configuration for the builds

## Editor

To use Prettier and ESLint to auto fix in VSCode:

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## Credits

### Image

Toasty created for this project by [Jaclyn Kim](https://www.fiverr.com/jaclynkim)

### Music

Arpent from [freepd.com](https://freepd.com/electronic.php) by [Kevin MacLeod](https://incompetech.com/)

### Inspired by

[Phaser 3 Project Template](https://github.com/photonstorm/phaser3-project-template) and
[Phaser 3 TypeScript/Webpack Project Template](https://github.com/wtravO/phaser3-typescript-template)
