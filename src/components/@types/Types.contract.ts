export type Consulta = {
    Filial: string;
    Codigo: string;
    Enderecamento: string;
    Falecido: string;
    Status: string;
    Crematorio: string;
    Ossario: string;
    Plano: string;
    Titular: string;
    Sepultamento: string;
}

export type Contract = {
    status: number;
    Consulta: Consulta[];
}
