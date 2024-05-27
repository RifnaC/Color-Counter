import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        color: "green"
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        },
        changeColor: (state, action) => {
            if (state.value >= 0 && state.value <= 10) {
                state.color = 'green'
                
            }else if (state.value >= 11 && state.value <= 20) {
                state.color = 'yellow'
            } else {
                state.color = 'red'
            }
            state.value += action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, incrementByValue, changeColor, reset} = counterSlice.actions
export default counterSlice.reducer