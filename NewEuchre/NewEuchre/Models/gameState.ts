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
	public gameStage: GameStage;

	//Hand stuff
	public deck: Deck | null; //also the kitty when cards are dealt from it
	public dealer: Player;

	//Hand - bidding
	public trumpCandidate: Card | null; //turned up card
	public bidResult: BidResult | null;

	//Hand - tricks
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

		//this.deck = null;
		//this.dealer = players[Seat.South];

		//this.trumpCandidate = null;
		//this.bidResult = null;

		//this.trickNumber = 0;
		//this.nsTricksWon = 0;
		//this.ewTricksWon = 0;

		//this.suitLead = null;
		//this.playedCards = [];
		//this.currentPlayer = players[0];
	}

	public getNextPlayer(player: Player): Player {
		return this.players[nextSeat(player.seat)];
	}
}