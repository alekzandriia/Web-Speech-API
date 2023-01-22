// If browser is supported, start app
if ("webkitSpeechRecognition" in window) {


// if browser is not supported, notify
} else {
  console.log("Speech Recognition Not Available")
}