import { fetchGetCarData } from "../../api/getCars"
import { carModel } from "./props"

export const loadCarData = async(id: number, setCarData: React.Dispatch<React.SetStateAction<carModel | null>> ) => {
    const response = await fetchGetCarData(id);
    try{
        if(response) 
            setCarData(response);
    }catch(error){
        console.log(error);
    }
}

export const handlePreviousItem = async() => {

}

export const handleNextItem = async() => {

}