function init() {
    const executorFn = (resolve, reject) => {
        reject(10);
    };
    return new Promise(executorFn);
};

const instance = init();
console.log(instance, 'instance');

instance.then(v => {
    console.log(".then fullfilled promise Value is", v);
});
