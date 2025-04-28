function init() {
    const executorFn = (resolve, reject) => {
        resolve(10);
    }
    return new Promise(executorFn);
};

const instance = init();

instance.then(v => {
    console.log("Value is: ", v);
});
