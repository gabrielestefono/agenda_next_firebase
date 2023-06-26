"use client"
import { FormEvent, useState } from 'react';
import styles from './page.module.scss';
import { database } from '@/services/firebase';


export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [observacoes, setObservacoes] = useState('')

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
  }

  return (
    <>
      <main className={styles.container}>
          <form onSubmit={gravar}>
            <input type="text" placeholder='Nome' onChange={event => setNome(event.target.value)}/>
            <input type="email" placeholder='Email' onChange={event => setEmail(event.target.value)}/>
            <input type="tel" placeholder='Telefone' onChange={event => setTelefone(event.target.value)}/>
            <textarea name="observacao" placeholder='Observação' onChange={event => setObservacoes(event.target.value)}></textarea>
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
