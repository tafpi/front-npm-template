(function () {
    var testVar = 'this is a test string';
    testVar += ' and some other string added to it';
    var testText = document.getElementById('test-string');
    testText.innerHTML(testVar);
})();

dfg((a) => {
    return a;
});

setInterval(() => {
    this.age++; // |this| properly refers to the Person object
}, 1000);

console.log('blah');