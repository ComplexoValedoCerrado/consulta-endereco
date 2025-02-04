import SharedStyles from '../pages/styles/shared.module.css';
import {useState} from 'react';
import CardList from "./CardList";
import {Contract} from "./@types/Types.contract";
import Swal from 'sweetalert2';

const SearchAddress = () => {

    const [dataResult, setDataResult] = useState<Contract>();

    const [cpfTitular, setCpfTitular] = useState('');
    const [nomeTitular, setNomeTitular] = useState('');
    const [nomeFalecido, setNomeFalecido] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cpfTitular === '' && nomeTitular === '' && nomeFalecido === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Preencha pelo menos um dos campos para realizar a busca.',
            });
            setDataResult(undefined);
            return;
        }
        setDataResult(undefined);

        const response = await fetch(`https://cpg172763.protheus.cloudtotvs.com.br:1386/rest/xconstobi/consultaenderecamento?cCPFTit=${cpfTitular}&cNomeTit=${nomeTitular.toUpperCase()}&cNomFal=${encodeURIComponent(nomeFalecido.toUpperCase())}`);
        const data: Contract = await response.json();

        let timerInterval: NodeJS.Timeout | undefined;
         Swal.fire({
            title: "Buscando dados do contrato",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                if(data.status === 404 || response.status === 204 || response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Nenhum contrato encontrado!',
                    });
                    return;
                }

                if(data.status === 500) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Verifique as informações inseridas e tente novamente sem utilizar acentos ou caracteres especiais.',
                    });
                    return;
                }

                formatarData(data);
            }
        });
    };

    const formatarData = (data : Contract) => {
        const consultasLimitadas = data.Consulta.slice(0, 100);
        const consultasSepultamentoFormatado = consultasLimitadas.map((item) => {
            return {
                ...item,
                Sepultamento: item.Sepultamento.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1'),
            };
        });

        setDataResult({...data, Consulta: consultasSepultamentoFormatado});
    }

    return (
        <div className={SharedStyles.container}>
            <form onSubmit={handleSubmit} className={SharedStyles.form_search}>
                <input
                    type="text"
                    placeholder="Nome do Falecido"
                    value={nomeFalecido}
                    onChange={(e) => setNomeFalecido(e.target.value)}
                    className={`${SharedStyles.inputs} ${SharedStyles.opaqueInputs}`}
                />

                <div className={SharedStyles.dividerContainer}>
                    <div className={SharedStyles.dividerLine}></div>
                    <span className={SharedStyles.dividerText}>OU</span>
                    <div className={SharedStyles.dividerLine}></div>
                </div>

                <input
                    type="text"
                    placeholder="Nome do Titular"
                    value={nomeTitular}
                    onChange={(e) => setNomeTitular(e.target.value)}
                    className={`${SharedStyles.inputs} ${SharedStyles.transparentInputs}`}
                />
                <input
                    type="text"
                    placeholder="CPF do Titular"
                    value={cpfTitular}
                    onChange={(e) => setCpfTitular(e.target.value)}
                    className={`${SharedStyles.inputs} ${SharedStyles.transparentInputs}`}
                />
                <button type="submit" className={SharedStyles.button_search}>
                    Consultar
                </button>
            </form>
            <CardList data={ dataResult! } />
        </div>
    );
};

export default SearchAddress;
