import React, {ChangeEvent, KeyboardEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    // const [value, setValue] = useState(props.status)
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") this.deactivateEditMode()
    }

    state = {
        status: this.props.status,
        editMode: false
    }

    render() {
        return <>
            <div>
                {this.state.editMode ?
                    <input value={this.state.status} onKeyPress={this.onKeyPressHandler} onChange={this.onChangeHandler}
                           onBlur={this.deactivateEditMode} autoFocus/> :
                    <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>}
            </div>
        </>
    }
}
