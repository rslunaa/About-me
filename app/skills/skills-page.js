// skills-page.js
const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

export function onLoaded(args) {
    const page = args.object;
    const listView = page.getViewById("mySkillsListView");

    const itemList = new ObservableArray([
        { text: "Programming Skills", isCategory: true },
        { text: "Java" },
        { text: "Python" },
        { text: "C#" },
        { text: "Visual Basic" },
        { text: "Cybersecurity Skills", isCategory: true },
        { text: "Cybersecurity Fundamentals" },
        { text: "Network Security & Data Protection" },
        { text: "Cloud Security" },
        { text: "Collaboration and Teamwork" },
        { text: "Soft Skills", isCategory: true },
        { text: "Troubleshooting and Testing" },
        { text: "Problem Solving" },
        { text: "Critical Thinking" },
    ]);
    listView.items = itemList;
}

exports.onItemTap = function (args) {
    const listView = args.object;
    const index = args.index;
    const tappedItem = listView.items.getItem(index);

    // Check if it's a category, and do something if needed
    if (tappedItem.isCategory) {
        // Do something specific for categories
    } else {
        // Handle skill tap
    }

    // Optionally, you can navigate to a new page for a specific skill or category
    // frameModule.Frame.topmost().navigate({
    //     moduleName: "details-page",
    //     context: tappedItem,
    //     animated: true
    // });
};

export function onGoBackTap(args) {
    const button = args.object;
    const page = button.page;

    page.frame.navigate('main-page');
};
