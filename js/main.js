document.addEventListener("DOMContentLoaded", function() {
  loadHTML("header", "layouts/header.html");
  loadHTML("contents", "layouts/contents.html", function() {
    loadHTML("profile", "layouts/profile.html");
    loadHTML("job", "layouts/job.html");
    loadHTML("community", "layouts/community.html");
    loadHTML("opus", "layouts/opus.html", function() {
      loadHTML("world", "layouts/world.html", function() {
        loadScript("js/slide-world.js");
      });
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

function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}
