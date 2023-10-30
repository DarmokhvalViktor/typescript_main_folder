import React from 'react';

import {useAppLocation} from "../components/hooks/useAppLocation";
import {ICar} from "../interfaces/ICar";
import {SelectedCar} from "../components/CarsContainer/SelectedCar";

const SelectedCarPage = () => {

    const {state:{car}} = useAppLocation<{car: ICar}>();

    return (
        <div>
            {car && <SelectedCar car={car}/>}
        </div>
    );
};

export {SelectedCarPage};