document.getElementById('number').addEventListener('click', function () {
    const userResponse = confirm("https://www.netflix.com wants to open this application.");
    if (userResponse) {
        alert("User chose to open the application.");
        // Add logic here to handle the user's acceptance, such as redirecting to the app.
    } else {
        alert("User canceled the action.");
        // Add logic here for when the user cancels the action.
    }
});

const buttons = document.querySelectorAll(".btn-red-gs");
buttons.forEach(function (button) {
    button.onclick = function () {
        alert("This operation is blocked by the authority.");
    };
});

document.querySelectorAll('.sixthsection-boxes-box-visible').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling; // Select the next sibling which is .faq-content
        const icon = this.querySelector('.icon'); // Select the icon within the clicked header

        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            icon.classList.add('rotated'); // Rotate to make a cross
        } else {
            content.style.display = "none";
            icon.classList.remove('rotated'); // Reset to the plus
        }
    });
});