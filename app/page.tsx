import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.container}>
          <form>
            <input type="text" placeholder='Nome'/>
            <input type="email" placeholder='Email'/>
            <input type="tel" placeholder='Telefone'/>
            <textarea name="observacao" placeholder='Observação'></textarea>
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
