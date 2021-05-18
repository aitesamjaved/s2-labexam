jQuery(document).ready(function ($) {

    $('.1st').hide();

    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.main').html('');
            for (var a = 0; a < res.data.length; a++) {
                $('.main').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
            }

        }
    });



    $('.2nd').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.main').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.main').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });


        $('.1st').hide();
        $('.2nd').show();
    });

    $('.1st').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.main').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.main').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });

        $('.1st').hide();
        $('.2nd').show();
    });

});