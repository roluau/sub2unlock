function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "justandev_admin") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("unlockContent").style.display = "block";
    } else {
        alert("Incorrect username or password");
    }
}
