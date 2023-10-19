export function onGoBackTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('main-page');
};