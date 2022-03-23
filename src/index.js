const fs = require("fs");

const textToSpeech = require("./services/watson-text2speech/config");

const synthesizeParams = {
  text: '<prosody rate="+100%">Bem vindo ao curso de auditoria do Lucas!</prosody>',
  accept: 'audio/wav',
  voice: 'pt-BR_IsabelaV3Voice',
};

textToSpeech.synthesize(synthesizeParams)
  .then(response => {
    return textToSpeech.repairWavHeaderStream(response.result);
  })
  .then(buffer => {
    fs.writeFileSync('audios/hello_world.wav', buffer);
  })
  .catch(err => {
    console.log('error:', err);
  });


