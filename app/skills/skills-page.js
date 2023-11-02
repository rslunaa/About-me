// skills-page.js
const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

export function onLoaded (args) {
    const page = args.object;
    const listView = page.getViewById("mySkillsListView");

        const itemList = new ObservableArray([

            { category: "Programming Skills"},
            { skill: "Java" },
            { skill: "Python" },
            { skill: "C#" },
            { skill: "Visual Basic" },
            { category: "Cybersecurity Skills" },
            { skill: "Cybersecurity Fundamentals" },
            { skill: "Network Security & Data Protection" },
            { skill: "Cloud Security" },
            { skill: "Collaboration and Teamwork" },
            { category: "Soft Skills" },
            { skill: "Troubleshooting and Testing" },
            { skill: "Problem Solving" },
            { skill: "Critical Thinking" },
        ]);
        listView.items = itemList;
}

exports.onItemTap = function(args) {
  const listView = args.object;
  const index = args.index;
  const tappedItem = listView.items.getItem(index);

  frameModule.Frame.topmost().navigate({
    moduleName: "skills-page",
    context: tappedItem,
    animated: true
  });
};

export function onGoBackTap (args) {
    const button = args.object;
    const page = button.page;
  
    page.frame.navigate('main-page');
  };