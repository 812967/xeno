let imageSources = {//Properties of imageSources match names of images
	//outer game images
	Asteroid1: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid1.png",
	},
	Asteroid2: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid2.png",
	},
	Asteroid3: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid3.png",
	},
	Asteroid4: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid4.png",
	},
	Asteroid5: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid5.png",
	},
	Asteroid6: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid6.png",
	},
	Asteroid7: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid7.png",
	},
	Asteroid8: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid8.png",
	},
	Asteroid9: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid9.png",
	},
	Asteroid10: {
		sourceString: "OuterGame/res/sprites/Planet/Asteroid10.png",
	},
	Planet1: {
		sourceString: "OuterGame/res/sprites/Planet/p0001.png",
	},
	Planet2: {
		sourceString: "OuterGame/res/sprites/Planet/p0010.png",
	},
	Planet3: {
		sourceString: "OuterGame/res/sprites/Planet/p0011.png",
	},
	Planet4: {
		sourceString: "OuterGame/res/sprites/Planet/p0008.png",
	},
	Planet5: {
		sourceString: "OuterGame/res/sprites/Planet/p0006.png",
	},
	playerShip: {
		sourceString: "OuterGame/res/sprites/Finalimgs/SpaceShip.png",
	},
	starfield: {
		sourceString: "OuterGame/res/starfield.png"
	},
	Station: {
		sourceString: "OuterGame/res/sprites/Finalimgs/AllySpaceStation4.png"
	},
	Drone1: {
		sourceString: "OuterGame/res/sprites/Finalimgs/Drone2.png"
	},
	Drone2: {
		sourceString: "OuterGame/res/sprites/Finalimgs/Drone3.png"
	},
	Drone3: {
		sourceString: "OuterGame/res/sprites/Finalimgs/Drone4.png"
	},
	//inner game images
	grass: {
		sourceString: "InnerGame/res/sprites/grass.png",
	},
	fog: {
		sourceString: "InnerGame/res/sprites/fog.png",
	},
	rocks2c: {
		sourceString: "InnerGame/res/sprites/rocks2c.png",
	},
	tractor: {
		sourceString: "InnerGame/res/sprites/tractor.png",
	},
	WATERTiles: {
		sourceString: "InnerGame/res/sprites/WATERTiles.png",
	},
	hpPU: {
		sourceString: "InnerGame/res/sprites/hpPU.png",
	},
	shieldPU: {
		sourceString: "InnerGame/res/sprites/shieldPU.png",
	},
	moneyPU: {
		sourceString: "InnerGame/res/sprites/moneyPU.png",
	},
	techPU: {
		sourceString: "InnerGame/res/sprites/techPU.png",
	},
	arrowPU: {
		sourceString: "InnerGame/res/sprites/arrowPU.png",
	},
	splash: {
		sourceString:"InnerGame/res/sprites/splash/youdied.jpg",
	},
	creature1: {
		sourceString:"InnerGame/res/sprites/creatures/FatBat.png"
	},
	creature2: {
		sourceString:"InnerGame/res/sprites/creatures/green.png"
	},
	creature3: {
		sourceString:"InnerGame/res/sprites/creatures/chickenwithabelt.png"
	},
	creature4: {
		sourceString:"InnerGame/res/sprites/creatures/Ratwithahood.png"
	},
	creature5: {
		sourceString:"InnerGame/res/sprites/creatures/AlienMage.png"
	},
	// Panels
	logohead: {
		sourceString:"OuterGame/res/panels/header.png",
	},
	question: {
		sourceString:"OuterGame/res/panels/questionMark.png",
	},
	splashpanel: {
		sourceString:"OuterGame/res/panels/TheSplash.png",
	},
	helpinner: {
		sourceString:"OuterGame/res/panels/panel_IG.png",
	},
	helpouter: {
		sourceString:"OuterGame/res/panels/panel_OG.png",
	},
	panel00: {
		sourceString:"OuterGame/res/panels/IntroText2.png",
	},
	panel01: {
		sourceString:"OuterGame/res/panels/bluedown.png",
	},
	panel02: {
		sourceString:"OuterGame/res/panels/greendown.png",
	},
	panel03: {
		sourceString:"OuterGame/res/panels/greydown.png",
	},
	panel04: {
		sourceString:"OuterGame/res/panels/purpledown.png",
	},
	panel05: {
		sourceString:"OuterGame/res/panels/reddown.png",
	},
	// Trading post images
	stationBackground: {
		sourceString:"OuterGame/shopIMGS/background.png",


		roverEngine: {
			sourceString:"shopIMGS/engine2.png",
		},
		fogRemover: {
			sourceString:"shopIMGS/fog.png",
		},
		health: {
			sourceString:"shopIMGS/health.png",
		},
		lasergun: {
			sourceString:"shopIMGS/lasergun.png",
		},
		turret: {
			sourceString:"shopIMGS/turret.png",
		},
		shield: {
			sourceString:"shopIMGS/shield.png",
		},
		minion: {
			sourceString:"shopIMGS/minion.png",
		},
		exitButton: {
			sourceString:"shopIMGS/exit.png",
		}
	},
	minion: {
		sourceString: "InnerGame/res/sprites/minions/minion.png",
	}
}


function loadImages() {
	let promises = [];
	for (let index in imageSources) {
		if (imageSources.hasOwnProperty(index)) {
			promises.push(new Promise(function (resolve, reject) {
				var img = new Image();
				var sourceString = imageSources[index].sourceString;
				img.addEventListener('load', function () {
					resolve(img);
				});
				img.addEventListener('error', function (error) {
					console.log('Failed to load: ' + sourceString);
					reject();
				});
				img.src = sourceString;
			}).then(function (img) {
				Images[index] = img;
			}))
		}
	}
	Promise.all(promises).then(function () {
		loadSounds();
	});
}

let soundSources = {//Properties of soundSources match names of sounds
	backgroundMusic: {
		sourceString:"OuterGame/res/sounds/A/bgS.mp3",
	},
	backgroundMusicAlt: {
		sourceString:"OuterGame/res/sounds/B/bgS.mp3",
	},
	badNoiseDontUse: {
		sourceString:"OuterGame/res/sounds/B/GoodNoiseplsuse.wav",
	},
	click: {
		sourceString:"OuterGame/res/sounds/A/click.mp3",
	},
	cllsn: {
		sourceString:"OuterGame/res/sounds/A/cllsn.mp3",
	},
	ding: {
		sourceString:"OuterGame/res/sounds/A/ding.mp3",
	},
	doom: {
		sourceString:"OuterGame/res/sounds/A/doom.mp3",
	},
	error: {
		sourceString:"OuterGame/res/sounds/B/err.wav",
	},
	keyStroke1: {
		sourceString:"OuterGame/res/sounds/B/computernoise1.wav",
	},
	keyStroke2: {
		sourceString:"OuterGame/res/sounds/B/computernoise2.wav",
	},
	keyStroke3: {
		sourceString:"OuterGame/res/sounds/B/computernoise3.wav",
	},
	mchn: {
		sourceString:"OuterGame/res/sounds/A/mchn.mp3",
	},
	money: {
		sourceString:"OuterGame/res/sounds/A/money.mp3",
	},
	point: {
		sourceString:"OuterGame/res/sounds/B/points.wav",
	},
	mS1: {
		sourceString:"OuterGame/res/sounds/A/mS1.mp3",
	},
	shipCollide1: {
		sourceString:"OuterGame/res/sounds/B/CollidingwithOtherShips1.wav",
	},
	shipCollide2: {
		sourceString:"OuterGame/res/sounds/B/CollidingwithOtherShips3.wav",
	},
	shipForwards: {
		sourceString:"OuterGame/res/sounds/B/ShipNoiseForward.wav",
	},
	shipLand: {
		sourceString:"OuterGame/res/sounds/B/SpaceShipLanding1.wav",
	},
	smash: {
		sourceString:"OuterGame/res/sounds/A/smash.mp3",
	},
	spaceSounds: {
		sourceString:"OuterGame/res/sounds/B/spaceambience1.wav",
	},
	takeoff: {
		sourceString:"OuterGame/res/sounds/B/Takeoff.wav",
	},
	tDest: {
		sourceString:"OuterGame/res/sounds/A/tDest.mp3",
	},
	tNoise: {
		sourceString:"OuterGame/res/sounds/A/tNoise.mp3",
	},
	tpLand: {
		sourceString:"OuterGame/res/sounds/B/LandingonTradePost.wav",
	},
	tradeErr: {
		sourceString:"OuterGame/res/sounds/B/unsuccessfultrade.wav",
	},
	uPup: {
		sourceString:"OuterGame/res/sounds/A/uPup.mp3",
	},
	water: {
		sourceString:"OuterGame/res/sounds/A/water.mp3",
	},
	weaponPulse: {
		sourceString:"OuterGame/res/sounds/A/weapon.mp3",
	},
	xplsn1: {
		sourceString:"OuterGame/res/sounds/B/explosion4.wav",
	},
	xplsn2: {
		sourceString:"OuterGame/res/sounds/B/explosion5.wav",
	},
	xplsn3: {
		sourceString:"OuterGame/res/sounds/B/explosion3.wav",
	}
}


  function loadSounds(){
	let promises = [];
	for(let index in soundSources){
		if(soundSources.hasOwnProperty(index)){
			promises.push(new Promise(function(resolve,reject){
				var sourceString = soundSources[index].sourceString;
				var sou = new Audio(sourceString);
				sou.addEventListener('load', function(){
					resolve(img);
				});
				sou.addEventListener('error', function(){
					reject();
				});
			}).then(function(img){
				Sounds[index] = sou;
			}))
		}
	}
	Promise.all(promises).then(function(){
		init();
	});
}
