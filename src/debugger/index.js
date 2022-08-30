console.log('=======start========');
setTimeout(function () {
    console.log('=======timeout========');
}, 0);
process.nextTick(function () {
    console.log('=======nextTick========');
});
new Promise(function (resolve, reject) {
    resolve(7777);
}).then(function () {
    console.log('=======promsie1========');
    Promise.resolve().then(function () {
        console.log('=======promsie2========');
    });
});
Promise.resolve().then(function () {
    console.log('=======promsie3========');
});
setImmediate(function () { return console.log('=======immediate========'); });
console.log('=======end========');
//# sourceMappingURL=index.js.map