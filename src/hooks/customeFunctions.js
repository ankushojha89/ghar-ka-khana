import React, { useEffect } from "react";

export const useTitle = (title)=>{

    useEffect(()=>{
        const prvTitle = document.title;

        document.title = title;

        return ()=>{
            document.title = prvTitle;
        }

    },[])

}