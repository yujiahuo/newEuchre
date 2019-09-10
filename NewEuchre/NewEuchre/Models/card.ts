const DECKSIZE = 24;

type ShuffleResult = {
	deck: Card[],
	jacks: Card[],
};

function getShuffledDeck(): ShuffleResult {
	let deck: Card[] = [];
	let jacks: Card[] = [];

	for (let i = 0; i < DECKSIZE; i++) {
		let j = rng.nextInRange(0, i);
		if (j !== i) {
			deck[i] = deck[j];
		}
		deck[j] = new Card(SORTEDDECK[i]);
		if (deck[j].rank === Rank.Jack) {
			jacks[deck[j].suit] = deck[j];
		}
	}

	return {
		deck,
		jacks,
	};
}

enum Suit {
	Clubs = 1,
	Diamonds,
	Hearts,
	Spades,
}

let suitsArray = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];

enum Rank {
	Nine = 9,
	Ten = 10,
	Jack = 11,
	Queen = 12,
	King = 13,
	Ace = 14,
	Left = 15,
	Right = 16,
}

class Deck {
	public readonly sortedDeck: Card[];
	private __cards: Card[];

	constructor() {
		this.sortedDeck = this.__getSortedDeck();
		this.__cards = this.__getShuffledDeck();
	}

	private __getSortedDeck(): Card[] {
		let deck: Card[] = [];
		let ranks: Rank[] = [Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King, Rank.Ace];

		for (let suit of suitsArray) {
			for (let rank of ranks) {
				deck.push(new Card(suit, rank));
			}
		}
		return deck;
	}

	private __getShuffledDeck(): Card[] {
		let deck: Card[] = [];

		for (let i = 0; i < DECKSIZE; i++) {
			let j = rng.nextInRange(0, i);
			if (j !== i) {
				deck[i] = deck[j];
			}
			deck[j] = new Card(this.sortedDeck[i]);
		}

		return deck;
	}
}

class Card {
	private __suit: Suit;
	private __rank: Rank;
	private __functionalSuit: Suit;
	private __functionalRank: Rank;
	private __id: string;

	[id: number]: Card;

	constructor(suit: Suit, rank: Rank)
	constructor(card: Card)
	constructor(suitOrCard: Suit | Card, rank?: Rank) {
		if (typeof suitOrCard === "number") {
			this.__suit = suitOrCard as Suit;
			this.__rank = rank as Rank;
		}
		else {
			let card = suitOrCard;
			this.__suit = card.suit;
			this.__rank = card.rank;
		}

		this.__id = Suit[this.__suit] + this.__rank;
	}

	public get suit(): Suit {
		return this.__suit;
	}

	public get rank(): Rank {
		return this.__rank;
	}

	public get functionalSuit(): Suit {
		if (this.__functionalSuit) return this.__functionalSuit;
		else return this.__suit;
	}

	public get functionalRank(): Rank {
		if (this.__functionalRank) return this.__functionalRank;
		else return this.__rank;
	}

	public get id(): string {
		return this.__id;
	}

	//TODO: what is this
	public static safeCard(card: Card): Card
	public static safeCard(card: null): null
	public static safeCard(card: Card | null): Card | null {
		if (card) {
			return new Card(card);
		}
		return null;
	}
}

interface PlayedCard {
	player: Player;
	card: Card;
}
