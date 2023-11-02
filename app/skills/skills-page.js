// skills-page.js
const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

export function onLoaded (args) {
    const page = args.object;
    const listView = page.getViewById("mySkillsListView");

        const itemList = new ObservableArray([

            { category: "Programming Skills", skill: "Java" },
            { category: "Programming Skills", skill: "Python" },
            { category: "Programming Skills", skill: "C#" },
            { category: "Programming Skills", skill: "Visual Basic" },
            { category: "Cybersecurity Skills", skill: "Cybersecurity Fundamentals" },
            { category: "Cybersecurity Skills", skill: "Network Security & Data Protection" },
            { category: "Cybersecurity Skills", skill: "Cloud Security" },
            { category: "Soft Skills", skill: "Collaboration and Teamwork" },
            { category: "Soft Skills", skill: "Troubleshooting and Testing" },
            { category: "Soft Skills", skill: "Problem Solving" },
            { category: "Soft Skills", skill: "Critical Thinking" },
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