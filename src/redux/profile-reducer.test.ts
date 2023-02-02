import {
    addPostActionCreator,
    profilePageType,
    profileReducer,
    setUserProfile, setUserStatus,
    userProfileType
} from "./profile-reducer";
import {v1} from "uuid";

let startState: profilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: "1", date: "17.10.2022", message: "HI", likeCount: 2},
            {id: "2", date: "18.10.2022", message: "How are you?", likeCount: 5},
        ],
        profile: null,
        status: ""
    }
})

test('correct message should be added', () => {
    const action = addPostActionCreator("test post")
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe("test post")
})

test('correct profile should be set', () => {
    const newUser: userProfileType = {
        userId: +v1(),
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: 'Nikita Gaponov',
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: "",
        }
    }
    const action = setUserProfile(newUser)
    const endState = profileReducer(startState, action)

    expect(endState.profile).toBe(newUser)
})

test('correct status should be set', () => {
    const action = setUserStatus("test status")
    const endState = profileReducer(startState, action)

    expect(endState.status).toBe("test status")
})