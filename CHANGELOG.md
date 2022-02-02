# Change Log

## Version 1.4.4 2nd February 2022

Fixed Webpack configuration issue in the update to Webpack 4.0.0 (thanks @CodePsy-2001)

### Updates

-   Updated dependencies
-   Updated to npm lock file version 2

## Version 1.4.3 1th April 2021

Phaser Updated to 3.54.0

### Updates

-   Updated dependencies

## Version 1.4.2 13th February 2021

Added Instructions Scene

### New Features

-   An instruction scene is displayed after the game loads. This needs to be clicked past so that the game has audio focus.
-   The end scene wraps around to the main game rather than displaying the instructions again

### Updates

-   Updated dependencies

## Version 1.4.1 25th January 2021

Added Gamepad Support

### New Features

-   Gamepads are now supported in the Control Manager. Tested with an XBOX360 controller and a flight stick
-   Split the Control Manager into the different input types to make it easier to modify
-   The build now creates the game.zip in the itch directory ready for uploading straight to [itch.io](https://itch.io/docs/creators/html5)

### Updates

-   Updated to Phaser 3.52.0
-   Updated dependencies
-   Made the text screens more robust to multiple play throughs
-   Updated README with better instructions

## Version 1.4.0 10th January 2021

Split the end screen into game end, credits and licenses screens

### New Features

-   Three new display text options, typewriter text, fade in text and plain text
-   Animation Manager to handle the Sprite animation setup in one place

### Updates

-   Updated to Phaser 3.51.0
-   Updated dependencies
-   Fixed Typing issues

## Version 1.3.1 22th December 2020

Updated to Webpack 5

### New Features

-   npm run build now outputs a game.zip for uploading to itch.io

### Updates

-   Updated to Webpack 5
-   Webpack configuration is now typed with Typescript
-   Replaced Snyk with Whitesource Bolt for security validation
-   Using Whitesource Renovate for dependency updates. All dependencies are up to date

## Version 1.3.0 28th October 2020

Added support for resizing the screen size to fit different devices and mobile touch controls.

### New Features

-   Scenes now listen to resize events from Phaser
-   Text has now been wrapped in a ScalableText object which handles the scaling. It matches the size and layout on the original screen size.
-   A new Class ControlManager now handles all the input from the player and sends events of the actions taking place. This allows the game objects to deal with abstract actions such as "Move Left" which can be mapped onto key presses and touches in the Control Manager.

### Updates

-   The background art now uses Tiles so they repeat.
-   Phaser updated to 3.24
-   Minor dependency updates

### Bug Fixes

-   The Score UI position has been moved to a better place
-   Various small fixes recommended by SonarQube

## Version 1.2.0 26th June 2020

Refactored to make the code more modular and easier to adapt to a new game.

### New Features

-   Rearranged the code into scene folders for a easier to modify layout
-   Moved objects out of the main scene into managers. This makes it easier to modify components without affecting the rest of the game and makes better use of TypeScript's checking.
-   Changed to event emitting to decouple components. Examples are collisions and coin collecting.
-   Shifted the UI to its own scene so it is unaffected by gameplay

### Updates

-   The coin animation now generates the frame names
-   Minor dependency updates

### Bug Fixes

-   Fixed issue where you could jump off coins. Now you can only jump off the hill.

## Version 1.1 13th May 2020

Added collecting items, credits screen and sound effects

### New Features

-   Coins sprites to collect as an example
-   Animation example using sprite sheet
-   Sound effect example on coin collision
-   Webfont loading in the preloader scene
-   Score display using Webfont when coins are collected
-   Game end when all the coins are collected
-   Credits screen example with fading in text
-   Credits scene to Main scene transition example

### Updates

-   Updated to Phaser 3.23.0
-   Updated logo image

### Bug Fixes

-   Fixed double import - Thanks @rphillips-nz
-   Patched webfont security issue with Snyk

## Version 1.0 11th April 2020

Initial version of the template with the goal of being all set up to start a game jam.

### New Features

-   Phaser 3.22.0
-   Hot reloading with Webpack and `npm run start`
-   Production build with Webpack and `npm run build`
-   Boot loader to setup the Preloader scene with a logo
-   Pre loader with examples of loading spritesheets, audio and json
-   Customisable loading bar for preloader
-   Main scene with playable game example
-   User input example controlling a character
-   Matter JS physics example with collisions
-   Custom Physics shapes using json
-   Using images from a spritesheet example
-   Example test using Jest
-   Linting with ESLint
-   Code formatting with Prettier
-   Husky validation on commit
-   Comments in TSDOC style
