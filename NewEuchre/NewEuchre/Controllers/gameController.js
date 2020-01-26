var GameController = /** @class */ (function () {
    function GameController() {
    }
    GameController.prototype.startSession = function () {
        console.log("Start session");
        this.__session = new SessionState();
    };
    GameController.prototype.startGame = function () {
        if (!this.__session)
            return;
        console.log("Start game");
        this.__currentGame = new SingleGameState(this.__session.players);
        this.__isHoomanTime = false;
        HandController.setupNewHand(this.__currentGame, this.__session.settings.dealStyle);
        for (var _i = 0, _a = this.__session.players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.init();
        }
        BidController.setupBidRoundOne(this.__currentGame);
        AnimationController.dealCardsAndShowTrump(this.__currentGame.players, this.__currentGame.dealer.seat, this.__currentGame.trumpCandidate.id, this.__session.settings.dealStyle);
        this.playNextStep();
    };
    GameController.prototype.playNextStep = function () {
        if (this.__isHoomanTime) {
            this.__liftShield();
            return;
        }
        switch (this.__currentGame.gameStage) {
            case GameStage.BidRoundOne: {
                BidController.getNextBidRoundOne(this.__currentGame);
                break;
            }
            case GameStage.BidRoundTwo: {
                BidController.getNextBidRoundTwo(this.__currentGame);
                break;
            }
            case GameStage.Discard: {
                break;
            }
            case GameStage.Playing: {
                break;
            }
            case GameStage.EndGame: {
                break;
            }
            default: { // Something probably broke
                console.log("Idk what happened here");
                return;
            }
        }
    };
    GameController.prototype.orderUp = function () {
        this.__setShield();
        // Advance to discard stage is appropriate
        // Set trump and advance to playing stage
    };
    GameController.prototype.spadesTrump = function () {
        this.__setShield();
        // Set trump and advance to playing stage
    };
    GameController.prototype.heartsTrump = function () {
        this.__setShield();
        // Set trump and advance to playing stage
    };
    GameController.prototype.diamondsTrump = function () {
        this.__setShield();
        // Set trump and advance to playing stage
    };
    GameController.prototype.clubsTrump = function () {
        this.__setShield();
        // Set trump and advance to playing stage
    };
    GameController.prototype.discard = function () {
        this.__setShield();
        // Remove card in hand and advance to playing
    };
    GameController.prototype.__setShield = function () {
    };
    GameController.prototype.__liftShield = function () {
    };
    return GameController;
}());
//# sourceMappingURL=gameController.js.map