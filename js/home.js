/*jslint browser:true */
/*global ie: false */

if (ie) {
    if (ie < 9) {
        window.alert('This site was designed to work with modern browsers,' +
            ' please update your software ');
    } else {
        window.alert("This site wasn't designed for internet explorer, " +
            "please change or update your browser");
    }
}

