import { createViewModel } from './main-view-model';
import { topmost } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function onAboutMeTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('aboutme/aboutme-page');
};

export function onSkillsTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('skills/skills-page');
};

export function onContactMeTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('contactme/contactme-page');
};

export function onGoBackTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('main-page');
};
