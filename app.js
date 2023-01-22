const start = document.getElementById('start')
const stop = document.getElementById('stop')
const output = document.getElementById('output')

// If browser is supported, start app
if ("webkitSpeechRecognition" in window) {

  // initialize controller
  let speechRecognition = new webkitSpeechRecognition()
  speechRecognition.continuous = true // continue listening until user presses stop
  speechRecognition.interimResults = true //return both final & interim results
  speechRecognition.lang = 'en-US' // set to english
  recognition.maxAlternatives = 1 // do not consider alternatives

  
// if browser is not supported, notify
} else {
  console.log("Speech Recognition Not Available")
}