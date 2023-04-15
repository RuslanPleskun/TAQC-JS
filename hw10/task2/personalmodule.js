
exports.greeting = (username) => {
    let currentTime = new Date().getHours();
    switch(true) {
        case(currentTime === 23 || (currentTime >= 0 && currentTime < 5)):
            return `Good night, ${username}`;
        case(currentTime >= 5 && currentTime < 11):
            return `Good morning, ${username}`;
        case(currentTime >= 11 && currentTime < 17):
            return `Good day, ${username}`;
        case(currentTime >= 17 && currentTime < 23):
            return `Good evening, ${username}`;
        default:
            return "Something went wrong";
      }
};
