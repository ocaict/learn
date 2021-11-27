var messages = new Array
(
   'Welcome to Oca Webt Technology!',
   'Learn Web Development (HTML5, CSS3 & Javascript)',
   'Build and Deploy eLearning'
);
var speed = 80;
var currentMsg = 0;
function doScroller(text, pos, direction)
{
   var text_scroller = document.getElementById('text_scroller');
   text_scroller.innerText = '' + text.substring(0, pos) + '|';

   pos += direction;
   if (pos > text.length)
   {
      setTimeout('doScroller("'+text+'",'+pos+','+(-direction)+')', speed*10);
   }
   else
   {
     if (pos < 0)
     {
        currentMsg++;
        if(currentMsg >= messages.length)
          currentMsg = 0;
        text = messages[currentMsg];
        direction = -direction;
     }
     setTimeout('doScroller("'+text+'",'+pos+','+direction+')', speed);
   }
}
doScroller(messages[0], 0, 1);