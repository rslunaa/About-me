// contactme-page.js
export function onGoBackTap(args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('main-page');
}

export function onSubmitTap(args) {
  // For demonstration purposes, just show a success message
  alert("Submission Successful");
}
