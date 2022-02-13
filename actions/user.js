import React from "react";
import { ADD_USER,REMOVE_USER } from "./types";

export const addUser=(data)=>{
   return {
        type:ADD_USER,
        data:data
    }
};

export const removeUser=(data)=>{
    return{
        type:REMOVE_USER,
        data:data
    }
};