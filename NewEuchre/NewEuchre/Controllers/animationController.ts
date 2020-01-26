class AnimationController {

	// All this stuff always happens together and needs to be timed together
	public static dealCardsAndShowTrump(players: Player[], dealerSeat: Seat, trumpCandidateID: string, dealStyle: number[][]): void {
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

		this.__setDealerChip(dealerSeat);
		this.__showTrumpCandidate(trumpCandidateID, delay += 200);

		//TODO: hide the kitty =(OwO)=
	}

	private static __showTrumpCandidate(cardID: string, delay: number): void {
		let cardElem = document.getElementById(cardID);
		this.__flipCard(cardID, true, delay);
		cardElem.classList.add("trumpCandidate");
		cardElem.style.zIndex = "100";
	}

	private static __setDealerChip(seat: Seat) {
		document.getElementById("dealerChip").className = Seat[seat].toLowerCase();
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

	private static __playCard(cardID: string, delay: number): void {
		var cardElem = document.getElementById(cardID);
		setTimeout(function () {
			cardElem.classList.remove("cardBack");
			let handClass = cardElem.className.match("hand\d").toString();
			cardElem.classList.remove(handClass);
			cardElem.classList.add("played");
		}, delay);
	}

	private static __winHand(winningSeat: Seat): void {

	}
}