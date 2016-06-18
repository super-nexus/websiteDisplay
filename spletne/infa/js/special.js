/**
 * Created by Andrija on 2/19/16.
 */
$(function(){
   $(".special").hover(function(){
       $(this).children().show();
   },
       function(){
           $(".sp").hide();
       }
   );


});