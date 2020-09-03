function sendMail() {
    var link = "mailto:bamakantkar@gmail.com"
             + "&subject=" + escape("Regarding Your Portfolio")
             + "&body=" + escape(document.getElementById('name').value)
    ;

    window.location.href = link;
}