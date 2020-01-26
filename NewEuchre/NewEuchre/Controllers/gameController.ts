class GameController {
	private __session: SessionState;
	private __currentGame: SingleGameState;
	private __isHoomanTime: boolean;

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
		this.__isHoomanTime = false;

		HandController.setupNewHand(this.__currentGame, this.__session.settings.dealStyle);
		for (let player of this.__session.players) {
			player.init();
		}
		BidController.setupBidRoundOne(this.__currentGame);
		AnimationController.dealCardsAndShowTrump(
			this.__currentGame.players,
			this.__currentGame.dealer.seat,
			this.__currentGame.trumpCandidate.id,
			this.__session.settings.dealStyle,
		);
		this.playNextStep();
	}

	public playNextStep(): void {
		if (this.__isHoomanTime) {
			this.__liftShield();
			return;
		}

		switch (this.__currentGame.gameStage) {
			case GameStage.BidRoundOne: {
				BidController.getNextBidRoundOne(this.__currentGame);
				break;
			}
			case GameStage.BidRoundTwo: {
				BidController.getNextBidRoundTwo(this.__currentGame);
				break;
			}
			case GameStage.Discard: {
				break;
			}
			case GameStage.Playing: {
				break;
			}
			case GameStage.EndGame: {
				break;
			}
			default: { // Something probably broke
				console.log("Idk what happened here");
				return;
			}
		}
	}

	public orderUp(): void {
		this.__setShield();
		// Advance to discard stage is appropriate
		// Set trump and advance to playing stage
	}

	public spadesTrump(): void {
		this.__setShield();
		// Set trump and advance to playing stage
	}

	public heartsTrump(): void {
		this.__setShield();
		// Set trump and advance to playing stage
	}

	public diamondsTrump(): void {
		this.__setShield();
		// Set trump and advance to playing stage
	}

	public clubsTrump(): void {
		this.__setShield();
		// Set trump and advance to playing stage
	}

	public discard(): void {
		this.__setShield();
		// Remove card in hand and advance to playing
	}

	private __setShield(): void {

	}

	private __liftShield(): void {

	}
}