import Phaser from 'phaser'

export default class CollectingSwordsScene extends Phaser.Scene
{
	constructor()
	{
		super('Collecting-Swords-scene')
	}
    init() {
        this.platform = undefined;
        this.player = undefined;
        this.hearts = undefined;
    }

	preload()
    {   
        this.load.spritesheet('Attack_1','images/Attack_1.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('Attack_2','images/Attack_2.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('Attack_3','images/Attack_3.png', {frameWidth: 32, frameHeight:48})
        this.load.image('background','images/Background_01.png')
        this.load.image('bomb-0007','images/bomb_0007_Layer-3.png')
        this.load.image('bomb-0008','images/bomb_000_8Layer-2.png')
        this.load.image('bomb-0009','images/bomb_0009_Layer-1.png')
        this.load.image('BTN BACK', 'images/BTN_BACK.png' )
        this.load.image('BTN PLAY', 'images/BTN_PLAY.png' )
        this.load.image('BTN Retry','images/BTN_Retry.png')
        this.load.image('pillar','images/Pillar_01.png')
        this.load.spritesheet('Dead','images/dead.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('Hurt','images/hurt.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('Jump','images/jump.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('Run','images/Run.png', {frameWidth: 128, frameHeight:128})
        this.load.spritesheet('idle','images/idle.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('shield','images/shield.png', {frameWidth: 32, frameHeight:48})
        this.load.spritesheet('dude','images/Walk.png', {frameWidth: 32, frameHeight:48})
        this.load.image('hearts', 'images/HP icon.png')

    }

    create()
    {
       this.add.image(400, 300, 'background');
       this.platform = this.physics.add.staticGroup();
       this.platform.create(600, 400, 'pillar');
       this.platform.create(50, 250, 'pillar');
       this.platform.create(750, 220, 'pillar')
       this.platform.create(400, 568, 'pillar').setScale(2.5).refreshBody();

       this.player = this.physics.add.sprite(100,300,'dude')
       // Create player
       this.player.setCollideWorldBounds(true);
       this.player.setBounce(0.3);
       this.physics.add.collider(this.player, this.platform);


       // Player animations
       this.anims.create({
           key: 'left',
           frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
           frameRate: 10,
           repeat: -1
       });


       this.anims.create({
           key: 'turn',
           frames: [{ key: 'dude', frame: 4 }],
           frameRate: 20
       });


       this.anims.create({
           key: 'right',
           frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
           frameRate: 10,
           repeat: -1
       });


       // Create hearts group
       this.hearts = this.physics.add.group({
           key: 'hearts',
           repeat: 10,
           setXY: { x: 50, y: 0, stepX: 70 }
       });


       this.physics.add.collider(this.hearts, this.platform);
       this.physics.add.collider(this.player, this.platform);
       this.createAnimation();
   }


   update() {
       // Implement game logic and updates here
   }


   createAnimation() {
       // Create additional animations if required
   }
}
