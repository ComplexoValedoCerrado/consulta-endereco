import SharedStyles from '../pages/styles/shared.module.css';
import {Consulta, Contract} from "./@types/Types.contract";

export default function CardList({data}: { data: Contract }) {
    if (!data) {
        return (
          <></>
        );
    }

    const endereco = (item : Consulta) => {
        if (/\d/.test(item.Enderecamento)) {
            return item.Enderecamento;
        } else if (item.Crematorio.length > 0) {
            console.log(item);
            return item.Crematorio
        } else if (item.Ossario.length > 0) {
            console.log(item);
            return item.Ossario
        }

        return 'Não encontrado'
    }

    return (
        /*
        <div className={SharedStyles.card_result}>
            {data.Consulta.map((item) => (
                <div key={item.Codigo} className={SharedStyles.card}>
                    <img width="40" height="40"
                         className={SharedStyles.card_image}
                         src="https://img.icons8.com/glyph-neue/64/headstone.png"
                         alt="headstone"/>

                    <Badge badgeContent="Falecido"
                           anchorOrigin={{
                               vertical: 'top',
                               horizontal: 'left',
                           }}
                    >
                        <h2 className={SharedStyles.card_title}>{item.Falecido}</h2>
                    </Badge>
                    <Divider orientation="horizontal" flexItem/><br/>
                    <Badge badgeContent="Endereco:"
                           anchorOrigin={{
                               vertical: 'top',
                               horizontal: 'left',
                           }}
                    >
                        <p className={SharedStyles.card_description}>{item.Enderecamento}</p>
                    </Badge>
                    {item.Status.toUpperCase() === 's'.toUpperCase() ? <p className={SharedStyles.alert}>Procure a administração</p> : ""}
                    <Badge badgeContent="Titular"
                           anchorOrigin={{
                               vertical: 'top',
                               horizontal: 'left',
                           }}
                    >
                        <p className={SharedStyles.card_description}>{item.Titular}</p>
                    </Badge>

                </div>
            ))}
        </div>*/
        <div className={SharedStyles.card_result}>
            {data.Consulta.map((item) => {
                return (
                <div key={item.Codigo}>
                        <label 
                        htmlFor={`my_modal_${item.Codigo}`} 
                        className="btn text-[13px] w-full bg-white text-green-700 text-bold border-none flex flex-col gap-1 p-2 h-auto min-h-[3rem]"
                    >
                        <span className="font-bold">{item.Falecido}</span>
                        <span className="text-[12px] font-semibold">Data Sepultamento: {item.Sepultamento}</span>
                    </label>
                    <input type="checkbox" id={`my_modal_${item.Codigo}`} className="modal-toggle"/>
                    <div className="modal " role="dialog">
                        <div className="modal-box justify-center bg-green-600 pt-10">
                            {item.Status.toUpperCase() === 'PROCURE A ADMINISTRACAO'.toUpperCase() ? (
                                <div className="flex justify-center items-center w-full mb-4">
                                    <span className="animate-pulse text-red-600 text-bold text-center font-bold">
                                        ENTRE EM CONTATO COM A ADMINISTRAÇÃO URGENTE
                                    </span>
                                </div>
                            ) : ""}
                            <div className="w-full flex justify-center mb-5">
                                <img width="80" height="80"
                                    className={SharedStyles.card_image}
                                    src="https://img.icons8.com/glyph-neue/64/headstone.png"
                                    alt="headstone"/> <br/>
                            </div>
                            <div className='w-full flex justify-center'>
                                <h3 className="text-lg font-bold text-white justify-center">Plano: <span
                                    className="text-lg font-light text-white">{item.Plano}</span></h3>
                            </div>
                            <p className="py-4 text-white">
                                <strong>Falecido</strong> : {item.Falecido}<br/>
                                <strong>Endereco</strong> : {endereco(item)}<br/>
                                <strong>Titular</strong> : {item.Titular}
                            </p>
                            <div className="modal-action">
                                <label htmlFor={`my_modal_${item.Codigo}`}
                                       className="text-white cursor-pointer">x</label>
                            </div>
                        </div>
                    </div>
                </div>
)})}
        </div>
    );
}
