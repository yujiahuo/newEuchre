class GameController {
	private __session: SessionState;
	private __currentGame: SingleGameState;
	private __continue: boolean;

	constructor() {

	}

	public startSession(): void {
		console.log("Start session");
		this.__session = new SessionState();
	}

	public startGame(): void {
		if (!this.__session) return;

		console.log("Start game");

		this.__currentGame = new SingleGameState(this.__session.players);
		this.__continue = true;
		HandController.startNewHand(this.__currentGame, this.__session.settings.dealStyle);
		for (let player of this.__session.players) {
			player.init();
		}
	}

	public playNextStep(): void {
		this.startGame();

		if (this.__currentGame.gameStage === GameStage.BidRoundOne ||
			this.__currentGame.gameStage === GameStage.BidRoundTwo) {
			this.__getBid()
		}
	}

	private __getBid() {
		let bidRound = this.__currentGame.gameStage;
		let player = this.__currentGame.currentPlayer;

		//player.chooseOrderUp();
	}

	private __discardCard() {

	}

	private __playCard() {

	}
}

// Go forth and conquer
var controller = new GameController();
controller.startSession();
//controller.startGame();

function playNextStep() {
	controller.playNextStep();
}