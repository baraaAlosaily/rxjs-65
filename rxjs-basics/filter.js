const {of , fromEvent ,from}=rxjs;
const { map , pipe , filter , reduce} = rxjs.operators;

// const event$ = fromEvent(document, 'keyup').pipe(map(x=>x.code))

// const eventFilter$ = event$.pipe(filter(x=>x==='Enter'));

// event$.subscribe(console.log);
// eventFilter$.subscribe(console.log)

// const scroll$=fromEvent(document,'scroll');

// const progress$=scroll$.pipe(
//     map(event=>{
//         const {scrollTop,scrollHeight,clientHeight}=event.target.documentElement;
//         return (scrollTop/(scrollHeight-clientHeight))*100;
//     })
// );

// const progressBar=document.querySelector('.progress-bar');

// progress$.subscribe(
//     percent=>progressBar.style.width=`${percent}%`
// );

const total=(acc,val)=>{
    return acc+val;
};

const arr=[1,2,3,4,5];

const totalReducer=from(arr).pipe(reduce(total,0));

totalReducer.subscribe(console.log);






