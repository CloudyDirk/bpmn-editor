var app = angular.module("bpmneditor", ["firebase"]);
app.controller("MainCtrl", function($scope, $firebaseAuth) {
  var auth = $firebaseAuth();

  // login with Facebook
  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser.user.email);
    $scope.email = firebaseUser.user.email;
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
});
