exports.onGoBackTap = args => {
  const button = args.object;
  const page = button.page;

  topmost().goBack();
};
