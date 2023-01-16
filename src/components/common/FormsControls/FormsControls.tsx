import s from './FormsControls.module.css'
import classNames from "classnames";

export const FormControl = ({input, meta, ...props}:any) => {
    const error = meta.error&&meta.touched
    return <div className={classNames(s.formControl, {[s.error]: error})}>
        {(props.typeOfForm==="input")&&<div><input {...props} {...input}/></div>}
        {(props.typeOfForm==="textarea")&&<div><textarea {...props} {...input}/></div>}
        {error&&<span>{meta.error}</span>}
    </div>
}