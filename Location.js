function Location(h, v) {
    this.h = h;
    this.v = v;
}

Location.prototype.equals = function (location2) {
    return this.h == location2.h && this.v == location2.v;
}

Location.prototype.distance = function () {
    return Math.abs(this.h) + Math.abs(this.v);
}

Location.move = function (location, direction, moveBy) {
    switch (direction) {
        case 0: 
            return new Location(location.h, location.v + moveBy);
            break;
        case 1: 
            return new Location(location.h + moveBy, location.v);
            break;
        case 2: 
            return new Location(location.h, location.v - moveBy);
            break;
        case 3:
            return new Location(location.h - moveBy, location.v);
            break;
    }   
}

module.exports = Location;