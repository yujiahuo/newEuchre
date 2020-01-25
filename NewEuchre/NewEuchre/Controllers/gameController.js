var GameController = (function () {
    function GameController() {
    }
    GameController.prototype.startSession = function () {
        this.__session = new SessionState();
    };
    GameController.prototype.startGame = function () {
        if (!this.__session)
            return;
        this.__currentGame = new SingleGameState(this.__session.players);
        this.__continue = true;
        HandController.startNewHand(this.__currentGame);
        for (var _i = 0, _a = this.__session.players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.init();
        }
    };
    GameController.prototype.playNextStep = function () {
        this.startGame();
        if (this.__currentGame.gameStage === GameStage.BidRoundOne ||
            this.__currentGame.gameStage === GameStage.BidRoundTwo) {
            this.__getBid();
        }
    };
    GameController.prototype.__getBid = function () {
        var bidRound = this.__currentGame.gameStage;
        var player = this.__currentGame.currentPlayer;
        //player.chooseOrderUp();
    };
    GameController.prototype.__discardCard = function () {
    };
    GameController.prototype.__playCard = function () {
    };
    return GameController;
}());
var controller = new GameController();
controller.startSession();
controller.startGame();
function playNextStep() {
    controller.playNextStep();
}
//# sourceMappingURL=gameController.js.map