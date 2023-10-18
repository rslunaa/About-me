// main-page.js
import { createViewModel } from './main-view-model';
import { Frame } from '@nativescript/core';

// export function onNavigatingTo(args) {
//   const page = args.object;
//   page.bindingContext = createViewModel();
// }

exports.onAboutMeTap = () => {
  Frame.topmost().navigate('aboutme-page');
};

exports.onSkillsTap = () => {
  Frame.topmost().navigate('skills-page');
};

exports.onContactMeTap = () => {
  Frame.topmost().navigate('contactme-page');
};
