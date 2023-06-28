"use client"
import { FormEvent, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { database } from '@/services/firebase';

type Contato = {
  chave: string,
  nome: string,
  email: string,
  telefone: string,
  observacoes: string
}


export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [observacoes, setObservacoes] = useState('')

  useEffect(()=>{
    const refContatos = database.ref('contatos');
    refContatos.on('value', resultado => {
      const resultadoContatos = Object.entries<Contato>(resultado.val() ?? {}).map(([chave, valor])=>{
        return{
          'chave': chave,
          'nome': valor.nome,
          'email': valor.email,
          'telefone': valor.telefone,
          'observacoes': valor.observacoes
        }
      })
    });
  }, []);

  let gravar = (event: FormEvent)=>{
    event.preventDefault();
    const ref = database.ref('contatos');

    const dados = {
      nome,
      email,
      telefone,
      observacoes
    };

    ref.push(dados);
    setNome('');
    setEmail('');
    setTelefone('');
    setObservacoes('');
    
  }

  return (
    <>
      <main className={styles.container}>
          <form onSubmit={gravar}>
            <input type="text" placeholder='Nome' value={nome} onChange={event => setNome(event.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)}/>
            <input type="tel" placeholder='Telefone' value={telefone} onChange={event => setTelefone(event.target.value)}/>
            <textarea name="observacao" placeholder='Observação' value={observacoes} onChange={event => setObservacoes(event.target.value)}></textarea>
            <button type='submit'>Salvar</button>
          </form>
          <div className={styles.caixacontatos}>
              <input type="text" placeholder='Buscar'/>
              <div className={styles.caixaindividual}>
                <div className={styles.boxtitulo}>
                  <p className={styles.nometitulo}>Nome de fulano</p>
                  <div>
                    <a>Editar</a>
                    <a>Excluir</a>
                  </div>
                </div>
                <div className={styles.dados}>
                  <p>Telefone</p>
                  <p>Email</p>
                  <p>Observação da pessoa</p>
                </div>
              </div>
          </div>
        </main>
    </>
  )
}
