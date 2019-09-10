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
	private __nsGamesWon = 0;
	private __ewGamesWon = 0;
	private __nsTotalScore = 0;
	private __ewTotalScore = 0;
	private __settings: Settings;
	private __players: Player[];

	public nsGamesWon(): number {
		return this.__nsGamesWon;
	}

	public ewGamesWon(): number {
		return this.__ewGamesWon;
	}

	public nsTotalScore(): number {
		return this.__nsTotalScore;
	}

	public ewTotalScore(): number {
		return this.__ewTotalScore;
	}

	public settings(): Settings {
		return this.__settings;
	}

	public players(): Player[] {
		return this.__players;
	}


	public constructor() {
		this.__setDefaultSettings();
	}

	private __setDefaultSettings() {
		this.__settings.sound = true;
		this.__settings.openHands = false;
		this.__settings.enableNoTrump = false;
		this.__settings.showTrickHistory = false;
		this.__settings.statMode = false;
		this.__settings.messageLevel = MessageLevel.Game;
		this.__settings.numGamesToPlay = 1;

		this.__players = [
			new Player(Seat.South),
			new Player(Seat.West, new DecentAI()),
			new Player(Seat.North, new DecentAI()),
			new Player(Seat.East, new DecentAI()),
		]
	}
}

class SingleGameState {
	//Game stuff
	private __players: Player[];
	private __nsScore = 0; //north south
	private __ewScore = 0; //east west
	private __gameStage: GameStage; //TODO: do we need this?

	//Bidding related
	private __trumpCandidate: Card; //turned up card
	private __bidResult: BidResult | null;

	//Hand stuff
	private __deck = new Deck();
	private __dealer: Player;
	private __trickNumber = 1;
	private __nsTricksWon = 0;
	private __ewTricksWon = 0;

	//Trick stuff
	private __suitLead: Suit | null; //the suit that was lead
	private __playedCards: PlayedCard[] = []; //array of cards that have been played this trick so far
	private __currentPlayer: Player;

	constructor(players: Player[]) {
		this.__players = players;
	}

	public nsScore(): number {
		return this.__nsScore;
	}
	public ewScore(): number {
		return this.__ewScore;
	}

	public gameStage(): GameStage {
		return this.__gameStage;
	}

	public trumpCandidate(): Card {
		return this.__trumpCandidate;
	}

	public bidResult(): BidResult | null {
		return this.__bidResult;
	}

	public dealer(): Player {
		return this.__dealer;
	}

	public trickNumber(): number {
		return this.__trickNumber;
	}

	public nsTricksWon(): number {
		return this.__nsTricksWon;
	}

	public ewTricksWon(): number {
		return this.__ewTricksWon;
	}

	public suitLead(): Suit | null {
		return this.__suitLead;
	}

	public playedCards(): PlayedCard[] {
		return this.__playedCards;
	}

	public currentPlayer(): Player {
		return this.__currentPlayer;
	}

}