document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("panel-all");
    const sidePanel = document.getElementById("side-panel");
    const closeButton = document.getElementById("close-button");
    const signin=document.getElementById("panel-signin");
    const topPanel=document.getElementById("top-panel");
    const SigninPage=document.getElementById("signinButton");
    
    // Function to toggle the side panel
    function toggleSidePanel() {
        if (sidePanel.style.left === "0px") {
            sidePanel.style.left = "-390px"; // Hide the side panel
        } else {
            sidePanel.style.left = "0px"; // Show the side panel
        }
    }

    function toggleTopPanel()
    {
        if(topPanel.style.top=="60px")
        {
            topPanel.style.top="-460px";
        }
        else{
            topPanel.style.top="60px";
        }
    }

    function openSigninPage() {
        window.location.href = 'signin.html';
    }
    // Add a click event listener to the menu icon
    menuIcon.addEventListener("click", toggleSidePanel);
    closeButton.addEventListener("click", toggleSidePanel);
    signin.addEventListener("click",toggleTopPanel);
    SigninPage.addEventListener("click",openSigninPage);
});