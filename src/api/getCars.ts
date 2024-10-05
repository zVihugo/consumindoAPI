import axios from 'axios';
import { CAR_API_BASE_URL } from '../constants/car';
import { carModel } from '../components/CardView/props';

interface ApiResponse {
    cars: carModel[];
}

export const fetchGetCarData = async(id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL)
        const carData = response.data.cars.find((car) => car.id === id) || null;

        return carData;
    }catch(error){
        console.log(error)
    }
}