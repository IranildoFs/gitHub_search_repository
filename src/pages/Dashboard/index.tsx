import React, { FormEvent, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error} from './styles';
import { FiChevronRight } from "react-icons/fi";
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner:{
        login:string;
        avatar_url: string;
    }
}

// componente escrito no formato de funcao
const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState (''); // para armazenar os dados do input
    const [ repositories, setRepositories] = useState<Repository[]>(()=>{
        const storageRepositorio = localStorage.getItem(`@GithubExplorer:repositories`);
    
    if(storageRepositorio){
        return JSON.parse(storageRepositorio);
    }
    return [];
    }); // para armazenar os repositorios
    const [ inputError, setInputError ] = useState('');

    useEffect(()=>{
        localStorage.setItem(`@GithubExplorer:repositories`, JSON.stringify(repositories));
    }, [repositories]
    )

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();

        if(!newRepo) {
            setInputError('Digite o autor/nome do repositório!');
            return;
        }
        try{
            const response = await api.get(`repos/${newRepo}`);
        
            setRepositories([...repositories, response.data]);
            setInputError('');
            setNewRepo('');
        }catch(error){
            setInputError('Erro na busca deste repositório.');
        }
    }

    return (
        < >
        <img src={logoImg} alt = 'Github Explorer'/><span> Github_explorer</span>
        <Title>Explore repositórios no Github</Title>
        <Form onSubmit={handleAddRepository} hasError={!!inputError}>
            <input 
            value= {newRepo}
            onChange={e => setNewRepo(e.target.value)}
            placeholder='Digite o nome do repositório'
            />
            <button>Pesquisar</button>
        </Form>
        {inputError&&
            <Error>
                {inputError}
            </Error>


        }
        
        <Repositories>


            {repositories.map(r =>(
                <Link key={ r.full_name} to={`/repository/${r.full_name}`}>
                    <img
                    src = { r.owner.avatar_url}
                    alt = { r.owner.login}
                    />
                    <div>
                        <strong>{r.full_name}</strong>
                        <p>{r.description}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            ))}



            
       
        </Repositories>
        
        </>
    );
};
export default Dashboard;
