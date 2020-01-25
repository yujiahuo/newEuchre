class HandController {
	public static startNewHand(gameState: SingleGameState) {
		gameState.deck = new Deck();
		if (!gameState.dealer) {
			gameState.dealer = gameState.players[rng.nextInRange(0, 3)];
		}
		else {
			gameState.dealer = gameState.players[nextSeat(gameState.dealer.seat)];
		}

		this.__dealHands(gameState);
	}

	private static __dealHands(gameState: SingleGameState): void {
		let player: Player = gameState.dealer;
		for (let numToDeal of [3, 2, 3, 2, 2, 3, 2, 3]) {
			player = gameState.getNextPlayer(player);
			player.hand.push(...gameState.deck.popCards(numToDeal));
		}
	}
}