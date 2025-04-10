const sites = [
    { title: "Random Useful Facts", description: "Discover a collection of intriguing and practical facts that might surprise you and prove handy in everyday conversations.", folder: "site1" },
    { title: "Excuse Generator", description: "Need a quick way out of a tricky situation? Generate creative, amusing, or even convincing excuses for any scenario.", folder: "site2" },
    { title: "Advanced Name Generator", description: "Whether you're creating a character, brand, or project, this tool generates unique and memorable names tailored to your needs.", folder: "site3" },
    { title: "Your Destiny", description: "Unravel the mysteries of your future! This website provides cryptic yet intriguing insights into what fate may hold for you.", folder: "site4" },
    { title: "Philosophy Questions", description: "Challenge your mind with deep and thought-provoking philosophical questions that spark debates and expand perspectives.", folder: "site5" },
    { title: "Which Vegetable Are You?", description: "Take this serious quiz to discover which vegetable best represents your personality based on your answers.", folder: "site6" },
    { title: "Helpful Hint Generator", description: "Receive practical, witty, and unexpected hints for everyday life situations, ranging from productivity tips to clever life hacks.", folder: "site7" },
    { title: "Forget-Me-Not AI", description: "An AI that helps you remember forgotten things.", folder: "site8" },
    { title: "Click Me!", description: "A mysterious button. What happens when you click it? Only one way to find out!", folder: "site9" },
    { title: "Rock", description: "rock", folder: "site10" },
    { title: "Website", description: "A website about websites. Possibly the most self-aware web page you'll ever visit.", folder: "site11" },
    { title: "Voting", description: "Cast your vote on the most serious and important topics. Democracy at its greatest!", folder: "site12" },
    { title: "Award Winner", description: "An exclusive website dedicated to winners. What award did you win? Click to find out!", folder: "site13" },
    { title: "Potato World", description: "A world dedicated entirely to potatoes. Learn everything you never knew you needed to know about this humble vegetable.", folder: "site14" },
    { title: "Scroll to the Bottom", description: "Scroll down to the very bottom of the page and discover what awaits you there. Will you be surprised?", folder: "site15" },
    { title: "Questions", description: "Get different questions and answer them, from the most trivial to the most profound. Become smarter with every question!", folder: "site16" },
    { title: "Nothing", description: "There is nothing to see", folder: "site17" },
    { title: "A Colorful Website", description: "Experience a vibrant explosion of colors that will dazzle your eyes and brighten your day.", folder: "site18" },
    { title: "Diagram", description: "Explore diagram to visualize your ideas clearly.", folder: "site19" },
    { title: "Tetris", description: "Play the classic game of Tetris and challenge your puzzle-solving skills.", folder: "site20" },
    { title: "?", description: "?", folder: "site21" },
    { title: "WakePedia", description: "", folder: "site23" }
];

let currentPage = 1;
const resultsPerPage = 15;

function performSearch() {
    let query = document.getElementById("searchBox").value.toLowerCase().trim();
    let words = countWords(query);
    
    if (!query) {
        console.log("Empty query, search aborted.");
        return;
    }

    let filteredResults = sites.filter(site => 
        site.title.toLowerCase().includes(query) || 
        site.description.toLowerCase().includes(query)
    );

    displayResults(filteredResults, currentPage, words === 1, query);
}

function displayResults(results, page, wiki, query) {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const resultsContainer = document.getElementById("results");
    const paginationContainer = document.getElementById("pagination");

    resultsContainer.innerHTML = "";
    paginationContainer.innerHTML = "";

    if (wiki) {
        let wakePediaLinkDiv = document.createElement("div");
        wakePediaLinkDiv.classList.add("result");

        let wakePediaLinkContainer = document.createElement("div");
        wakePediaLinkContainer.classList.add("title-container");

        let wakePediaLink = document.createElement("a");
        wakePediaLink.href = `site23/index.html?item=${query}`;
        wakePediaLink.target = "_blank";
        wakePediaLink.innerText = `Search WakePedia for "${query}"`;

        wakePediaLinkContainer.appendChild(wakePediaLink);
        wakePediaLinkDiv.appendChild(wakePediaLinkContainer);
        resultsContainer.appendChild(wakePediaLinkDiv);
        resultsContainer.appendChild(document.createElement("br"));
    }

    if (results.length === 0) {
        resultsContainer.innerHTML += "<p>No results found.</p>";
    } else {
        results.slice(startIndex, endIndex).forEach(site => {
            let resultDiv = document.createElement("div");
            resultDiv.classList.add("result");

            let titleContainer = document.createElement("div");
            titleContainer.classList.add("title-container");

            let icon = document.createElement("img");
            icon.src = `${site.folder}/icon.png`;
            icon.alt = site.title;
            icon.classList.add("site-icon");

            icon.onerror = function () {
                this.onerror = null;
                this.src = "placeholder_icon.png";
            };

            let link = document.createElement("a");
            link.href = `${site.folder}/index.html`;
            link.innerText = site.title;
            link.target = "_blank";

            let description = document.createElement("p");
            description.innerText = site.description;

            titleContainer.appendChild(icon);
            titleContainer.appendChild(link);
            resultDiv.appendChild(titleContainer);
            resultDiv.appendChild(description);

            resultsContainer.appendChild(resultDiv);
        });
    }

    let totalPages = Math.ceil(results.length / resultsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement("span");
        button.classList.add("page-button");
        if (i === page) button.classList.add("active");
        button.innerText = i;
        button.onclick = function () {
            currentPage = i;
            displayResults(results, i, wiki, query);
        };
        paginationContainer.appendChild(button);
    }
}

function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.length;
}

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    currentPage = 1;
    performSearch();
});
