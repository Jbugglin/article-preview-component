function shareFunction() {
    let showSocialLinks = document.getElementById("share-button-container");
    let articleCredit = document.getElementsById("article-credit");
    if (showSocialLinks.style.display === "none") {
        // Unhide the social media links
        showSocialLinks.style.display = "block";
        // Hide the article-credit class
        articleCredit.style.display = "none"

    } else {
        // Hide the social media links
        showSocialLinks.style.display = "none";
        // Show the article credit class
        articleCredit.style.display = "block"
    }
}