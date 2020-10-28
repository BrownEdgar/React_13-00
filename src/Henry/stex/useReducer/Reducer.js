export default function reducer(state,action){
    switch (action.type){
       case 'increment':
         return {count:state.count + 1};
        case 'decrement':
          return {count:state.count - 1};
        case 'add':
           return {count:state.count + action.number};
        case 'reset':
           return{count:0}
        default:
            throw new Error("krikin porci")
    }
}