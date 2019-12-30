class HandController {
	public static startNewHand() {
		this.deck = new Deck();
		if (!this.dealer) {
			this.dealer = this.players[rng.nextInRange(0, 3)];
		}
		else {
			this.dealer = this.players[nextSeat(this.dealer.seat)];
		}

		this.__dealHands();
	}

	private static __dealHands(): void {
		let player: Player = this.dealer;
		for (let numToDeal of [3, 2, 3, 2, 2, 3, 2, 3]) {
			player = this.getNextPlayer(player);
			player.hand.push(...this.deck.popCards(numToDeal));
		}
	}
}