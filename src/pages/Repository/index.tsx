import React, { useEffect, useState} from 'react';
import { useRouteMatch , Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api, { } from '../../services/api';

interface RepositoryParams{
    repository: string;
}

interface Repositore {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner:{
        login:string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user:{
        login: string;
    }

}



// componente escrito no formato de funcao
const Repository: React.FC = () => {

    const[ repository, setRepository] = useState<Repositore | null>(null);
    const[ issues, setIssues] = useState<Issue[]>([]);

    const {params} = useRouteMatch<RepositoryParams>();

    useEffect(() => {

        api.get(`repos/${params.repository}`).then((r)=>{
            setRepository(r.data);
        });
        api.get(`repos/${params.repository}/issues`).then((r)=>{
            setIssues(r.data);
        });

    }, [params.repository]);

    return (
        <>
            <Header> 
            <div>
                <img src={logoImg} alt = 'Github Explorer'/><span> Github_explorer</span>
            </div>
            
            <Link to='/'>
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
            </Header>
            {repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>

            )}
            
            <Issues>
                {issues.map(issue =>(
                    <a key={issue.id} href={issue.html_url}>
                    <div>
                        <strong>{issue.title}</strong>
                        <p>{issue.user.login}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                ))}
            </Issues>
        </>
    )
};
export default Repository;
