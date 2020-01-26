var AnimationController = /** @class */ (function () {
    function AnimationController() {
    }
    AnimationController.initGame = function () {
    };
    AnimationController.dealCards = function (players, dealerSeat, dealStyle) {
        var player = players[dealerSeat];
        var cardID;
        var delay = 0;
        var zIndex = 0;
        for (var _i = 0, dealStyle_1 = dealStyle; _i < dealStyle_1.length; _i++) {
            var dealGroup = dealStyle_1[_i];
            player = players[nextSeat(player.seat)];
            delay += 200;
            for (var _a = 0, dealGroup_1 = dealGroup; _a < dealGroup_1.length; _a++) {
                var handIndex = dealGroup_1[_a];
                cardID = player.hand[handIndex].id;
                zIndex += 1;
                this.__moveCardToHand(cardID, player.seat, handIndex + 1, zIndex, delay);
                if (player.ai === null) {
                    this.__flipCard(cardID, true, delay);
                }
                else {
                    this.__flipCard(cardID, false, delay);
                }
            }
        }
    };
    AnimationController.__flipCard = function (cardID, faceUp, delay) {
        var cardElem = document.getElementById(cardID);
        setTimeout(function () {
            if (cardElem.classList.contains("cardBack") && faceUp) {
                cardElem.classList.remove("cardBack");
            }
            else if (!cardElem.classList.contains("cardBack") && !faceUp) {
                cardElem.classList.add("cardBack");
            }
        }, delay);
    };
    AnimationController.__moveCardToHand = function (cardID, seat, handIndex, zIndex, delay) {
        var cardElem = document.getElementById(cardID);
        setTimeout(function () {
            cardElem.classList.add(Seat[seat].toLowerCase());
            cardElem.classList.add("hand" + handIndex);
            cardElem.style.zIndex = zIndex.toString();
        }, delay);
    };
    AnimationController.__playCard = function (cardID, delay) {
        var cardElem = document.getElementById(cardID);
        setTimeout(function () {
            cardElem.classList.remove("cardBack");
            var handClass = cardElem.className.match("hand\d").toString();
            cardElem.classList.remove(handClass);
            cardElem.classList.add("played");
        }, delay);
    };
    AnimationController.__winHand = function (winningSeat) {
    };
    return AnimationController;
}());
//# sourceMappingURL=animationController.js.map