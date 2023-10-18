import { createViewModel } from './main-view-model';
import { topmost } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

exports.onAboutMeTap = args => {
  const button = args.object;
  const page = button.page;

  topmost().navigate('aboutme/aboutme-page');
};

exports.onSkillsTap = args => {
  const button = args.object;
  const page = button.page;

  topmost().navigate('skills/skills-page');
};

exports.onContactMeTap = args => {
  const button = args.object;
  const page = button.page;

  topmost().navigate('contactme/contactme-page');
};

exports.onGoBackTap = args => {
  const button = args.object;
  const page = button.page;

  topmost().goBack();
};
