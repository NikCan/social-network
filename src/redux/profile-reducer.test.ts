import {authReducer, AuthStateType, setAuthUserData} from "./auth-reducer";

let startState: AuthStateType
beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isFetching: true,
        isAuth: false,
    }
})

test('correct data should be set', () => {
    const action = setAuthUserData(26918, 'NikCan', 'nikitagaponov@gmail.com', true)
    const endState = authReducer(startState, action)

    expect(endState).toStrictEqual({
        id: 26918,
        login: 'NikCan',
        email: 'nikitagaponov@gmail.com',
        isFetching: true,
        isAuth: true,
    })
})
