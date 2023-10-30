import React, {FC, useEffect, useState} from 'react';

import {Car} from "./Car";
import {ICar} from "../../interfaces/ICar";
import {carService} from "../../services/carService";
import css from "./Car.module.css"
import {ISetState} from "../../types/ISetState";

interface IProps {
    flag:boolean,
    setCarForUpdate:ISetState<ICar>,
    trigger: () => void
}

const Cars:FC<IProps> = ({flag, setCarForUpdate, trigger}) => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [flag])

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};