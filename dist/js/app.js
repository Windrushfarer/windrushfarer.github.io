var Options = {
    activate: function () {
        var _this = this;
        _this.fix();
        $(window, ".wrapper").resize(function () {
            _this.fix();
        });
    },
    fix: function () {
        //Get window height and the wrapper height
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        var sidebar_height = $(".sidebar").height();
        //Set the min-height of the content and sidebar based on the
        //the height of the document.
        if ($("body").hasClass("fixed")) {
            $(".content-wrapper").css('min-height', window_height - $('.main-footer').outerHeight());
            $(".profile-wrapper").css('min-height', window_height - $('.main-footer').outerHeight());
        } else {
            var postSetWidth;
            if (window_height >= sidebar_height) {
                $(".content-wrapper, .right-side").css('min-height', window_height - neg);
                postSetWidth = window_height - neg;
            } else {
                $(".content-wrapper, .right-side").css('min-height', sidebar_height);
                postSetWidth = sidebar_height;
            }

        }
    }
};
Options.activate();

$(".user-panel").click(function() {
    $(".profile-wrapper").show();
});

$(".profile-wrapper").click(function () {
    $(this).hide();
});

//Angular
var app = angular.module('testApp', []);
app.controller('AppController', function ($scope) {
    $scope.list = [
        {
            date: 'Today',
            tasks: [
                {
                    title: 'Create company',
                    color: 'red',
                    executers: [
                        {
                            name: 'User 1',
                            avatar: 'dist/img/user1-128x128.jpg'
                        },
                        {
                            name: 'User 3',
                            avatar: 'dist/img/user3-128x128.jpg'
                        }
                    ]
                }
            ]
        }, {
            date: 'Tomorrow',
            tasks: [
                {
                    title: 'Call in barber shop',
                    color: 'yellow',
                    executers: [
                        {
                            name: 'User 1',
                            avatar: 'dist/img/user1-128x128.jpg'
                        }
                    ]
                }
            ]
        }, {
            date: 'Friday (09.06.2016)',
            tasks: [
                {
                    title: 'Earn a lot of money',
                    color: 'yellow',
                    executers: [
                        {
                            name: 'User 1',
                            avatar: 'dist/img/user1-128x128.jpg'
                        },  {
                            name: 'User 3',
                            avatar: 'dist/img/user3-128x128.jpg'
                        },  {
                            name: 'User 4',
                            avatar: 'dist/img/user4-128x128.jpg'
                        },  {
                            name: 'User 5',
                            avatar: 'dist/img/user5-128x128.jpg'
                        }
                    ]
                }, {
                    title: 'Go to the shop',
                    color: 'orange',
                    executers: [
                        {
                            name: 'User 1',
                            avatar: 'dist/img/user1-128x128.jpg'
                        }, {
                            name: 'User 6',
                            avatar: 'dist/img/user6-128x128.jpg'
                        }
                    ]
                }

            ]
        }, {
            date: 'Saturday (10.06.2016)',
            tasks: [
                {
                    title: 'Buy gifts',
                    executers: [
                        {
                            name: 'User 1',
                            avatar: 'dist/img/user1-128x128.jpg'
                        }, {
                            name: 'User 3',
                            avatar: 'dist/img/user3-128x128.jpg'
                        }
                    ]
                }
            ]
        }, {
            date: 'Sunday (11.06.2016)',
            tasks: [
                {
                    title: 'Brush teeth',
                    color: 'yellow',
                    executers: [{
                            name: 'User 3',
                            avatar: 'dist/img/user3-128x128.jpg'
                        }
                    ]
                }
            ]
        }

    ];
});