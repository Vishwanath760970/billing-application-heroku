const billsInitialState=[];

const billsReducer=(state=billsInitialState,action)=>{
    // console.log(action.payload,'user info from reducer');
    switch(action.type){
        case 'BILL_LIST':
            return [...action.payload]
        case 'GENERATE_BILL':
            return [...state,action.payload]
        case 'DELETE_BILL':{
            return state.filter((ele)=>{
                if( ele._id!==action.payload._id){
                    return {...ele}
                }
            })
        }
            
        default:
            return [...state]
    }

}

export default billsReducer