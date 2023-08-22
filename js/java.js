let display = document.getElementById('DisplayText').value;
let textShow = document.getElementById('textShow');

function base() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => {
            return data.json();
        })
        .then(joke => {
            console.log(joke)

            if (joke.attachments && joke.attachments.length > 0) {
                joke.attachments.forEach(attachment => {
                    if (attachment.text) {
                        textShow.value += attachment.text + '\n';
                    }
                });
            }
        })
}
