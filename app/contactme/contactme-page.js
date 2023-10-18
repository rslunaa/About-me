const { Frame } = require('@nativescript/core');

exports.onGoBackTap = args => {
  const button = args.object;
  const page = button.page;

  Frame.topmost().goBack();
};
