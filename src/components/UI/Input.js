import React from 'react'
import classes from './Input.module.css'
import useInput from '../hooks/use-input'

const Input = (props) => {
    const {value, hasError, changeHandler, blurHandler} = useInput(props.validationFunc)

  return <div className={`${classes['form-control']} ${hasError && classes.invalid}`}>
    <label htmlFor={props.id}>{props.text}</label>
    <input value={value} onChange={changeHandler} onBlur={blurHandler} placeholder={props.placeholder} type={props.type} id={props.id} />
    {hasError && <p>{props.errMessage}</p>}
  </div>
}

export default Input