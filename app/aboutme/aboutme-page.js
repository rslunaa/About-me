const { Page } = require("@nativescript/core");

exports.onGoBackTap = args => {
  const button = args.object
  const page = button.page 
  
  Page.frame.goBack('main-page');
}
