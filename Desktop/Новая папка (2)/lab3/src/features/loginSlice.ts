import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: { value: LoginData[] } = {
    value: []
}

export interface LoginData{
    name:string;
    password:string
}
export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        add(state,action:PayloadAction<LoginData>){
            console.log(action.payload);
            state.value.push(action.payload);
        },
        update(state,action:PayloadAction<LoginData>){
            console.log(action.payload);
            state.value.push(action.payload);
        }
    }
})

export const {add, update} = loginSlice.actions;
export default loginSlice.reducer;