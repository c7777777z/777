axios.get('a.json')
    .then(function(res) {
        $(".loading i").css("animation-play-state","running");
        for (var i = 0; i < res.data.length; i++) {
            $('.nl').append("<li><a href='newMain.html?ind="+res.data[i].ind+"'><img src=" + res.data[i].url + ">"+"</a></li>");
        }
        $(".loading").css("display","none");
        $(".loading i").css("animation-play-state","paused");
        $('#page1').addClass("on");
    }).catch(function(res) {})
$(document).ready(function() {
    /*获取第一页数据*/ 
    $('#page1').click(function() {
        $('.nl li').remove();
        $(".loading").css("display","block");
        $(".loading i").css("animation-play-state","running");
        axios.get('a.json')
            .then(function(res) {            
                for (var i = 0; i < res.data.length; i++) {
                    $('.nl').append("<li><a href='newMain.html?ind="+res.data[i].ind+"'><img src=" + res.data[i].url + ">" + "</a></li>");
                }
                $(".loading").css("display","none");
                $(".loading i").css("animation-play-state","paused");
            }).catch(function(res) { console.log('error', res); })
        $('#page2').removeClass("on");
        $('#page1').addClass("on");
    })
    /*获取第二页数据*/
    $('#page2').click(function() {
        $('.nl li').remove();
        $(".loading").css("display","block");
        $(".loading i").css("animation-play-state","running");
        axios.get('a.json')
            .then(function(res) {
                for (var i = 0; i < res.data.length; i++) {
                    $('.nl').append("<li><a href='newMain.html?ind="+res.data[i].ind+"'><img src=" + res.data[i].url + "><div class='ant'>" + res.data[i].title + "</h4><span class='date'>" + res.data[i].date + "</span><p>" + res.data[i].ant + "</p></div></a></li>");
                }
                $(".loading").css("display","none");
                $(".loading i").css("animation-play-state","paused");
            }).catch(function(res) { console.log('error', res); })
        $('#pagelist #page1').removeClass("on");
        $('#page2').addClass("on");
    })
})
