//#Not a basic promise theory
function init() {
    const executorFn = (resolve, reject) => {
        resolve(10); // PENDING TO FULLFILLED
    };
    return new Promise(executorFn);
};

const instance = init();//PROMISE
console.log(instance, 'instance');
console.log(instance.then(), 'instance.then');//PROMISE

instance.then(v => {//#Independently working
    console.log("1 .then fullfilled promise Value is", v);
    return v + 1;
});

instance.then(v => {//#Independently working
    console.log("2 .then fullfilled promise Value is", v);
});