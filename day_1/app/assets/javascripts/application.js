// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Few Notes to learn
//  window.setTimeout(function()
//  $object.stop().animate()

$(document).ready(function(){
var margin =$("#image1").width()/2;
var width=$("#image1").width();
var height=$("#image1").height();
 
$("#image2").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});
$("#reflection2").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px'});
 
    $("#image1").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:500});
        window.setTimeout(function() {
        $("#image2").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
        },500);
    });
 
    $("#image2").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:500});
        window.setTimeout(function() {
        $("#image1").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:500});
        },500);
    });
 
});
