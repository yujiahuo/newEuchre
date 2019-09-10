enum Team {
	NorthSouth,
	EastWest,
}

enum Seat {
	South,
	West,
	North,
	East,
}

class Player {
	public readonly seat: Seat;
	public readonly ai: EuchreAI | null = null;
	private __hand: Card[];

	[seat: number]: EuchreAI;

	public constructor(seat: Seat, ai?: EuchreAI) {
		this.seat = seat;
		if (ai) {
			this.ai = ai;
		}
	}

	public init() {
		if (this.ai) {
			this.ai.init(this);
		}
	}

	public chooseOrderUp(hand: Card[], trumpCandidate: Card, dealer: Player) {
		if (this.ai) {
			this.ai.chooseOrderUp(hand, trumpCandidate, dealer);
		}
	}
}