import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielaz318/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository}  />
                ))}
            </ul>
        </section>
    )
} 