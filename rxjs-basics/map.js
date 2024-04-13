const {of , fromEvent}=rxjs;
const { map , pipe , pluck, mapTo} = rxjs.operators;

// const map$=of(1,2,3,4,5).pipe(map(x=>x*10));
// map$.subscribe(console.log);

// const event$ = fromEvent(document, 'keyup').pipe(map(x=>x.code));

// const eventPluck$ = fromEvent(document, 'keyup').pipe(pluck('code'));

// const eventMapTo = fromEvent(document, 'keyup').pipe(mapTo('Tecla presionada'));

// event$.subscribe(console.log);

// eventPluck$.subscribe(console.log);

// eventMapTo.subscribe(console.log);