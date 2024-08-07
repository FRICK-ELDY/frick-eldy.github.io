document.addEventListener("DOMContentLoaded", function() {
  loadHTML("header", "layouts/header.html");
  loadHTML("contents", "layouts/contents.html", function() {
    loadHTML("profile", "layouts/profile.html");
    loadHTML("job", "layouts/job.html");
    loadHTML("community", "layouts/community.html");
    loadHTML("opus", "layouts/opus.html", function() {
      loadHTML("world", "layouts/world.html");
      loadHTML("avatar", "layouts/avatar.html");
      loadHTML("item", "layouts/item.html");
    });
  });
  loadHTML("footer", "layouts/footer.html");
});

function loadHTML(elementId, url, callback) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
        if (callback) {callback();}
      })
      .catch(error => console.error('Error loading HTML:', error));
}
