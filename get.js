module.exports = function () {    
    var intervalID = window.setInterval(myCallback, 5000);
    function myCallback() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.onload = function() {
        var parent = document.getElementById("textBox"); 
        parent.innerHTML = '';
        
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
            var chatOutput = document.createElement('p');
            chatOutput.textContent = data[i];
            parent.appendChild(chatOutput).innerHTML = '[' + data[i].user + ']' + ': ' + data[i].message;
        } //end for
        console.log(data[i]);
    };
    request.send();
 };
};