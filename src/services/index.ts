import { API } from "@/constants";
import { ITrainsRoot } from "@/types/trains.interfaces";
import { SyntheticEvent } from "react";

export const getTrains = async () : Promise<ITrainsRoot[] | void> => {
    try {
        const request = await fetch(API);
        return await request.json()
    }catch(e) {
        console.log(e)
    }
}

export const submitForm = (e: SyntheticEvent, data : ITrainsRoot) => {
    e.preventDefault();
    const arr = data.characteristics.map(el => {
        return {
            speed : el.speed
        }
    })
    console.log(arr)
}