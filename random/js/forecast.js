'use strict';

//場所
const places = document.getElementById('places').textContent;

//データ取得
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + places + ',jp&appid=cad1acb1ca70f5401a7f4a87fd3479cb',
    cache: false,
   

    success: function(data) {
        console.log(data);
        //都市名、国名
        console.log('都市名:' + data.city.name);
        console.log('国名' + data.city.country);

        //現在
        if (data.list[0].weather[0].main === "Clear") {
            $('#weather').text("晴れ");
        } else if (data.list[0].weather[0].main === "Rain") {
            $('#weather').text("雨");
        } else if (data.list[0].weather[0].main === "Clouds") {
            $('#weather').text("くもり");
        } else if (data.list[0].weather[0].main === "Snow") {
            $('#weather').text("雪");
        }

        $('#forecast').text(Math.floor(data.list[0].main.temp - 273.15));

        const temp = data.list[0].weather[0].icon;
        const tempurl = 'http://openweathermap.org/img/wn/' + temp + '@2x.png';
        console.log(tempurl);
        $('#icon').attr('src', tempurl);
        //12
        if (data.list[4].weather[0].main === "Clear") {
            $('#weather12').text("晴れ");
        } else if (data.list[4].weather[0].main === "Rain") {
            $('#weather12').text("雨");
        } else if (data.list[4].weather[0].main === "Clouds") {
            $('#weather12').text("くもり");
        } else if (data.list[4].weather[0].main === "Snow") {
            $('#weather12').text("雪");
        }

        $('#forecast12').text(Math.floor(data.list[4].main.temp - 273.15));

        const temp12 = data.list[4].weather[0].icon;
        const tempurl12 = 'http://openweathermap.org/img/wn/' + temp12 + '@2x.png';
        console.log(tempurl12);
        $('#icon12').attr('src', tempurl12);
        //24
        if (data.list[8].weather[0].main === "Clear") {
            $('#weather24').text("晴れ");
        } else if (data.list[8].weather[0].main === "Rain") {
            $('#weather24').text("雨");
        } else if (data.list[8].weather[0].main === "Clouds") {
            $('#weather24').text("くもり");
        } else if (data.list[8].weather[0].main === "Snow") {
            $('#weather24').text("雪");
        }

        $('#forecast24').text(Math.floor(data.list[8].main.temp - 273.15));

        const temp24 = data.list[8].weather[0].icon;
        const tempurl24 = 'http://openweathermap.org/img/wn/' + temp24 + '@2x.png';
        console.log(tempurl24);
        $('#icon24').attr('src', tempurl24);
        //36
        if (data.list[12].weather[0].main === "Clear") {
            $('#weather36').text("晴れ");
        } else if (data.list[12].weather[0].main === "Rain") {
            $('#weather36').text("雨");
        } else if (data.list[12].weather[0].main === "Clouds") {
            $('#weather36').text("くもり");
        } else if (data.list[12].weather[0].main === "Snow") {
            $('#weather36').text("雪");
        }

        $('#forecast36').text(Math.floor(data.list[12].main.temp - 273.15));

        const temp36 = data.list[12].weather[0].icon;
        const tempurl36 = 'http://openweathermap.org/img/wn/' + temp36 + '@2x.png';
        console.log(tempurl36);
        $('#icon36').attr('src', tempurl36);
        //48
        if (data.list[16].weather[0].main === "Clear") {
            $('#weather48').text("晴れ");
        } else if (data.list[16].weather[0].main === "Rain") {
            $('#weather48').text("雨");
        } else if (data.list[16].weather[0].main === "Clouds") {
            $('#weather48').text("くもり");
        } else if (data.list[16].weather[0].main === "Snow") {
            $('#weather48').text("雪");
        }

        $('#forecast48').text(Math.floor(data.list[16].main.temp - 273.15));

        const temp48 = data.list[16].weather[0].icon;
        const tempurl48 = 'http://openweathermap.org/img/wn/' + temp48 + '@2x.png';
        console.log(tempurl48);
        $('#icon48').attr('src', tempurl48);

    }

})