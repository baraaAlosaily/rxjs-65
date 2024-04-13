const { Observable } = rxjs;
const { fromEvent,of } = rxjs;

const observer={
    next: (value)=>console.log('next',value),
    error: (error)=>console.log('error',error),
    complete: ()=>console.log('complete')
}

// const observable=new Observable(subscriber=>{
//     let count=0;
//     setInterval(()=>{
//         subscriber.next(count);
//         count+=1;
//         // if(count>3){
//         //     subscriber.complete();
//         // }
//     },1000);
// });

// const sub1=observable.subscribe(observer);
// const sub2=observable.subscribe(observer);
// sub1.add(sub2);

// console.log("before")
// setTimeout(() => {
//     sub1.unsubscribe();
// }, 10500);
// console.log("after")

// const source$=fromEvent(document,'keyup');

// const source$=of(1,2,3,4,5,6,7,8,9,10);

// source$.subscribe(observer)