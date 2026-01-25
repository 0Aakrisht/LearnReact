const RenderingList = () => {
    const details = [{id :1 , name : "Aakrisht Pachhai"},{id : 1 ,name :"Aarshika Binadi"}];
    const persons = details.map((person)=><li key={person.id}>ID:{person.id}<br/>Name:{person.name}</li>);
    return <>
    <ul>
    {persons}
    </ul>
    </>
}
export default RenderingList ;