type pro = {
  name: string;
  photo: string;
};
const Greeting = ({ name, photo }: pro) => {
  return (
    <>
      <img src={photo} alt="`${name}'s photo`" />
      <h1>{name}</h1>
    </>
  );
};
export default Greeting;
