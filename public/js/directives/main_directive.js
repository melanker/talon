/**
 * Created with IntelliJ IDEA.
 * User: alonm
 * Date: 5/1/14
 * Time: 11:37 AM
 * To change this template use File | Settings | File Templates.
 */


webApp.directive('movingPictures', function() {
    return {
        restrict: 'E',
        template: "<ul class='moving_img'>" +
                    "<li></li>" +
                    "<li></li>" +
                    "<li></li>" +
                  "</ul>",
        link: function (scope, elem, attrs) {
            debugger;
        }
    };
});
