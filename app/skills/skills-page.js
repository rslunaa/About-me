export function onGoBackTap (args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('main-page');
};

// skills-page.js
const observableModule = require("tns-core-modules/data/observable");

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = observableModule.fromObject({
        skills: [
            { category: "Programming Skills", skill: "JAVA" },
            { category: "Programming Skills", skill: "PYTHON" },
            { category: "Programming Skills", skill: "C#" },
            { category: "Programming Skills", skill: "Visual Basic" },
            { category: "Cybersecurity Skills", skill: "Cybersecurity Fundamentals" },
            { category: "Cybersecurity Skills", skill: "Network Security & Data Protection" },
            { category: "Cybersecurity Skills", skill: "Cloud Security" },
            { category: "Soft Skills", skill: "Collaboration and Teamwork" },
            { category: "Soft Skills", skill: "Troubleshooting and Testing" },
            { category: "Soft Skills", skill: "Problem Solving" },
            { category: "Soft Skills", skill: "Critical Thinking" },
        ],
    });
    page.bindingContext = viewModel;
}

exports.onNavigatingTo = onNavigatingTo;
