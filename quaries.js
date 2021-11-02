const User = require("./models").user;
const Review = require("./models").review;

async function getUserWithReview() {
  const user = await User.findByPk(3, {
    include: [{ model: User, as: "reviewed" }],
  });
  return user;
}

getUserWithReview().then((data) => console.log(data));
