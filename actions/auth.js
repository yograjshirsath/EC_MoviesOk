import React from "react";
import { AUTH_USER,LOGOUT_USER } from "./types";

export const authUser=(data)=>{
   return {
        type:AUTH_USER,
        data:data
    }
};

export const logoutUser=(data)=>{
    return{
        type:LOGOUT_USER,
        data:data
    }
};