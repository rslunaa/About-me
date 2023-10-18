import { createViewModel } from './main-view-model';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

exports.onAboutMeTap = args => {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('aboutme/aboutme-page');
};

exports.onSkillsTap = args => {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('skills/skills-page');
};

exports.onContactMeTap = args => {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('contactme/contactme-page');
};

exports.onGoBackTap = args => {
  const button = args.object;
  const page = button.page;

  page.frame.goBack();
};
