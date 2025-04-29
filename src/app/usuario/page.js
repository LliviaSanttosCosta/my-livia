import db from "@/lib/db"
export default async () => {
    const usuarios = await db.query("select * from usuario")
 return (<>
    <h1> Lista de usuarios</h1>
    <div>
      {
         usuarios.rows.map( 
            usuario => (
               <div>
                  {usuario.nome} esta conectado
               </div>
            ) 
         )
      }
   </div>
 </>);
}