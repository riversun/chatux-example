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


