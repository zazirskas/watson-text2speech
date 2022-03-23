require("dotenv").config({ path: "src/services/watson-text2speech/ibm-credentials.env" });
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_IAM_APIKEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

module.exports = textToSpeech;
