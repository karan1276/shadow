(function ( $ ) {
 
    $.fn.shadow = function( options ) {
 
        // default options.
        var settings = $.extend({
            // These are the defaults.
            color: "rgb(150,150,150)",
            length:500,
            angle:315,
        }, options );



        //converting angle to radians
        settings.angle=Math.PI.toFixed(20)*(360-settings.angle)/180;


        
        //calulating css value
        var shadow="";
        for(var i=1;i<settings.length;i++){
            shadow+=" "+i*Math.cos(settings.angle)+"px "+i*Math.sin(settings.angle)+"px 0px "+settings.color+",";
        }
        shadow+=" "+settings.length*Math.cos(settings.angle)+"px "+settings.length*Math.sin(settings.angle)+"px 0px "+settings.color;

       

        //assinging css values to target elements
        $(this).each(function(){
            $(this).css('text-shadow',shadow);    
        });



        //retirning jquery object
        return this;

    };
 
}( jQuery ));