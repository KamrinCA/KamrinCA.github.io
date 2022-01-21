// IIFE -- Immediately Invoked Function Expression
// AKA anonymous self-executing function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");

        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });
    }

    // Step 1 - Get a reference to an entry point(s) (insertion/deletion point)
    let MainContent = document.getElementsByTagName("main")[0];
    let DocumentBody = document.body;

    // Step 2 - Create a HTML Element in memory
    let MainParagraph = document.createElement("p");
    let Article = document.createElement("article");
    let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

    // Step 3 - Configure new Element
    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph`;
    MainParagraph.textContent = SecondString;
    Article.setAttribute("class", "container");


    // Step 4 - perform insertion / deletion

    // Example of insert after (append)
    MainContent.appendChild(MainParagraph);
    Article.innerHTML = ArticleParagraph;
    DocumentBody.appendChild(Article);


    // Example of insert before
    // MainContent.before(MainParagraph);

    // Example of deletion - Object chaining
    // document.getElementById("AboutUsButton").remove();
    // AboutUsButton.remove();

    // ES6 and HTML5 => Template Strings => "Super Strings"

    function DisplayProjectsPage()
    {
        console.log("Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }

    // Named function option
    function Start() 
    {
        console.log("App Started!!");

        switch(document.title)
        {
            // Finite State Machine
            case "Home":
                DisplayHomePage();
                break;

            case "Our Projects":
                DisplayProjectsPage();
                break;

            case "Our Services":
                DisplayServicesPage();
                break;

            case "About Us":
                DisplayAboutPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;
        }

    }

    // Variable point to anonymous function - Keeping for my own reference
    /*let Start = function()
    {
        console.log("App Started!");
    } */

    window.addEventListener("load", Start);

})();