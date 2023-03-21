# Memory Match

> Readme made by _ChatGPT_

Memory Match is a game where players are presented with a set of cards, each with a hidden image or symbol on one side. The objective of the game is to match pairs of cards by flipping them over two at a time, trying to remember which card had which image.

In the beginning, all cards are flipped over so that players can see all the images. Then, players flip over two cards at a time to try to find a matching pair. If the cards match, they are removed from the game board. If the cards do not match, they are flipped back over and players must try again. The game continues until all pairs have been matched and removed from the game board.

Memory Match is a fun and challenging game that can be customized in many different ways. The number of cards, the types of images or symbols, and the difficulty level can all be adjusted to make the game more or less challenging. Additionally, the game can be designed to have different themes or styles to suit different audiences. For example, a Memory Match game could have a sports theme with images of different sports equipment, or an animal theme with images of different animals.

## Problem Statement: Memory Match Game

Your task is to create a Memory Match game using React. The game should allow players to match pairs of cards by flipping them over, trying to remember where each image is located.

### Requirements:

- The game should have a set of cards, each with a hidden image or symbol on one side.
- The game board should be randomized at the start of each game so that the location of each image is different each time.
- Players should be able to flip over two cards at a time, trying to find a matching pair.
- If the cards match, they should be removed from the game board.
- If the cards do not match, they should be flipped back over and players should try again.
- The game should continue until all pairs have been matched and removed from the game board.
- The game should have a timer to keep track of how long it takes players to match all pairs.
- The game should have a score system that rewards players for matching pairs quickly and accurately.

#### Difficuilty level
    Easy level:

    Use a smaller number of cards, such as 12 or 16.
    Give players a longer time limit, such as 2-3 minutes.
    Use simple images or symbols that are easy to recognize.
    Medium level:

    Use a larger number of cards, such as 20-24.
    Give players a shorter time limit, such as 1-2 minutes.
    Use slightly more complex images or symbols that are a bit harder to recognize.
    Hard level:

    Use a large number of cards, such as 28-32.
    Give players a very short time limit, such as 30-60 seconds.
    Use more complex images or symbols that are difficult to recognize.

    You can implement these difficulty levels by creating different configurations for the game board and the timer based on the level selected by the player. For example, you can create an object that contains the number of cards, the time limit, and the images for each level. When the player selects a level, you can retrieve the appropriate configuration from the object and use it to initialize the game board and the timer.

    You can also provide feedback to the player about their performance based on the level selected. For example, you can display a message after each game that tells the player how long it took them to complete the game and how many pairs they matched correctly. You can also give them a score based on their performance and display it on the screen. This will provide an additional incentive for players to improve their performance and try different difficulty levels.
> Bonus Features:

- Allow players to choose the number of cards and the types of images or symbols used in the game.
- Allow players to customize the game's theme or style with different colors, fonts, or backgrounds.
