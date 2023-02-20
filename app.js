const start = document.getElementById('start')
const stop = document.getElementById('stop')
const statusIndicator = document.getElementById('status')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


// If browser is supported, start app
if ("webkitSpeechRecognition" in window) {

  // initialize controller
  let speechRecognition = new SpeechRecognition();
  speechRecognition.continuous = true // continue listening until user presses stop
  speechRecognition.interimResults = true //return both final & interim results
  speechRecognition.lang = 'en-US' // set to english

  // Status Indicator
  start.addEventListener('click', () => {
    statusIndicator.textContent = "listening..."
  })
  stop.addEventListener('click', () => {
    statusIndicator.textContent = null
  })

    // final transcript string
    let final_transcript = ''

  //onResult event
  speechRecognition.onresult = (event) => {
    // Create the interim transcript string locally because we don't want it to persist like final transcript
    let interim_transcript = "";

    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    // Set the Final transcript and Interim transcript.
    document.querySelector("#final").innerHTML = final_transcript;
    document.querySelector("#interim").innerHTML = interim_transcript;
  };

  start.addEventListener('click', () => {
    speechRecognition.start()
  })
  stop.addEventListener('click', () => {
    speechRecognition.stop()
  })
  
// if browser is not supported, notify
} else {
  console.log("Speech Recognition Not Available")
}