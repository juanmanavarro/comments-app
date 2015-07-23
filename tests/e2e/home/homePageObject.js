var HomePage = function() {
    var commentInput = element(by.model('comment'));
    var submitButton = element.all(by.css('[ng-click="addComment()"]'));
    var commentsList = element.all(by.repeater('comment in comments'));
    var newComment = commentsList.last();
    var likeButton = newComment.element(by.css('[ng-click="likeComment(comment.$id)"]'));

    this.get = function() {
        browser.get('/');
    };

    this.commentNumber = function() {
        return commentsList.count();
    };

    this.submitComment = function(comment) {
        if(comment) {
            commentInput.sendKeys(comment);
        } else {
            commentInput.clear();
        }
        submitButton.click();
    };

    this.lastCommentBodyText = function() {
        return newComment.element(by.binding('comment.comment')).getText();
    };

    this.lastCommentLikesText = function() {
        return newComment.element(by.binding('comment.likes')).getText();
    };

    this.clickLikeButton = function() {
        newComment.element(by.css('[ng-click="likeComment(comment.$id)"]')).click();
    };
}

module.exports = HomePage;
