function addUser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localstorage.setItem("player1_name", player1_name);
    localstorage.setItem("player2_name", player2_name);
    
    window.location.replace("game_page.html");
}