function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}

jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */

    if (findBootstrapEnvironment() == 'xs' || findBootstrapEnvironment() == 'sm') {
        $.backstretch([
            "img/2.jpeg"
         ], {duration: 3000, fade: 750});
    } else {
        $.backstretch([
            "img/1.jpg",
            "img/2.jpeg",
            "img/3.jpg",
            "img/4.jpeg"
         ], {duration: 3000, fade: 750});
    }
    
});