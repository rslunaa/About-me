// skills-page.js
export function onNavigatingTo(args) {
  const page = args.object;
  
}


exports.onGoBackTap = () => {
  Frame.topmost().goBack();
};