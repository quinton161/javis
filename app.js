 var btn = document.querySelector('.talk')
 var content = document.querySelector('.content')


 function speak(text){
     var text_speak = new SpeechSynthesisUtterance(text);

     text_speak.rate = 1; 
     text_speak.volume = 1; 
     text_speak.pitch = 1;
    
     window.speechSynthesis.speek(text_speak);
 }

  function wishMe(){
   var day = new Date(); 
   var hour = day.getHours();
  }

  if(hour>=0 && hour<12){
    speak("Good Morning Boss...")
  }
  else if(hour>=0 && hour<17){
    speak("Good Afternoon Master...")
  }
  else{
    speak("Good Evening Sir...")
  }

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..")
    wishMe();
});
