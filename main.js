// Embedded GPT entries
const gptEntries = [
    {
        "name": "Codie System ~ Code & Webpage Generation",
        "iconURL": "icons/codie.png",
        "description": "Codie is a systematic webpage & code assistant using advanced techniques to QUICKLY produce and interate on organized high quality code & webpages. The development process is logical, organized, recursive (at the user's direction) and iterative. Codie System is not a toy. It accelerates serious work. This page was developed collaboratively with Codie System.",
        "link": "https://chat.openai.com/g/g-ULdNDTnW1-codie-system",
        "popularity": 300,
        "style": {
            "backgroundColor": "rgba(205, 188, 171, 0.95)",
            "textColor": "#123456"
        }
    },
    {
        "name": "Argus Writer",
        "iconURL": "icons/argus.png",
        "description": "Argus excels at creative, professional, technical, or any other style of writing. Just tell him exactly what you want, in what style etc. He will do a professional job for you. Also, if you don't like his first attempt, tell Argus what you don't like and he will revise until you are happy. The written output from Argus is very high quality and can include emotive/expressive/humorous content if you ask for it. Argus can also produce realistic character dialogues. His speaking voice is down to earth and friendly. He might grow on you. Argus is a Greek name meaning 'all seeing'.",
        "link": "https://chat.openai.com/g/g-erPsD8Rkr-argus-writer",
        "popularity": 250,
        "style": {
            "backgroundColor": "rgba(205, 188, 171, 0.95)",
            "textColor": "#123456",
        }
    },
    {
        "name": "Alberta Family Law Information",
        "iconURL": "icons/albertafamilyinformation.png",
        "description": "A public information service for Alberta residents. Always get the opinion of an experienced Alberta family lawyer before making any decisions. This is a basic starting point for information purposes. The AI can make mistakes, and RESPONSES ARE NOT LEGAL ADVICE! Patrick G. Leamy practiced family Law in Alberta for over 20 years. He is currently a non-practicing member of the Law Society of Alberta. He retired from law to pursue artificial intelligence application development. He feels strongly that Alberta residents should have easy access to basic information about family law issues in Alberta.",
        "link": "https://chat.openai.com/g/g-01zRAPTnE-alberta-family-law-information",
        "popularity": 200,
        "style": {
            "backgroundColor": "rgba(205, 188, 171, 0.95)",
            "textColor": "#123456"
        }
    }
];

// Function to Load and Display GPT Entries
function loadGPTEntries() {
    const container = document.getElementById('gpt-list');
    container.innerHTML = '';

    gptEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'gpt-entry p-4 m-2 rounded-lg shadow flex items-center'; // Add Tailwind classes here
        entryDiv.style.backgroundColor = entry.style.backgroundColor;
        entryDiv.style.color = entry.style.textColor;
        entryDiv.style.width = '80%'; // Set width to 80%
        entryDiv.style.marginLeft = 'auto'; // Centering the entry
        entryDiv.style.marginRight = 'auto'; // Centering the entry

        entryDiv.innerHTML = `
            <img src="${entry.iconURL}" alt="${entry.name}" class="w-32 h-32 rounded-full mr-4">
            <div>
                <h3 class="text-lg font-bold">${entry.name}</h3>
                <p>${entry.description}</p>
                <a href="${entry.link}" style="color: ${entry.style.textColor}; font-weight: bold" class="hover:underline">USE THIS GPT</a>
            </div>
        `;

        container.appendChild(entryDiv);
    });
}

function showModal() {
    document.getElementById("bookmarkModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookmarkModal").style.display = "none";
}



loadGPTEntries();

