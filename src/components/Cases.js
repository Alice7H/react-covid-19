import { format } from "date-fns";
import React, { useState } from "react"; 
import { Form, Button, Spinner } from "react-bootstrap";
import countries from "../utils/availableCountries.json";
import { getDataByCountryDate } from "../services/dataApi";
import CasesResult from "./CasesResult";

export default function Cases() {
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState("");
    const [result, setResult] = useState("");
    const [message, setMessage] = useState("");
    const today = format(new Date(), "yyy-MM-dd");
  
    function handleChange(e) {
        e.preventDefault();
        setCountry(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
           if(country) {
               setMessage("");
               setLoading(true);
               const data = await getDataByCountryDate(country, today);
               !data
                   ? setMessage("Erro na consulta.")
                   : data.length === 0 || data.status > 400
                   ? setMessage("Requisição não encontrada.")
                   : setResult(data);
           } else {
             setMessage('País não informado')
           }
        } catch (error) {
            setMessage("Erro na requisição");
        }
        setLoading(false);
    }

    return (
        <>
            <h4>Escolha o país para saber sobre os casos de COVID-19:</h4>
            <Form inline className='justify-content-center align-items-center'>
                <Form.Group className='ml-1 mr-4'>
                    { countries ? (
                        <Form.Control as='select' custom name='country' value={country} onChange={handleChange}
                            required className='mx-2'>
                            <option value="">Escolha o país...</option>
                            { countries?.sort((a, b) => a.name.localeCompare(b.name))
                                .map((country) => (<option key={country.id} value={country.name}> {country.name}</option>))
                            }
                        </Form.Control>
                    ) : (
                        <Spinner animation='border' variant='primary' className="mr-2" />
                    )}

                    {!loading ? (
                        <Button className='btn-space-top' variant='outline-primary' type='submit' onClick={handleSubmit}>
                            Busca
                        </Button>
                    ) : (
                        <Button className='btn-space-top' variant='outline-primary' disabled>
                            <Spinner as='span' animation='grow' size='sm' role='status'aria-hidden='true'/>
                            Loading...
                        </Button>
                    )}
                </Form.Group>
            </Form>
            <br />
            {message ? <span className='text-danger'>{message}</span> : null}
            <br />
            <CasesResult result={result} today={today} country={country} />
        </>
    );
}