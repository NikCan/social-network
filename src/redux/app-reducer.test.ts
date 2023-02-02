import {AppInitialStateType, appReducer, initializedSuccess} from "./app-reducer";

let startState: AppInitialStateType
beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('initialized status should be changed', () => {
    const action = initializedSuccess(true)
    const endState = appReducer(startState, action)

    expect(endState.initialized).toBe(true)
})
