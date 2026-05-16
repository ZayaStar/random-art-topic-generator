import { categories } from "./categories.js";

export function createElements() {
    const topicContainer = document.createElement("section");

    topicContainer.id = "topic container";
    topicContainer.classList.add("topic-container");
    document.body.appendChild(topicContainer);

    const titleText = document.createElement("h1");
    titleText.id = "title";
    titleText.textContent = "Random Art Topic Generator";
    topicContainer.appendChild(titleText);
    
    const generateButton = generationButton();
    topicContainer.appendChild(generateButton);

    const choiceContainer = document.createElement("section");
    choiceContainer.className = "choice-container";
    topicContainer.appendChild(choiceContainer);
        
    selectionConfigs.forEach(config => {
        const choiceSection = document.createElement("section");
        choiceSection.className = "choice-section";
        // const [select, checkbox, label] = createSelections(config);
        const [select,  label] = createSelections(config);
        
        choiceContainer.appendChild(choiceSection);
        choiceSection.appendChild(select);
        // choiceSection.appendChild(checkbox);
        choiceSection.appendChild(label);
    });

    const mediaElement = document.getElementById("mediaGenre");
    const subjectElement = document.getElementById("subject");

    mediaElement.addEventListener("change", () => {
        const selectedMedia = mediaElement.value.toLowerCase().replace(/\s+/g, '-');
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

function createDrawType() {
    const mediumType = document.createElement("select");
    mediumType.id = "medium-type";
    mediumType.className = "medium-type";
    mediumType.dataset.action = "medium";

    // Add options
    const options = categories.medium;
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionElement.dataset.action = option;
        mediumType.appendChild(optionElement);
    });

    const mediumCheckbox = document.createElement("input");
    mediumCheckbox.type = "checkbox";
    mediumCheckbox.id = "medium-checkbox";
    mediumCheckbox.className = "medium-checkbox";
    mediumCheckbox.dataset.action = "medium-checkbox";
   
    const drawTypeLabel = document.createElement("label");
    drawTypeLabel.htmlFor = "medium-checkbox";
    drawTypeLabel.textContent = "Medium";
    drawTypeLabel.dataset.action = "medium-label";
    
    return [mediumType, mediumCheckbox, drawTypeLabel];
}

function createMediaGenre() {
    const mediaGenre = document.createElement("select");
    mediaGenre.id = "media-genre";
    mediaGenre.className = "media-genre";
    mediaGenre.dataset.action = "media_genre";

    // Add options
    const options = categories.media_genre;
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionElement.dataset.action = option;
        mediaGenre.appendChild(optionElement);
    });
   
    mediaGenre.value = categories.media_genre[0];
    console.log(mediaGenre.value);
    mediaGenre.addEventListener('change', () => {
        console.log(mediaGenre.value);
    });

    const mediaGenreCheckbox = document.createElement("input");
    mediaGenreCheckbox.type = "checkbox";
    mediaGenreCheckbox.id = "media-checkbox";
    mediaGenreCheckbox.className = "media-checkbox";
    mediaGenreCheckbox.dataset.action = "media-checkbox"
    
    const mediaGenreLabel = document.createElement("label");
    mediaGenreLabel.htmlFor = "media-checkbox";
    mediaGenreLabel.textContent = "for: Media";
    return [mediaGenre, mediaGenreCheckbox, mediaGenreLabel];
}

function createStyle() {
    const artstyle = document.createElement("select");
    artstyle.id = "artstyle";
    artstyle.className = "artstyle";
    artstyle.dataset.action = "artstyle";
    
    const artStyleData = categories.style;
    
    // Add options
    const options = Object.keys(artStyleData);
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        optionElement.dataset.action = option;
        artstyle.appendChild(optionElement);
    });
    
    const artStyleCheckbox = document.createElement("input");
    artStyleCheckbox.type = "checkbox";
    artStyleCheckbox.id = "style-checkbox";
    artStyleCheckbox.className = "style-checkbox";
    artStyleCheckbox.dataset.action = "style-checkbox";
    
    const styleLabel = document.createElement("label");
    styleLabel.htmlFor = "style-checkbox";
    styleLabel.textContent = "Style";
    styleLabel.dataset.action = "style-label";
    
    return [artstyle, artStyleCheckbox, styleLabel];
}

function createSubject(genre) {
    const subject = document.createElement("select");
    subject.id = "subject";
    subject.className = "subject";
    subject.dataset.action = "subject";
    
    const genreData = categories.subject[genre.toLowerCase().replace(/_/g, '')];
    
    // Add options
    const options = Object.keys(genreData);
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        ;
        optionElement.dataset.action = option;
        subject.appendChild(optionElement);
    });
   
    const subjectCheckbox = document.createElement("input");
    subjectCheckbox.type = "checkbox";
    subjectCheckbox.id = "subject-checkbox";
    subjectCheckbox.className = "subject-checkbox";
    subjectCheckbox.dataset.action = "subject-checkbox";
    
    const subjectLabel = document.createElement("label");
    subjectLabel.htmlFor = "subject-checkbox";
    subjectLabel.textContent = "Subject";
    subjectLabel.dataset.action = "subject-label";
    
    return [subject, subjectCheckbox, subjectLabel];
       
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
    
    // const checkbox = document.createElement("input");
    
    // if (config.checkbox === true) {
    //     checkbox.type = "checkbox";
    //     checkbox.id = config.key + "-checkbox";
    //     checkbox.className = config.key + "-checkbox";
    //     checkbox.dataset.action = config.key + "-checkbox";
        
    // }

    return [element, label];
    // return [element, checkbox, label];
}

function generationButton() {
    const generateButton = document.createElement("button");
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
    // You can create a DOM element to display this

    const topicResultSection = document.createElement("section");
    topicResultSection.className = "topic-result-section";
    
    const topicElement = document.createElement("p");
    topicElement.innerHTML = topicText;
    topicElement.classList.add("topic-result-text");
    
    // Append to a container or body
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
        const subKeys = Object.keys(subjectCategory);
        // const randomSubKey = subKeys[Math.floor(Math.random() * subKeys.length)];
        // const subjectOptions = subjectCategory[randomSubKey];
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
    return `Make ${mediumArticle} <span class="mediumText">${medium}</span> of <br>${subjectArticle}<span class="subjectText">${cleanSubject}</span> <br>in the style of <br><span class="styleText">${cleanStyle}</span>.`;
    } else {
    return `Make ${mediumArticle} <span class="mediumText">${medium}</span> of <br>${subjectArticle}<span class="subjectText">${cleanSubject}</span> in a <br><span class="styleText">${cleanStyle}</span> style.`;
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
