/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: February 27th, 2022
 * Description: app.js file. Contains multiple functions that handle DOM Manipulation
 *              through the use of JQuery and Javascript. This is required for Lab 2
 *              and the app.js is based off of ICE 6's.
 *
 */
"use strict";
(function()
{
    /**
     * This function uses AJAX to open a connection to the url and returns data to the callback function
     *
     * @param {string} method
     * @param {string} url
     * @param {Function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        // Step 1 - create a new XHR object
        let XHR = new XMLHttpRequest();

        // Step 2 = create an event
        XHR.addEventListener("readystatechange", () =>
        {
            if (XHR.readyState === 4 && XHR.status === 200)
            {
                callback(XHR.responseText);
            }
        });

        // Step 3 - open a request
        XHR.open(method, url);

        // Step 4 - send the request
        XHR.send();
    }

    /**
     * This fucntion loads the Navbar from the header HTML file and injects it into the page
     *
     * @param {string} data
     */
    function LoadHeader(data)
    {
        $("header").html(data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }

    /**
     * Handles the functionality for the home page
     */
    function DisplayHome()
    {
        console.log("Home Page");

        $("#AboutUsButton").on("click", () =>
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);

        $("body").append(`
        <article class="container">
            <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
            </article>`);
            
    }

    /**
     * Handles the functionality for the About page
     */
    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    /**
     * Handles the functionality for the Projects page
     */
    function DisplayProjectsPage()
    {
        console.log(" Our Projects Page");
    }

    /**
     * Handles the functionality for the Services page
     */
    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }

    /**
     * Adds a Contact Object to the local storage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

   /**
     * This method validates an input text field in the form and displays
     * an error in the message area
     *
     * @param {string} div_error_id
     * @param {string} input_field_ID
     * @param {regExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(div_error_id, input_field_ID, regular_expression, error_message)
    {
        // Obtaiins the error message area using the id
        let messageArea = $("#" + div_error_id).hide();

        // Onces the input field loses its focus...
        $("#" + input_field_ID).on("blur", function()
        {
            // Obtain the value
            let inputFieldText = $(this).val();

            // If the value does not conform to the regular expression
            if (!regular_expression.test(inputFieldText))
            {
                // Triggers a focus and select event on the input field
                $(this).trigger("focus").trigger("select");
                // Show the message area, ads an alert danger class, and prompts the user the input field is invalid
                messageArea.show().addClass("alert alert-danger").text(error_message);
            }
            // Field is valid
            else
            {
                // Hide the message area
                messageArea.removeAttr("class").hide();
            }
        });
    }

    /**
     * Uses the ValidateField to perform basic input validation for the contact form
     *
     */
    function ContactFormValidation()
    {
        ValidateField("messageArea" ,"fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/, "Please enter a valid Full Name.");
        ValidateField("messageArea", "contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number.");
        ValidateField("messageArea", "emailAddress", /^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,10}$/, "Please enter a valid Email Address.");
    }

    
    /**
     * Handles the functionality for the Contact page
     */
    function DisplayContactPage()
    {
        ContactFormValidation();

        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            if (subscribeCheckbox.checked)
            {
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });
    }
    
    /**
     * Handles the functionality for the Contact List page
     */
    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add deserialized data from the localStorage

            let keys = Object.keys(localStorage); // returns a string array of keys

            let index = 1; // counts how many keys
            
            // For every key in the keys array (collection), loop
            for (const key of keys) 
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new core.Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                // inject a repeatable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click", () => 
            {
                location.href = "edit.html#add";
                
            });

            $("button.delete").on("click", function()
            {

                if (confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                // Refresh after deleting
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function()
            {
                location.href = "edit.html#" + $(this).val();
            });

        }
    }

    /**
     * Handles the functionality for the Edit page
     */
    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) =>
                    {
                        event.preventDefault();

                        // Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);

                        // refrest the contact-list page
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () => 
                    {
                        location.href = "contact-list.html";
                    });

                }
                break;

            default:
                {
                    // Get the contact info from the local storage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when the edit button is pressed - update the contact
                    $("#editButton").on("click", (event) => {

                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href = "contact-list.html";

                    });
                    
                    $("#cancelButton").on("click", () => 
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
        }
    }

    /**
     * REQUIRED FOR LAB 2
     * Handles the functionality for the login page
     *
     */
    function DisplayLoginPage()
    {
        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function()
        {
            let success = false;

            // create an empty user object
            let newUser = new core.User();

            // uses jQuery shortcut to load the users.json file
            $.get("./Data/users.json", function(data){

                // for every user in the users.json file, loop
                for (const user of data.users)
                {
                    // check if the username and password entered matches the user data
                    if (username.value == user.Username && password.value == user.Password)
                    {
                        // get the user data from the file and assign it to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                // if username and password matches..success! -> perform login sequence
                if (success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error message
                    messageArea.removeAttr("class").hide();

                    // redirect the user to the secure area of the site - contact-list.html
                    location.href = "contact-list.html";
                }
                else 
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
            });
        });

        // Detects when the cancel button is clicked
        $("#cancelButton").on("click", function()
        {
            // clear the login form
            document.forms[0].reset();

            // return to the home page
            location.href = "index.html";
        });
    }

    /**
     * REQUIRED FOR LAB 2
     * Checks if the user is logged in and changes the site accordingly
     *
     */
    function CheckLogin()
    {
        // if user is logged in, then...
        if (sessionStorage.getItem("user"))
        {
            // Obtains the user from session storage and splits the CSV into an array
            let user = sessionStorage.getItem("user").split(",");
            // Obtains the username from the array
            let username = user[3];

            // Creates an span element, sets it's class and inner html
            let usernameDisplay = document.createElement("span");
            usernameDisplay.setAttribute("class", "navbar-text");
            usernameDisplay.innerHTML = `<i class="fas fa-user"></i> ${username}`;

            // Finds the 5th list item and places the username span element after
            $("ul").find("li")[4].after(usernameDisplay);

            // swap out the login link with logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            // If the logout button is clicked
            $("#logout").on("click", function()
            {
                // perform logout by clearing session storage
                sessionStorage.clear();

                // redirect back to login page
                location.href = "login.html";
            });

        }
    }

    /**
     * REQUIRED FOR LAB 2
     * Deals with register form's validation with the use of regular expressions.
     * Will display error messages associated with each field
     *
     */
    function RegisterFormValidation()
    {
        ValidateField("ErrorMessage", "firstName", /^([A-Z][a-z]{1,})$/, "Please enter a valid First Name");
        ValidateField("ErrorMessage", "lastName", /^([A-Z][a-z]{1,})$/, "Please enter a valid Last Name");
        ValidateField("ErrorMessage", "emailAddress", /^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,10}$/, "Please enter a valid Email Address.");
        ValidateField("ErrorMessage", "password", /^[a-zA-Z0-9!@#$%^&*._-]{6,}$/, "Your password must be at least 6 characters long.");
        ValidateField("ErrorMessage", "confirmPassword", /^[a-zA-Z0-9!@#$%^&*._-]{6,}$/, "Your confirm password must be at least 6 characters long.");
    }

    /**
     * REQUIRED FOR LAB 2
     * Handles all the functionality for the Register page
     *
     */
    function DisplayRegisterPage()
    {
        // Creates the div ErrorMessage element, places after the h1 tag
        let errorMessage = document.createElement("div");
        errorMessage.setAttribute("id", "ErrorMessage");
        $("h1").after(errorMessage);

        // Detects if any input is invalid
        RegisterFormValidation();

        // Stores the register button
        let registerButton = $("#registerButton");

        // Detects when the register button is clicked
        registerButton.on("click", function(event)
        {
            // Prevents the register button's default behaviour
            event.preventDefault();

            // Obtains all input fields text to create User
            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let emailAddress = $("#emailAddress").val();
            let displayName = (firstName + lastName).toLowerCase();
            let password = $("#password").val();
            let confPassword = $("#confirmPassword").val();
            
            // Checks if any field is empty
            if (firstName == "" || lastName == "" || emailAddress == "" || password == "" || confPassword == "")
            {
                let errorDiv = $("#ErrorMessage");
                errorDiv.show().addClass("alert alert-danger").text("All fields are required and cannot be empty.");
            }
            // Checks if the password are not the same
            else if (password != confPassword)
            {
                let errorDiv = $("#ErrorMessage");
                errorDiv.show().addClass("alert alert-danger").text("Your password and confirm password are not the same.");
            }
            // Else, all input is valid
            else
            {
                // Creates the new user and displays it using the toString method (hides password) to the console log
                let displayUser = new core.User(firstName, lastName, emailAddress, displayName, password);
                console.log(displayUser.toString());

                // Clears the form
                document.forms[0].reset();       
            }
        });
    }

    // Named function option
    function Start() 
    {
        console.log("App Started!!");

        switch(document.title)
        {
            // Finite State Machine
            case "Home":
                DisplayHome();
                break;

            case "About Us":
                DisplayAboutPage();
                break;

            case "Our Projects":
                DisplayProjectsPage();
                break;

            case "Our Services":
                DisplayServicesPage();
                break;

            case "Contact-List":
                DisplayContactListPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;

            case "Edit":
                DisplayEditPage();
                break;

            case "Login":
                DisplayLoginPage();
                break;

            case "Register":
                DisplayRegisterPage();
                break;
        }

        AjaxRequest("GET", "header.html", LoadHeader);

    }

    window.addEventListener("load", Start);

})();