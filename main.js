//  main js code here
var btn= document.querySelector("#btn");
var textzone = document.querySelector("#area");
btn.onclick=()=>{
    myfub();
}
function coco(){
    let aud= new Audio();
    aud.src="audio/how_are_u_boss.mp3";
    return aud.play();
    // window.location.href="https://www.youtube.com";
} 
function myfub(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition =new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result',(e)=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result =>result.transcript)
    
        textzone.innerHTML= transcript;

       
        
      
    })
    
    if(speech==true){
        recognition.start();

    }
 

}





