$(document).ready(function(){
    $('#sname, #sclass, #scountry').focus(function(){
        $(this).css("background-color", "pink ")
    })

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css("background-color", '');
    })

    $('#scountry').change(function(){
        $(this).css("background-color", 'blue');
    })

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css("background-color", '');
    })

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css("background-color", '');
    })
})