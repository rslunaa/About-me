// main-page.js
import { createViewModel } from './main-view-model';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

exports.onAboutMeTap = () => {
  Frame.topmost().navigate('aboutme/aboutme-page');
};

exports.onSkillsTap = () => {
  Frame.topmost().navigate('skills/skills-page');
};

exports.onContactMeTap = () => {
  Frame.topmost().navigate('contactme/contactme-page');
};

exports.onGoBackTap = () => {
  Frame.topmost().goBack();
};
