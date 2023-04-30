class calcCircle {
    getCircleLength = (radius) => 2 * Math.PI * radius;
    getCircleArea = (radius) => Math.PI * radius ** 2;
}

module.exports = new calcCircle();