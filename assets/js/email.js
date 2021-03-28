console.log("hello you")

function sendMail(contactForm) {
    emailjs.send("gmail", "remember", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Thoughts": contactForm.Remember.value
    })
    .then(
        function(response) {
        console.log("SUCCESS", response);
        $('#mail-ok').addClass('visible')
    },
    function(error) {
        console.log("FAILED", error);
        $('#mail-nok').addClass('visible')

        }
    );
    return false;
}