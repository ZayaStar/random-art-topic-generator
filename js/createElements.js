import { categories } from "./categories.js";
import { galleryImagePairs } from "./galleryPaths.js";

// main function to create UI and changes.
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

    const currentlyWipText = document.createElement("p");
    currentlyWipText.id = "currently-wip";
    currentlyWipText.className = "currently-wip";
    currentlyWipText.style.fontSize = "0.75rem";
    currentlyWipText.style.marginTop = "0.5rem";
    currentlyWipText.style.position = "relative";
    currentlyWipText.textContent = "Currently in progress: Comic, Movies and Real-life categories";
    titleText.insertAdjacentElement("beforeend", currentlyWipText);
    
    const disclaimer = document.createElement("p");
    disclaimer.id = "disclaimer";
    disclaimer.style.fontStyle = "italic";
    disclaimer.style.fontSize = "0.6rem";
    disclaimer.textContent = `Disclaimer: Subjects opens a google search in new tab and style opens a tiny image in a small popup`;
    titleText.insertAdjacentElement("beforeend", disclaimer);
    
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

// configuration array for selection elements, used as drop down.
const selectionConfigs = [
    {key: "medium", className: "medium", datasetAction: "medium", label: "Medium", checkbox: true},
    {key: "mediaGenre", className: "mediaGenre", datasetAction: "mediaGenre", label: "Genre", checkbox: true},
    {key: "subject", className: "subject", datasetAction: "subject", label: "Subject", dependsOn: "mediaGenre", checkbox: true},
    {key: "style", className: "style", datasetAction: "style", label: "Style", needsParam:true, checkbox: true},
]

// takes a config object and creates a select element with options
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

// creates the generate button
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
        const styleDialog = document.querySelector('.style-dialog');
        
        if (styleDialog) {
            styleDialog.remove();
        }
        displayResult(selection);

    });
    
    return generateButton;
}

// gets the current selection values from the dropdowns
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


// formats the topic text for display
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


// gets the article for a word
function getArticle(word) {
    const firstLetter = word.toLowerCase().charAt(0)
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstLetter) ? 'an' : 'a';
}

// gets the article for a subject
function getSubjectArticle(subject) {
    const firstChar = subject.charAt(0)

    // checks for symbol prefix.
    if (firstChar === '@' ) {
        return '';
    } else if (firstChar === '#') {
        return 'the ';
    } 

    return getArticle(subject) + " ";
}

function formatArtistExample(artist) {
    const artistArray = artist.replace(/@/g, '').split(', ');
    return artistArray;
}

function getGalleryImagePath(styleName, styleCategory) {

    const cleanStyleName = styleName.replace(/^@/g, '').trim();
    let imageFile = null;

    if (styleCategory === "artist") {
        const artistImages = galleryImagePairs.artists[cleanStyleName];
        console.log("Artist images:", artistImages);
        imageFile = artistImages ? artistImages[Math.floor(Math.random() * artistImages.length)] : null;

    } 
    else if (styleCategory === "genre") {
        const genreImages = galleryImagePairs.genres[cleanStyleName];
        console.log("Genre images:", genreImages);
        imageFile = genreImages ? genreImages[Math.floor(Math.random() * genreImages.length)] : null;
    }
    
    if (imageFile) {
        const folder = styleCategory === "artist" ? "artists" : "genres";
        console.log("Image file:", imageFile);
        console.log("Folder:", folder);
        return `./storage/${folder}/${cleanStyleName}/${imageFile}`;
    }
    
    console.log("No image file found for:", cleanStyleName);
    return null;
}

function displayResult(selection) {

    console.log("Selection:", selection);
    
    const topicText = formatTopicText(selection);

    const styleImagePath = getGalleryImagePath(selection.style, selection.styleCategory);
    console.log("Style image path:", styleImagePath);
    console.log("Final selection:", topicText);

    // display result section
    const topicResultSection = document.createElement("section");
    topicResultSection.className = "topic-result-section";
    
    const topicElement = document.createElement("p");
    topicElement.innerHTML = topicText;
    topicElement.classList.add("topic-result-text");

    const styleTextElement = topicElement.querySelector(".styleText"); 
    if (styleTextElement && styleImagePath) {
        styleTextElement.style.cursor = 'pointer'
        
        const styleDialog = document.createElement('dialog');
        styleDialog.classList.add('style-dialog');
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.classList.add('close-btn');
        closeBtn.addEventListener('click', () => {
            styleDialog.close();
        });

        const styleImage = document.createElement('img');
        styleImage.src = styleImagePath;
        styleImage.alt = "Style image";
        styleImage.classList.add('style-image');
        
        styleDialog.insertAdjacentElement('afterbegin', styleImage);
        styleDialog.insertAdjacentElement('beforeend', closeBtn);
        document.body.appendChild(styleDialog);
        
        styleTextElement.addEventListener('click', () => {
            console.log("Style text clicked");
            styleDialog.showModal();
        });


    }

    const subjectTextElement = topicElement.querySelector(".subjectText"); 
    if (subjectTextElement) {
        subjectTextElement.style.cursor = 'pointer'
        subjectTextElement.addEventListener('click', () => {
            console.log("Subject text clicked");
            const query = subjectTextElement.textContent.trim();
            window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`, "_blank"); // searches on google for subject text
        });
    }

    // removes existing result if it exists.
    if (document.querySelector(".topic-result-section")) {
        document.querySelector(".topic-result-section").remove();
    }
    const topicContainer = document.querySelector(".topic-container");
    
    topicContainer.appendChild(topicResultSection);
    topicResultSection.appendChild(topicElement);

}