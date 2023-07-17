
export default function Likes({setCount}) {

   function handleClick() {
      setCount(count + 1);
   }  

   return (
      <>
         <div>
            <button onClick={handleClick}>AJOUTER 1 LIKE</button>
            {/* <h1>Nombre de likes : {count}</h1>  */}
         </div>         
      </>
   );
}