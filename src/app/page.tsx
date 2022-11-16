export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-6xl mt-28'>Olá,</h1>
      <h2 className='text-2xl mt-10'>Seja bem vindo!</h2>
      <span className='mt-10'>
        Projeto e codifico sites, aplicações web e aplicativos para celulares.
      </span>
      <div className='flex flex-col'>
          <form action='' className='flex flex-col'>
            <label htmlFor=''>Email</label>
            <input className='h-8 mb-2 rounded p-2' type='email' required/>
            <label htmlFor=''>Mensagem</label>
            <textarea
              className="rounded p-2"
              name=''
              id=''
              cols={40}
              rows={10}
              placeholder='Deixe seu questionamento'
            ></textarea>
            <button className="w-full h-8 bg-stone-900 rounded my-2">Enviar</button>
          </form>
      </div>
    </div>
  )
}
