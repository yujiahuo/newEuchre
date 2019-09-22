function nextSeat(currentSeat) {
    switch (currentSeat) {
        case Seat.South:
            return Seat.West;
        case Seat.West:
            return Seat.North;
        case Seat.North:
            return Seat.East;
        case Seat.East:
            return Seat.South;
    }
}
//# sourceMappingURL=helperAPIs.js.map