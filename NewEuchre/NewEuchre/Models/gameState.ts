enum GameStage {
	Deal,
	BidRoundOne,
	BidRoundTwo,
	Discard,
	Playing
}

interface BidResult {
	stage: GameStage.BidRoundOne | GameStage.BidRoundTwo; // TODO: Maybe not useful?
	trump: Suit;
	maker: Player;
	alone: boolean;
}

class SessionState {
	public nsGamesWon: number;
	public ewGamesWon: number;
	public nsTotalScore: number;
	public ewTotalScore: number;
	public settings: Settings;
	public players: Player[];


	public constructor() {
		this.__setDefaultSettings();
		this.nsGamesWon = 0;
		this.ewGamesWon = 0;
		this.nsTotalScore = 0;
		this.ewTotalScore = 0;
	}

	private __setDefaultSettings() {
		this.settings = {
			sound: true,
			openHands: false,
			enableNoTrump: false,
			showTrickHistory: false,
			statMode: false,
			messageLevel: MessageLevel.Step,
			numGamesToPlay: 1,
		};

		this.players = [
			new Player(Seat.South),
			new Player(Seat.West, new DecentAI()),
			new Player(Seat.North, new DecentAI()),
			new Player(Seat.East, new DecentAI()),
		]
	}
}

class SingleGameState {
	//Game stuff
	public players: Player[];
	public nsScore: number; //north south
	public ewScore: number; //east west
	public gameStage: GameStage; //TODO: do we need this?

	//Hand stuff
	public deck: Deck;
	public dealer: Player;

	//hand - bidding
	public trumpCandidate: Card; //turned up card
	public bidResult: BidResult | null;

	//hand - tricks
	public trickNumber: number;
	public nsTricksWon: number;
	public ewTricksWon: number;

	//Trick stuff
	public suitLead: Suit | null; //the suit that was lead
	public playedCards: PlayedCard[] = []; //array of cards that have been played this trick so far
	public currentPlayer: Player;

	constructor(players: Player[]) {
		this.players = players;
		this.nsScore = 0;
		this.ewScore = 0;
		this.gameStage = GameStage.Deal;
	}

	public getNextPlayer(player: Player): Player {
		return this.players[nextSeat(player.seat)];
	}

	public startNewHand() {
		this.deck = new Deck();
		if (!this.dealer) {
			this.dealer = this.players[rng.nextInRange(0, 3)];
		}
		else {
			this.dealer = this.players[nextSeat(this.dealer.seat)];
		}

		this.__dealHands();
	}

	private __dealHands(): void {
		let player: Player = this.dealer;
		for (let numToDeal of [3, 2, 3, 2, 2, 3, 2, 3]) {
			player = this.getNextPlayer(player);
			player.hand.push(...this.deck.popCards(numToDeal));
		}
	}

}