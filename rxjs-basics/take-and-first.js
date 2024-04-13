const {take, first , subscribe} = rxjs
const {of , fromEvent ,from}=rxjs;
const { map , pipe , filter , reduce ,takeWhile , distinctUntilChanged } = rxjs.operators;

// const click$= fromEvent(document,'click');

// click$.pipe(
//     map(e=>({
//         clientX:e.clientX,
//         clientY:e.clientY
//     })),
//     takeWhile(e=>e.clientY>=150)
// ).subscribe({
//     next:val=>console.log('next:',val),
//     complete:()=>console.log('complete')
// });

// take until

// const numbers$=of(1,1,1,2,3,3,3,4,5,3,3,3);

// numbers$.pipe(
//     distinctUntilChanged()
// ).subscribe({
//     next:val=>console.log('next:',val),
//     complete:()=>console.log('complete')
// });