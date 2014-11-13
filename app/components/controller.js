/**
 * Created with JetBrains WebStorm.
 * User: Tony_Zhang
 * Date: 11/12/14
 * Time: 11:54 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('FireChat.controllers', ["firebase"])

    .controller('mainCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
        var ref = new Firebase("https://glowing-fire-5574.firebaseio.com/");
        var sync = $firebase(ref);
        var asObj = sync.$asObject();

        $scope.newVal = "";

        asObj.$loaded().then(function(){
            console.log("data updated");
        })

        $scope.setVal = function () {

            sync.$push({hello: "hehe"}).then(function (newChildRef) {
                console.log("add new " + newChildRef.name());
            })

            //sync.$set({foo: "haha"});
        };

        $scope.updateVal = function () {
            sync.$set({hello: $scope.newVal});
        };

        $scope.val = asObj;

    }])
