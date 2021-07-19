/* Explanation of points
Starting Tier: Track a high score and display it in the UI (5), Implement the 'FIRE' UI text from the original game (5)
Novice Tier: Display the time remaining (in seconds) on the screen (10)
Intermediate Tier: Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20), Implement mouse control for player movement and mouse click to fire (20)

*/


// Terminal command to start localhost web server: "python -m http.server"
console.log("JS File Loaded Successfully");
let config = {
    // Render type: OpenGL or Canvas; Choosing Canvas for our type of art
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
};
// Starting the Phaser game with the object config as a param
let game = new Phaser.Game(config);

// Reserve some keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, key4, key6, keyADD;