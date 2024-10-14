import './style.css'
import Header from './components/Header'
import NepszeruSportok from './components/NepszeruSportok'
import 'bootstrap/dist/css/bootstrap.min.css'
import SportElonyok from './components/SportElonyok'
import TeendokSportElott from './components/TeendokSportElott'
import Kepgaleria from './Kepgaleria'
import { useEffect, useState } from 'react'
import { Kep } from './Kep'
import SportFontos from './components/Fontos'
import Lablec from './components/Footer'

function App() {

  const [kepek, setKepek] = useState<Kep[]>([])
  useEffect(() => {
    async function getKepek() {
      const data = await fetch("/imageSources.json")
      const kepek  = await data.json()
      setKepek(kepek.kepek)
      
    }
    getKepek()
  },[])
  const teendok = [
    "Bemelegítés és nyújtás",
    "Megfelelő sportfelszerelés kiválasztása",
    "Folyadékpótlás",
    "Könnyű étkezés edzés előtt",
    "Egyéni célok kitűzése"
  ]

  return (
    <>
      <header className="container text-center">
        <Header />
      </header>
      <main className='container my-4'>
        <NepszeruSportok />
        <SportElonyok />
        <TeendokSportElott teendok={teendok} />
        <Kepgaleria kepek={kepek}/>
        <SportFontos/>
      </main>
      <footer>
        <Lablec/>
      </footer>
    </>
  )
}

export default App
