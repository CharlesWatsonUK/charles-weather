import React from 'react';
import classes from './AddLocationForm.module.scss';
import countries from '../../../static/countries.json';

import Button from '../../UI/Button/Button';

const addLocationForm = (props) => {
    const countryOptions = countries.map(
        country => 
            <option 
                key={country.code}
                value={country.code}>{country.name}
            </option>);
    
    return(
        <div className={classes.Form}>
            <div className={classes.FormItem}>
                    <label>Country</label>
                    <select 
                        onChange={e => props.countryChange(e)}
                        value={props.country}>
                        {countryOptions}
                    </select>
            </div>
            <div className={classes.FormItem}>
                <label>City</label>
                <input
                    type='text'
                    onChange={e => props.cityChange(e)}
                    placeholder='City, town or village'
                    value={props.city}/>
            </div> 
            <div className={classes.FormItem}>
                <Button
                    type='Success'
                    className={classes.Button}
                    clicked={props.verify}>Search</Button>
            </div>
        </div>
    );
}

export default addLocationForm;
