import { myrender} from "./describe.service";




export interface Redessaude{
    name: String;
    especialidade: String;
    exames: String;
    servicos : String;
    numberTell : Number;
    timefunc : String;
    endereco : String;
    Image: String;
    
}



export default function DescribeObject(){
    return(
        <div>
            {myrender.map((Redessaude) =>(
                <div key={String(Redessaude)}>
                        <p>Nome: {Redessaude.name}</p>
                </div>
            )

            
            )}
        </div>

    )
}