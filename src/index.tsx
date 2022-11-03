import React from 'react';
import {rerender} from "./render";
import {state, StateType} from "../src/redux/state"

rerender(state<StateType>)