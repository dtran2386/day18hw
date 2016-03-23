window.addEventListener('load', function () {
    
    // Get from server:
    var intervalID = window.setInterval(myCallback, 5000);
    function myCallback() {
    var request = new XMLHttpRequest();
    // establish where we want to get information from.
    request.open('GET', 'http://chat.queencityiron.com/messages');
    // establish what we want to do when we get it.
    request.onload = function() {
       // console.log(request.responseText);
        // do something with it.
        var parent = document.getElementById("textBox"); //the below code doesn't work in this spot --> needs to be at the appendChild line. ".innerHTML = data[i].user + ': ' + data[i].message;"
        parent.innerHTML = ''; // to stop duplicating the old messages.
        
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
            var chatOutput = document.createElement('p');
            chatOutput.textContent = data[i];
            parent.appendChild(chatOutput).innerHTML = '[' + data[i].user + ']' + ': ' + data[i].message;
        } //end for
        console.log(data[i]);// this has a value now!
    };
    // actually make the request.
    request.send();
 }; //end myCallback

    var gtButton2 = document.getElementById('refresh');
    gtButton2.addEventListener('click', function() {
    
    // create a new object. type = XMLHttpRequest
    var request = new XMLHttpRequest();
    // establish where we want to get information from.
    request.open('GET', 'http://chat.queencityiron.com/messages', true);
    // establish what we want to do when we get it.
    request.onload = function() {
       
       // console.log(request.responseText);
        // do something with it.
        var parent = document.getElementById("textBox");
            parent.innerHTML = ''; // this is to stop duplicating the old messages.
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
            var chatParent = document.createElement('p');
            chatParent.textContent = '[' + data[i].user + ']' + ': ' + data[i].message; // another way to write above code
           
            parent.appendChild(chatParent);
        } // end for
        console.log(data[i]);// this has a value now!
    };
    // actually make the request.
    request.send();
  });
        
    
    // Post to server:
    var gtButton = document.getElementById('send');
    gtButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();
// Establish where we want to get information from. This is a POST request.
request.open('POST', 'http://chat.queencityiron.com/messages');
// We don't need to have an `onload` function because the response isn't important to us in this case.
// Actually make the request. With a POST request, you often need to specify what information you want the server to do
// something with. In this case, you need to specify a `name` and a `message`.
// JSON.stringify is the opposite of JSON.parse.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

request.send(JSON.stringify({
    name: document.getElementById('user').value,
    message: document.getElementById('message').value,
}));
     });
        
    ///////// ////////// /////////// ////////// ////////
    
//    var gtButton = document.getElementById('send');
//    gtButton.addEventListener('click', function() {
//        
//        var source1 = document.getElementById('user');
//        var output1 = document.createElement('li');
//        output1.textContent = source1.value;
//            var parent = document.getElementById('textBox');
//            parent.appendChild(output1);
//        
//        var source2 = document.getElementById('message');
//        var output2 = document.createElement('li');
//        output2.textContent = source2.value;
//            var parent = document.getElementById('textBox');
//            parent.appendChild(output2);
//
//    });
});