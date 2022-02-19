"use strict";
(function()
{
    // check if user is logged in
    if(!sessionStorage.getItem("user")) {

        $("#contact-listArea").hide()
    }

})();