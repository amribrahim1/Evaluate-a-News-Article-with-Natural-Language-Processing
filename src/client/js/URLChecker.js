function checkForURL(inputURL) {
    console.log("::: Running check for URL :::", inputURL);

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    return inputURL.match(regex)
}

export { checkForURL }
