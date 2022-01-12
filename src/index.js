import {ChatUx} from 'chatux';

const chatux = new ChatUx();

const opt = {
    api: {
        endpoint: 'http://localhost:8081/chat',//URL of chat server
        method: 'GET',                         //HTTP METHOD
        dataType: 'json'                       //DATA TYPE
    },
    bot: {
        botPhoto: 'https://riversun.github.io/img/riversun_144.png',//URL of bot photo image
        humanPhoto: null,//URL of human photo image
        widget: {
            sendLabel: 'SEND',
            placeHolder: 'Say something'
        }
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


