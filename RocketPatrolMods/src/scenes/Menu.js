class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        // Load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        // Displaying the menu
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // Show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY-textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, '1 Use ⟷ to move & F to fire', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + (textSpacer * 2), '1 extra second for each hit', menuConfig).setOrigin(0.5, 2.2);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + (textSpacer * 3), 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
        console.log(this);

        
        // Define keyboard keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // Change scenes
        // this.scene.start("playScene");
        

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // Easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        else if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // Hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 15
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}