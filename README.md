# Overview :crossed_swords: :dragon:

Today we're creating characters for a game in TypeScript. These characters have both unique and shared __behaviors__. A behavior has its own __interface__, or arbitrary set of __properties__ and __methods__, that can be mixed together to create different types of character objects. We'll compose our character's overall interface via TypeScript interfaces.

## Existing Behaviors

The following are examples of existing behaviors, and the interface for those behaviors:

### Conversable

A character can be conversed with.

- `name` (string) - The Character's name
- `talk` (function) - When spoken to, the character will greet you with their `name`

### Attackable

A character can be attacked and counter-attack.

- `health` (number) - A number between 0 and 50 representing the Character's current health
- `attack` (function) - When attacked, the character can:
   - take damage, decreasing their `health`
   - counter-attack by returning a number representing damage points against the attacker

# The Challenge

Compose various behaviors together to create a character. The interface for these characters will be composed using TypeScript interfaces. These interfaces will guide us as we implement the functionality.

Here's the tricky part. Although Characters shares some base behavior, each Character type has a special behavior unique to that Character. We should ensure that this special behavior is _not_ part of the base `CharacterInterface`. To do this, we'll create a new interface that extends the base `CharacterInterface`.

1. Choose a character to build
1. Use the generic `Character` class as a reference, but _do not inherit from it!_ Instead of using inheritance, we'll compose the interfaces and behavior.
1. Create a new `interface` in `src/interfaces.ts` and `extend` the __interface__ from `CharacterInterface`.
1. Now, make sure your character's class `implements` your new interface.
1. Add a new interface that encapsulates the properties and methods for your character's special behavior.
1. Update your character's interface to also extend from the new interface you created above.

# Special Behaviors

## Wizard

### Castable

A wizard can `cast` a spell on you. Spells require `magic`, and every time a spell is cast, the wizard's `magic` is reduced. A protection spell costs 5 `magic` points. If the wizard has fewer than 5 `magic` points, the spell cannot be cast.

- `magic` (number) - A number (starting at 25) representing the Character's current magic
- `cast` (function) - A wizard will cast a protection spell for you if they have enough magic points and you ask them nicely. However, if you YELL in all caps when asking, they will instead launch a lightning bolt at you.

## Rogue

### Bribable

A rogue can be bribed, for the right price. Given a large enough number of coins, they will tell you secret information. However, a rogue still has integrity. If the price is too low, they will take offense. If they have already acquired enough coins, they can no longer be bought.

- `coins` (number) - A number representing number of coins the character currently has (starting at 50)
- `bribe` (function) - When bribed, if the number of coins given is lower than 10, they will take offense and refuse. If the number of coins given is 10 or higher, they will tell you a secret, unless they already have more than 100 coins. In that case, they will refuse and remain silent.

# Getting Started
This repo contains source code in the `src` repo to get you started, as well as [Jest] tests to validate your solution. To get started:

1. Clone this repo
1. `cd` into the directory and run `npm install`
1. Run the tests with `npm run test:watch`
1. Locate the characters in the `src` directory and choose a character to implement.
   - __Note:__ `src/character` contains a generic implementation for reference.
1. Locate the character's set of tests in `index.test.ts`
1. Pending tests are marked with `xit`. Unpend a test by changing `xit` to `it`, watch it fail, and write the code necessary to make the test pass.
1. Repeat the last step for the rest of the tests in the suite.



[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[extends]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
[super]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
[Jest]: https://jestjs.io/
[factory function]: https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
[object composition]: https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd89480381