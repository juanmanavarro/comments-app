angular
    .module('comments')
    .controller('CommentController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
        //CREATE A FIREBASE REFERENCE
        var ref = new Firebase("https://blistering-torch-9771.firebaseio.com/");

        // GET MESSAGES AS AN ARRAY
        $scope.comments = $firebaseArray(ref);

        //ADD MESSAGE METHOD
        $scope.addComment = function() {
            //ADD TO FIREBASE
            $scope.comments.$add({
                likes: 0,
                comment: $scope.comment
            });
            //RESET MESSAGE
            $scope.comment = "";
        }

        $scope.likeComment = function(comment) {
            var comment = $scope.comments.$getRecord(comment);
            comment.likes += 1;
            $scope.comments.$save(comment);
        }
}]);
