import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {ICar} from "../../interfaces/ICar";
import css from "./Car.module.css"
import {ISetState} from "../../types/ISetState";
import {SubmitHandler} from "react-hook-form";
import {carService} from "../../services/carService";

interface IProps {
    car: ICar,
    setCarForUpdate:ISetState<ICar>,
    trigger: () => void
}

const Car: FC<IProps> = ({car, setCarForUpdate, trigger}) => {
    const {id, brand, price, year} = car;

    const navigate = useNavigate();

    const deleteCar: SubmitHandler<Number> = async (id) => {
        await carService.deleteById(id.valueOf());
        trigger();
    }

    return (
        <div className={css.Car}>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => navigate("select", {state:{car}})}>Select</button>
        </div>
    );
};

export {Car};