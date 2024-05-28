import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        error: ""
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value < 1 ){
                state.error = "Value cannot be less than 0";
            }else{
                state.value -= 1;
            }
        },
        incrementByValue: (state, action) => {
            if (action.payload >= 10) {
                state.error = "Value cannot be greater than 10";
            } else {
                state.value = action.payload;
            }
        },
        decrementByValue: (state, action) => {
            if(state.value < 1 ){
                state.error = "Value cannot be less than 0";            
            }else{
                if(action.payload <= 10){
                    state.error = "Value cannot be greater than 10";
                }else{
                    state.value -= action.payload
                }
            }
        },
        reset: (state) => {
            state.value = 0;
            state.error = "";
        },

    }
});



export const {increment, decrement, incrementByValue, decrementByValue, reset} = counterSlice.actions
export default counterSlice.reducer