var homePageObject = require('./homePageObject.js');
var homePage = new homePageObject();

describe('the comments list', function() {
    var comment = 'a comment';

    beforeEach(function() {
        homePage.get();
    });

    it('should not to add a comment if the input is empty', function() {
        var commentNumberBefore = homePage.commentNumber();
        homePage.submitComment();
        var commentNumberAfter = homePage.commentNumber();
        expect(commentNumberAfter).toBe(commentNumberBefore);
    });

    it('should add a comment with 0 likes', function() {
        homePage.submitComment(comment);
        expect(homePage.lastCommentBodyText()).toBe(comment);
        expect(homePage.lastCommentLikesText()).toBe('0');
    });

    it('should increment the likes if the like button is pushed', function() {
        homePage.submitComment(comment);
        var likes;
        homePage.lastCommentLikesText().then(function(text) {
            likes = parseInt(text);
            homePage.clickLikeButton();
            expect(homePage.lastCommentLikesText()).toEqual((likes + 1).toString());
        });
    });
});
