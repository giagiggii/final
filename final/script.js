function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); 
});
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector("#home-btn");
    const recipesButton = document.querySelector("#recipes-btn");
    const homeSection = document.querySelector(".home");
    const recipesSection = document.querySelector(".recipes");


    homeSection.style.display = "block";
    recipesSection.style.display = "none";

 
    homeButton.addEventListener("click", () => {
        homeSection.style.display = "block";
        recipesSection.style.display = "none";
    });

   
    recipesButton.addEventListener("click", () => {
        homeSection.style.display = "none";
        recipesSection.style.display = "block";
    });
});
