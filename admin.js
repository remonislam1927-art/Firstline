firebase.auth().onAuthStateChanged(user => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // prevents back-button access after logout
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.go(1);
  };

});
function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}
