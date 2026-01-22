// 5. Trace the execution of this class logic. 
class Counter {
    static count = 0;
    count = 10;
    constructor() {
        Counter.count++;
    }
    getCount() {
        return this.count;
    }
    static getStaticCount() {
        return this.count;
    }
}
const c1 = new Counter();       //increase the count value by 1 so it becomes 1
const c2 = new Counter();       //increase the count value by 1 so it becomes 2
console.log(c1.getCount());
// ?                            // value will be 10
console.log(Counter.getStaticCount()); // ? value will be 2
console.log(c1.getStaticCount());  // ? typeError