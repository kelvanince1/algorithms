// ES5
function Alert(title) {
    this.title = title || "alert";
}

Alert.prototype.show = function() {
    console.log(this.title);
}

const alert = new Alert("My alert");


// ES6
class Alert {
    constructor(title) {
        this.title = title || "alert";
    }

    show() {
        console.log(this.title);
    }
}

const alert = new Alert("My alert");