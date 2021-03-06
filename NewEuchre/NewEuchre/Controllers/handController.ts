class HandController {

	// Create new deck
	// Set dealer
	// Deal hands
	public static setupNewHand(gameState: SingleGameState, dealStyle: number[][]) {
		console.log("New hand");

		gameState.gameStage = GameStage.Deal;
		gameState.deck = new Deck();

		//TODO: factor out
		if (!gameState.dealer) {
			gameState.dealer = gameState.players[rng.nextInRange(0, 3)];
		}
		else {
			gameState.dealer = gameState.players[nextSeat(gameState.dealer.seat)];
		}
		this.__dealHands(gameState, dealStyle);
	}

	private static __dealHands(gameState: SingleGameState, dealStyle: number[][]): void {
		console.log("Deal hands");

		let player: Player = gameState.dealer;
		for (let dealGroup of dealStyle) {
			player = gameState.getNextPlayer(player);
			player.hand.push(...gameState.deck.popCards(dealGroup.length));
		}

		console.log(gameState.players[Seat.South].hand);
		console.log(gameState.players[Seat.West].hand);
		console.log(gameState.players[Seat.North].hand);
		console.log(gameState.players[Seat.East].hand);
	}
}