function checkUser() {
    const userId = window.localStorage.getItem("todoUserId");
    if (!userId) return window.location.replace("/login");
    else {
      renderusers();
    }
}

checkUser()