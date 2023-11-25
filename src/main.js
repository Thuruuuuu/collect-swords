import Phaser from 'phaser'

import CollectingSwordsScene from './scenes/CollectingSwordsScenes'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [CollectingSwordsScene]
}

export default new Phaser.Game(config)
