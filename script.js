//check if the browser supports Web Speech Api
if('speechSynthesis' in window) {

    const speakButton = document.getElementById('speak-button');
    const textToSpeak = document.getElementById('text-to-speak');

    //Initializing SpeechSynthesisUtterance: 
    //Create a new SpeechSynthesisUtterance instance

    const utterance = new SpeechSynthesisUtterance();

    //setting the voice(optioanl)
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];

    //Event listener for the speak button

    speakButton.addEventListener("click", () => {
         //set the text property of the utterance object to the value entered in the textarea (textToSpeak.value)
        utterance.text = textToSpeak.value;
        //Call the speechSynthesis.speak() method, passing the utterance object as an argument to initiate the speech synthesis
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance)
    });

} else {
    alert('Sorry, your browser does not support the Web Speech API.');
}
