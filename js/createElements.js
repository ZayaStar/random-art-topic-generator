import { categories } from "./categories.js";

export function createElements() {
    const topicContainer = document.createElement("section");

    topicContainer.id = "topic-container";
    topicContainer.classList.add("topic-container");
    document.body.appendChild(topicContainer);

    const titleText = document.createElement("h1");
    titleText.id = "title";
    titleText.textContent = "Random Art Topic Generator";
    topicContainer.appendChild(titleText);

    const explanationText = document.createElement("p");
    explanationText.id = "explanation";
    explanationText.textContent = "This tool generates random art topics for you to get inspired by, Hope you enjoy.";
    titleText.insertAdjacentElement("beforeend", explanationText);
    
    const generateButton = generationButton();
    topicContainer.appendChild(generateButton);

    const choiceContainer = document.createElement("section");
    choiceContainer.className = "choice-container";
    topicContainer.appendChild(choiceContainer);
        
    selectionConfigs.forEach(config => {
        const choiceSection = document.createElement("section");
        choiceSection.className = "choice-section";

        const [select, label] = createSelections(config);
        
        choiceContainer.appendChild(choiceSection);
        choiceSection.appendChild(label);
        choiceSection.appendChild(select);
    });

    const mediaElement = document.getElementById("mediaGenre");
    const subjectElement = document.getElementById("subject");

    mediaElement.addEventListener("change", () => {
        const selectedMedia = mediaElement.value.toLowerCase()
        const options = Object.keys(categories.subject[selectedMedia])

        subjectElement.innerHTML = "";

        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            subjectElement.appendChild(optionElement);
        })
        console.log("Media genre changed to", selectedMedia);
    });

    subjectElement.addEventListener("change", () => {
        console.log("Subject changed to", subjectElement.value);
    });

}

const selectionConfigs = [
    {key: "medium", className: "medium", datasetAction: "medium", label: "Medium", checkbox: true},
    {key: "mediaGenre", className: "mediaGenre", datasetAction: "mediaGenre", label: "Genre", checkbox: true},
    {key: "subject", className: "subject", datasetAction: "subject", label: "Subject", dependsOn: "mediaGenre", checkbox: true},
    {key: "style", className: "style", datasetAction: "style", label: "Style", needsParam:true, checkbox: true},
]

function createSelections(config) {
    const element = document.createElement("select");
    element.id = config.key;
    element.className = config.className;
    element.dataset.action = config.datasetAction;

    let options;

    if (config.dependsOn) {
        
        const dependentElement = document.getElementById(config.dependsOn);
        if (dependentElement) {
            const dependentValue = dependentElement.value;
            options = Object.keys(categories.subject[dependentValue.toLowerCase().replace(/\s+/g, '_')]);
        } else {
            options = [];
        }
    } else if (config.needsParam) {
        options = Object.keys(categories[config.key]);
    } else {
        options = categories[config.key];
    }


    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        optionElement.dataset.action = option;
        element.appendChild(optionElement);
    });
    
    const label = document.createElement("label");
    label.htmlFor = config.key;
    label.textContent = config.label;
    label.dataset.action = config.datasetAction + "-label";

    return [element, label];
}

function generationButton() {
    const generateButton = document.createElement("button");
    generateButton.title = "Generate random topic from subject and style fields.";
    generateButton.id = "generate";
    generateButton.className = "generate-button";
    generateButton.textContent = "Generate";
    generateButton.dataset.action = "generate";

    generateButton.addEventListener("click", () => {
        console.log("Generate button clicked");
        const selection = getCurrentSelectionValues();

        displayResult(selection);
    });
    
    return generateButton;
}

function displayResult(selection) {

    console.log("Selection:", selection);
    
    const topicText = formatTopicText(selection);


    console.log("Final selection:", topicText);

    // display result section
    const topicResultSection = document.createElement("section");
    topicResultSection.className = "topic-result-section";
    
    const topicElement = document.createElement("p");
    topicElement.innerHTML = topicText;
    topicElement.classList.add("topic-result-text");
    
    // removes existing result if it exists.
    if (document.querySelector(".topic-result-section")) {
        document.querySelector(".topic-result-section").remove();
    }
    const topicContainer = document.querySelector(".topic-container");
    topicContainer.appendChild(topicResultSection);
    topicResultSection.appendChild(topicElement);
}

function getCurrentSelectionValues() {
    const style = document.getElementById("style").value;
    const subject = document.getElementById("subject").value;
    const medium = document.getElementById("medium").value;
    const media = document.getElementById("mediaGenre").value;

    // nested selection
    let randomSubjectItem = "";
    
    if (subject &&media && categories.subject[media.toLowerCase()]) {
        const subjectCategory = categories.subject[media.toLowerCase()];
        const subjectOptions = subjectCategory[subject];
        randomSubjectItem = subjectOptions[Math.floor(Math.random() * subjectOptions.length)];
    }

    let randomStyleItem = "";
    if (style && categories.style[style.toLowerCase()]) {
        const styleArray = categories.style[style.toLowerCase()];
        randomStyleItem = styleArray[Math.floor(Math.random() * styleArray.length)];
    }

    return { 
        medium,
        media,
        subject: randomSubjectItem,
        subjectCategory: subject,
        style: randomStyleItem,
        styleCategory: style
    };
}

function formatTopicText(selection) {
    const {medium, subject, style, styleCategory, subjectCategory} = selection

    const cleanSubject = subject.replace(/^[@#]/, '');
    const cleanStyle = style.replace(/^[@#]/, '');

    const subjectArticle = getSubjectArticle(subject, subjectCategory);
    const mediumArticle  = getArticle(medium);

    if (styleCategory === "artist") {
    return `Make ${mediumArticle} <span class="mediumText">${medium}</span> of <br>${subjectArticle}<span class="subjectText">${cleanSubject}</span> <br>in the style of <br><span class="styleText">${cleanStyle}</span>`; // artist
    } else if (styleCategory === "genre") {
    return `Make ${mediumArticle} <span class="mediumText">${medium}</span> of <br>${subjectArticle}<span class="subjectText">${cleanSubject}</span> in a <br><span class="styleText">${cleanStyle}</span> style`; // genre
    } else {
        return `Make ${mediumArticle} <span class="mediumText">${medium}</span> of <br>${subjectArticle}<span class="subjectText">${cleanSubject}</span> <br> in <span class="styleText">${cleanStyle}</span>`; // your style choice
    }
}

function getArticle(word) {
    const firstLetter = word.toLowerCase().charAt(0)
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstLetter) ? 'an' : 'a';
}

function getSubjectArticle(subject, category) {
    const firstChar = subject.charAt(0)

    // checks for symbol prefix.
    if (firstChar === '@' ) {
        return '';
    } else if (firstChar === '#') {
        return 'the ';
    } 

    return getArticle(subject) + " ";
}
