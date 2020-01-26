class AnimationController {
	public static initGame() {

	}

	public static dealCards(players: Player[], dealerSeat: Seat, dealStyle: number[][]): void {
		let player = players[dealerSeat];
		let cardID: string;
		let delay = 0;
		let zIndex = 0;

		for (let dealGroup of dealStyle) {
			player = players[nextSeat(player.seat)];
			delay += 200;
			for (let handIndex of dealGroup) {
				cardID = player.hand[handIndex].id;
				zIndex += 1;
				this.__moveCardToHand(cardID, player.seat, handIndex + 1, zIndex, delay);
				if (player.ai === null) { this.__flipCard(cardID, true, delay) }
				else { this.__flipCard(cardID, false, delay); }
			}
		}
	}

	private static __flipCard(cardID: string, faceUp: boolean, delay: number): void {
		var cardElem = document.getElementById(cardID);
		setTimeout(function () {
			if (cardElem.classList.contains("cardBack") && faceUp) {
				cardElem.classList.remove("cardBack");
			}
			else if (!cardElem.classList.contains("cardBack") && !faceUp) {
				cardElem.classList.add("cardBack");
			}
		}, delay);
	}

	private static __moveCardToHand(cardID: string, seat: Seat, handIndex: number, zIndex: number, delay: number): void {
		var cardElem = document.getElementById(cardID);
		setTimeout(function () {
			cardElem.classList.add(Seat[seat].toLowerCase());
			cardElem.classList.add("hand" + handIndex);
			cardElem.style.zIndex = zIndex.toString();
		}, delay);
	}

	private static __playCard(cardID: string, delay: number) {
		var cardElem = document.getElementById(cardID);
		setTimeout(function () {
			cardElem.classList.remove("cardBack");
			let handClass = cardElem.className.match("hand\d").toString();
			cardElem.classList.remove(handClass);
			cardElem.classList.add("played");
		}, delay);
	}

	private static __winHand(winningSeat: Seat) {

	}
}