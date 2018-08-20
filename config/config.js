const fs = require('fs');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
enquirer.register('confirm', require('prompt-confirm'));

const questions = [
  {
    type: 'confirm',
    name: 'appOne',
    message: 'Enable App One UI?'
  },
  {
    type: 'confirm',
    name: 'appTwo',
    message: 'Enable App Two UI?'
  }
];

enquirer.ask(questions).then(function(answers) {
  var data = JSON.stringify(answers);
  fs.writeFile('src/assets/enabled.json', data, 'utf8', callback => {
    if (callback) {
      console.log('Possible error? \n');
      console.log(callback);
    }
    console.log('FINISHED.');
  });
});
