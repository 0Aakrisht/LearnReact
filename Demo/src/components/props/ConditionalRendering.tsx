type demo = {
    value : number ;
}
const ConditionalRendering = ({value}:demo) => {
    if (value ===2) {
        return <h1>The value is two</h1>
    } else {
        return <h1>The value is something else...</h1>
    }
}
export default ConditionalRendering ;

