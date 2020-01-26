class BidController {
	public static setupBidRoundOne(gameState: SingleGameState) {
		gameState.gameStage = GameStage.BidRoundOne;
		gameState.trumpCandidate = gameState.deck.popCards(1)[0];

		console.log("Trump candidate: " + gameState.trumpCandidate.id);
	}

	public static getNextBidRoundOne(gameState: SingleGameState) {

	}

	public static getNextBidRoundTwo(gameState: SingleGameState) {

	}
}