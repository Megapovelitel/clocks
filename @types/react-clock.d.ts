
declare module 'react-clock' {
    type ClockProps = {
        value: Date
        size: number
    }
    const Clock: (props: ClockProps) => JSX.Element
    export default Clock
}
