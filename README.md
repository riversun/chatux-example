# example for chatux

https://github.com/riversun/chatux


## How to run

```shell
npm install
npm start
```

## chatux server

**chatux-server.js**

```js
const express = require('express');

const app = express();

const port = 8080;

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}


// set mddielware for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

//provide json api
app.set('json spaces', 2);
app.get('/chat', function (req, res) {

    //Get "text" parameter from request
    const userInputText = req.query.text;
    //get callback parameter for jsonp response
    const callback = req.query.callback;


    //create response object
    const response = {
        output: []
    };

    const msg = response.output;

    if (!userInputText) {

        //if inputText is empty
        msg.push({
            type: "text",
            value: "Hey, please say something."
        });

    } else {

        if (userInputText == "show buttons") {

            //show text and buttons
            msg.push({
                type: "text",
                value: "Ok, I'll show you buttons!",
                delayMs: 500 // wait(milliseconds)
            });

            const opts = [];
            opts.push({label: 'label1', value: 'value1'});
            opts.push({label: 'label2', value: 'value2'});
            opts.push({label: 'label3', value: 'value3'});

            msg.push({type: "option", options: opts});

        } else if (userInputText == "show image") {

            //show text and image
            msg.push({
                type: "text",
                value: "Ok, I'll show you an image!",
                delayMs: 500
            });

            msg.push({
                type: "image",
                value: " https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
            });

        } else {
            //echo inputText
            msg.push({
                type: "text",
                value: "You say '" + userInputText + "'"
            });
        }
    }

    if (callback) {
        //generate response for JSONP
        const responseText = callback + "(" + JSON.stringify(response) + ")";

        //Set content-type to "application/javascript"
        res.set('Content-Type', 'application/javascript');
        res.send(responseText)

    } else {
        //generate response for JSON

        res.json(response);
    }


});


app.listen(port, () => {
    console.log('chat server started on port:' + port);
});


```

## chatux client

**index.js**

```js
import {ChatUx} from 'chatux';

const chatux = new ChatUx();

const opt = {
    api: {
        endpoint: 'http://localhost:8080/chat',//URL of chat server
        method: 'GET',                         //HTTP METHOD
        dataType: 'json'                       //DATA TYPE
    },
    window: {
        title: 'My chat',
        infoUrl: 'https://github.com/riversun/chatux'
    }
};

//initialize
chatux.init(opt);

const isAutoOpenWindow=true;
chatux.start(isAutoOpenWindow);



```
