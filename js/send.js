module.exports = function () {
    var gtButton = document.getElementById('send');
        gtButton.addEventListener('click', function() {
        var request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.send(JSON.stringify({
        name: document.getElementById('user').value,
        message: document.getElementById('message').value,
    }));
});
};