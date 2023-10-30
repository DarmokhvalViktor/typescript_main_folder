import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";
import {ICar} from "../interfaces/ICar";
import css from "./CarsPage.module.css"

const CarsPage = () => {

    const [flag, setFlag] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    const trigger = ():void => {
        setFlag(prevState => !prevState);
    }

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div className={css.CarsPage}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};