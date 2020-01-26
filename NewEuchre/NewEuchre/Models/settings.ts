enum MessageLevel {
	Step,
	Game,
	Multigame,
}

interface Settings {
	sound: boolean;
	openHands: boolean;
	enableNoTrump: boolean;
	showTrickHistory: boolean;
	statMode: boolean;
	messageLevel: MessageLevel;
	numGamesToPlay: number;
	dealStyle: number[][];
}