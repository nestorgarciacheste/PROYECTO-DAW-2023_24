export class Opinion {
  constructor(user, rating, comment) {
    this.user = user;
    try {
      if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
        throw new Error(
          "The chosen rating is incorrect, it should be an integer between 0 and 5."
        );
      }
      this.rating = rating;
    } catch (error) {
      alert(error.message);
    }

    try {
      if (comment.length > 300) {
        throw new Error("The comment should have less than 300 characters.");
      }
      this.comment = comment;
    } catch (error) {
      alert(error.message);
    }
    this.date = new Date();
  }
}
