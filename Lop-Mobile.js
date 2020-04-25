class Mobile {
    constructor(name) {
        this.name = name;
        this.mess = "";
        this.inbox = [];
        this.outbox = [];
    }
    writeMess (value) {
        this.mess = value;
    }
    receiveMess(value) {
        this.inbox.push(value);
    }
    sendMess(mobile) {
        this.outbox.push(this.mess);
        mobile.receiveMess(this.mess);
    }
}
let samsung = new Mobile("S10");
let iphone = new Mobile("ProMax");


function sendMess(mobile1,mobile2) {
    mobile1.sendMess(mobile2);
    document.getElementById("inbox").innerHTML = iphone.inbox;
    document.getElementById("outbox").innerHTML = samsung.outbox;
    document.getElementById("inboxIphone").innerHTML = iphone.inbox;
    document.getElementById("msg").value = "";
}

