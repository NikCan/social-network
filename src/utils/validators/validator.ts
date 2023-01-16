export const required = (value: string) => {
    return value ? undefined : 'field is required'
}

export const maxLengthCreator = (length: number) => (value: string) => {
    return value && value.length>length ? `Max length is ${length}` : undefined
}