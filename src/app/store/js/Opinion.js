/*class Opinion {
  constructor(user, rating, comment) {
    if (
      typeof user !== "string" ||
      typeof comment !== "string" ||
      typeof rating !== "number"
    ) {
      throw new Error("Invalid input data types");
    }

    if (rating < 0 || rating > 5 || !Number.isInteger(rating)) {
      throw new Error("The rating should be an integer between 0 and 5.");
    }

    if (comment.length > 300) {
      throw new Error("The comment should have less than 300 characters.");
    }

    this.user = user;
    this.rating = rating;
    this.comment = comment;
    this.date = new Date();
  }
}

export default Opinion;
*/
