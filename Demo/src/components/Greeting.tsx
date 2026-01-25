type GreetingProps = {
    name : string ;
    photo : string;
}
const Greeting = ({name , photo }: GreetingProps) => {
    return (
        <>
        <img src={photo} alt="`${name}'s photo`" height={100} width={120} />
        <h1>Welcome Back,{name}</h1>
        </>
    );
}
export default Greeting ;