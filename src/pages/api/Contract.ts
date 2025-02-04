import type {NextApiRequest, NextApiResponse} from 'next'
import axios from 'axios'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {cCPFTit = '', cNomeTit = '', cNomFal = ''} = req.query
    const urlContracts = process.env.URL_CONTRACTS || 'http://localhost:8080/contracts';

    try {
        const response = await axios.get(urlContracts, {
            params: {
                cCPFTit,
                cNomeTit,
                cNomFal
            }
        })
        if (cCPFTit === '' && cNomeTit === '' && cNomFal === '') {
            res.status(400).json({error: 'Parâmetros não informados'})
        }
        res.status(response.status).json(response.data)
    } catch (error) {
        res.status(500).json({error: error})
    }
}