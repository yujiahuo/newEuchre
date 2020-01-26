var Team;
(function (Team) {
    Team[Team["NorthSouth"] = 0] = "NorthSouth";
    Team[Team["EastWest"] = 1] = "EastWest";
})(Team || (Team = {}));
var Seat;
(function (Seat) {
    Seat[Seat["South"] = 0] = "South";
    Seat[Seat["West"] = 1] = "West";
    Seat[Seat["North"] = 2] = "North";
    Seat[Seat["East"] = 3] = "East";
})(Seat || (Seat = {}));
var Player = /** @class */ (function () {
    function Player(seat, ai) {
        this.ai = null;
        this.seat = seat;
        if (ai) {
            this.ai = ai;
        }
        this.hand = [];
    }
    Player.prototype.init = function () {
        if (this.ai) {
            this.ai.init(this);
        }
    };
    Player.prototype.chooseOrderUp = function (hand, trumpCandidate, dealer) {
        if (this.ai) {
            this.ai.chooseOrderUp(hand, trumpCandidate, dealer);
        }
    };
    return Player;
}());
//# sourceMappingURL=player.js.map