class GameController {
	private __session: SessionState;
	private __currentGame: SingleGameState;
	private __continue: boolean;

	constructor() {

	}

	public startSession(): void {
		this.__session = new SessionState();
	}

	public startGame(): void {
		if (!this.__session) return;

		this.__currentGame = new SingleGameState(this.__session.players);
		this.__continue = true;
		this.__currentGame.startNewHand();
		for (let player of this.__session.players) {
			player.init();
		}
	}

	public playNextStep(): void {
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

var controller = new GameController();
controller.startSession();
controller.startGame();

function playNextStep() {
	controller.playNextStep();
}