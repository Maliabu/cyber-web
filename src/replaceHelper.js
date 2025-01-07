export function replacementHelper(email, title, str) {
    let Obj = {
        email: email,
        title: title,
    };
    str.replace(/email|title/gi, function (matched) {
        return Obj[matched];
    });
}