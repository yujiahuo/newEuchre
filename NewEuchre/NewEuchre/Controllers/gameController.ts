var controller = new Controller();
controller.startSession();
controller.startGame();

function playNextStep() {
	controller.playNextStep();
}

class Controller {
	private __session: SessionState;
	private __currentGame: SingleGameState;
	private __continue: boolean;

	public startSession(): void {
		this.__session = new SessionState();
	}

	public startGame(): void {
		if (!this.__session) return;

		this.__currentGame = new SingleGameState(this.__session.players());
		this.__continue = true;
		this.__dealHands();
		for (let player of this.__session.players()) {
			player.init();
		}
	}

	public playNextStep(): void {
		if (this.__currentGame.gameStage() === GameStage.BidRoundOne ||
			this.__currentGame.gameStage() === GameStage.BidRoundTwo) {
			this.__getBid()
		}
	}

	private __dealHands(): void {
		for (let i = 0; i < 20; i++) {
			let player = (dealer + i) % 4;
			let cardPos = Math.floor(i / 4);
			//TODO: see if skipping the pop makes things faster
			playerHands[player][cardPos] = deck.pop() as Card;
		}
	}

	private __getBid() {
		let bidRound = this.__currentGame.gameStage();
		let player = this.__currentGame.currentPlayer();

		//player.chooseOrderUp();
	}

	private __discardCard() {

	}

	private __playCard() {

	}
}