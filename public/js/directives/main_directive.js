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
        templateUrl: 'templates/moving_pictures_template.html',
        link: function (scope, elem, attrs) {

            setInterval(function() {
                var listArr;

                listArr = $('ul.moving_img').find('li');
                var leftListElem = listArr[2];
                var activeElem = $('ul.moving_img').find('.active');
                activeElem.removeClass();
                activeElem.remove();


                $(listArr[1]).animate({'left': '-100px'});
                $(listArr[0]).animate({'left': '-100px'});

                $(leftListElem).animate({
                        "left": -($(leftListElem).parent().width()-300)}
                    , 500, function() {
                        $(listArr[0]).css({'left':'0'});
                        $(listArr[1]).css({'left':'0'});
                        activeElem.css({'left':'0'});
                        $('ul.moving_img').prepend(activeElem);
                        $(leftListElem).addClass('active');
                    });
            }, 4000);

        }
    };
});
