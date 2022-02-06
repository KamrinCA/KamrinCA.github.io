/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: February 5th, 2022
 * Description: app.js file. Contains multiple functions that handle DOM Manipulation
 *              and certain events.
 *
 */
"use strict";
(function()
{

    /**
     * When our Home page is displayed, finds all elements and injects
     * the corresponding text content and innerHTML into them.
     *
     */
    function DisplayHome()
    {
        // Injects the header into the h1 tag
        let welcomeHeading = document.getElementsByTagName("h1")[0];
        welcomeHeading.textContent = "Welcome";

        // Injects the subheading into the h3 tag
        let subHeading = document.getElementsByTagName("h3")[0];
        subHeading.textContent = "Welcome to our Digital Portfolio!";

        // Using innerHTML (needed <br/>), inject the welcome message string on the home page
        let welcomeMessage = document.getElementById("welcomeMessage");
        let welcomeMessageString = `This is for our WEBD6201 Lab 1, 
                                    showcasing DOM manipulation with javascript and basic content. On this webpage
                                    you find a navigation bar that can take you to a plethora of different webpages that
                                    talk about our services, projects, and even just about us!<br/><br/>
                                    Feel free to explore!`;
        welcomeMessage.innerHTML = welcomeMessageString;
    }

    /**
     * When our Projects/Products page is displayed, finds all elements and injects
     * the corresponding text content into them.
     *
     */
    function DisplayProjects()
    {
        // Injects the header into the h1 tag
        let projectsHeading = document.getElementsByTagName("h1")[0];
        projectsHeading.textContent = "Our Projects";

        // Gets all h3 tags with their respective id's
        let heading1 = document.getElementById("heading1");
        let heading2 = document.getElementById("heading2");
        let heading3 = document.getElementById("heading3");

        // Gets all p tags with their respective id's
        let project1 = document.getElementById("project1");
        let project2 = document.getElementById("project2");
        let project3 = document.getElementById("project3");

        // Injects our first project into the first section (1st h3 & p tags)
        heading1.textContent = "Multi-Purpose Application";
        project1.textContent = `It always starts somewhere and in our case, it was with Windows Forms. 
                                Using Windows Forms and C#, we collectively put our previous assignments/labs into one multi-purpose application.
                                The application contains a text editor, an average units shipped application, and a car inventory manager. The application
                                supported one instance of the car inventory manager and the average units shipped, but you could have multiple text 
                                editor instances.`;

        // Injects our second project into the second section (2nd h3 & p tags)
        heading2.textContent = "Test Automation using Selenium";
        project2.textContent = `Automated test cases for a demo bank website. Using Selenium Driver and Python, we created multiple test suites
                                targeted towards different aspects of the bank website. For example, testing input validation when adding/editing a  
                                customer to the bank or when performing various banking transactions.`;

        // Injects our third project into the third section (3rd h3 & p tags)
        heading3.textContent = "UML Diagramming (SYDE Project)";
        project3.textContent = `Throughout the Software Development Life Cycle, documentation and UML diagramming are essential. During our time
                                at Durham College, we focused heavily on creating a system proposal which included UML diagrams. We made use-case, activity, 
                                and class diagrams (like the one you see on the left). This diagram is only a part of a more comprehensive package that 
                                included a feasibility analysis, a system request, use-case descriptions, and draft database tables.`;
    }

    /**
     * When the Services Page is displayed, finds a elements and injects the
     * corresponding text to them.
     *
     */
    function DisplayServices()
    {
        // Injects the header into the h1 tag
        let projectsHeading = document.getElementsByTagName("h1")[0];
        projectsHeading.textContent = "Our Services";

        // Gets all h3 tags with their respective id's
        let heading1 = document.getElementById("heading1");
        let heading2 = document.getElementById("heading2");
        let heading3 = document.getElementById("heading3");

        // Gets all p tags with their respective id's
        let service1 = document.getElementById("service1");
        let service2 = document.getElementById("service2");
        let service3 = document.getElementById("service3");

        // Injects our first service into the first section (1st h3 & p tags)
        heading1.textContent = "Custom Programming";
        service1.textContent = `We offer custom software development to suit your specific requirements.
                                Knowledgeable with C#, .NET Framework, C++, Java, and more. Providing
                                desktop, mobile and web application development.`;

        // Injects our second service into the second section (2nd h3 & p tags)
        heading2.textContent = "Web Development";
        service2.textContent = `We offer client-centric web development services. Providing UI design and 
                                full backend development including integration services. Experienced with
                                HTML, CSS, PHP, and Java.`;

        // Injects our third service into the third section (3rd h3 & p tags)
        heading3.textContent = "Software Testing";
        service3.textContent = `We offer automated software testing. With our experience using tools 
                                like Python and Selenium we are able to provide extensive and exhaustive
                                testing for software applications.`;
    }

    /**
     * When the About Page is displayed, finds a elements and injects the
     * corresponding text to them.
     *
     */
    function DisplayAboutUs()
    {
        // Injects "About Us" in the h1 tag
        let aboutHeader = document.getElementsByTagName("h1")[0];
        aboutHeader.textContent = "About Us";

        // Finds the corresponding h3 tag for Chris and injects Chris' name
        let headerChris = document.getElementById("headingChris");
        let headerChrisString = "Chris Lapp-Benjamin";
        headerChris.textContent = headerChrisString;

        // Finds the corresponding p tag for Chris, and injects a short bio for him
        let aboutChris = document.getElementById("aboutChris");
        let aboutChrisString = `I'm a philomath focused on SQL, Python and finding the right questions to ask. 
                                I enjoy collaborating with passionate people on difficult projects. 
                                My love of analysis and abstraction permeates everything I do.
                                I live for constant improvement, chasing perfection.`;
        aboutChris.textContent = aboutChrisString;

        let resumeChris = document.getElementById("resumeChris");
        let resumeString = "Click here to view my resume";
        resumeChris.textContent = resumeString;

        // Finds the corresponding h3 tag for Kamrin and injects Kamrin's name
        let headerKamrin = document.getElementById("headingKamrin");
        let headerKamrinString = "Kamrin Aubin";
        headerKamrin.textContent = headerKamrinString;

        // Finds the corresponding p tag for Kamrin, and injects a short bio for him
        let aboutKamrin = document.getElementById("aboutKamrin");
        let aboutKamrinString = `I'm a student at Durham College enrolled in Computer Programming (CPGM). 
                                 Been programming since Grade 10 and have worked with multiple languages 
                                 including Python, Java, C++, C#, and more. Class experience has taught me 
                                 multiple programming branches such as web development and object oriented 
                                 programming to name a few. Constantly pushing myself to improve my 
                                 understanding on how to program and the theory behind it. Very determined to 
                                 complete a given task and always strive to meet the required end result.`;
        aboutKamrin.textContent = aboutKamrinString;

        let resumeKamrin = document.getElementById("resumeKamrin");
        resumeKamrin.textContent = resumeString;
    }

    /**
     * When contact page is displayed, injects the text and handles the send button event
     * Displays contact information to console and waits 3 seconds before sending user to home page.
     *
     */
    function DisplayContactUs()
    {

        // Updates the h1 tag
        let heading = document.getElementsByTagName("h1")[0];
        heading.textContent = "Contact Us";

        // Gets the send button
        let sendButton = document.getElementById("sendButton");

        // Adds the click event listener
        sendButton.addEventListener("click", function(event)
        {
            // Prevents the default submit button event/action
            event.preventDefault();

            // Obtains all the input from the contact form
            let fullName = document.getElementById("fullName").value;
            let contactNumber = document.getElementById("contactNumber").value;
            let emailAddress = document.getElementById("emailAddress").value;
            let message = document.getElementById("message").value;

            // Creates a string of the contact
            let contactString = "Full Name: " + fullName + 
                                "\nContact Number: " + contactNumber + 
                                "\nEmail Address: " + emailAddress + 
                                "\nMessage: " + message;

            // Displays contact info in the console
            console.log(contactString);

            // Waits 3 seconds (3000 ms), before redirecting user to home page
            setTimeout(function(){location.href = "index.html";}, 3000);

        });
    }

    /**
     * Is called once the window finishes loading. Contains DOM Manipulation for the products 
     * link (turning it into projects link), creating and injecting a new list item + link in the nav bar called
     * "Human Resources", injecting a fixed bottom footer/navbar into each webpage. Finally, it handles specifics
     * functions being called depending on the page the user is on.
     *
     */
    function Start()
    {
        // Updates the products link text to "projects"
        let productsNavLink = document.getElementsByClassName("nav-link")[1];
        productsNavLink.innerHTML = `<i class="fas fa-th"></i> Projects`;

        // Creates the human resources nav link
        let newNavLink = document.createElement("li");
        newNavLink.setAttribute("class", "nav-item");
        newNavLink.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-hands-helping"></i> Human Resources</a>`;

        // Targets the about link, and places new link after it
        let aboutUsNavLink = document.getElementsByClassName("nav-item")[3];
        aboutUsNavLink.after(newNavLink);

        // Injects the footer onto the html pages 
        let footer = document.createElement("footer");
        footer.innerHTML = `<nav class="navbar fixed-bottom navbar-dark bg-dark">
                                <div class="container-fluid">
                                    <p class="text-white" >&copy; Kamrin Aubin & Christofer Lapp-Benjamin - 2022</p>
                                </div>
                            </nav>`;
        document.getElementsByTagName("body")[0].append(footer);

        // Switch case, that calls specific functions depending the user is on
        switch(document.title)
        {
            // Home page
            case "Home":
                DisplayHome();
                break;

            // Projects/Products Page
            case "Products":
                DisplayProjects();
                break;

            // Services Page
            case "Services":
                DisplayServices();
                break;

            // About Us Page
            case "About Us":
                DisplayAboutUs();
                break;

            // Contact Us Page
            case "Contact Us":
                DisplayContactUs();
                break;    
        }
    }

    // Once the window is loaded, call the Start function
    window.addEventListener("load", Start);

})();