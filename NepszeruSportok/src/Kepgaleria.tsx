import { Kep } from "./Kep"

interface GaleriaProps {
    kepek: Kep[]
}

export default function Kepgaleria(props: GaleriaProps) {
    return (
        <>
            <section className="mb-5">
                <h2>Képgaléria</h2>
                <div className="row">
                    {
                        props.kepek.map(kep => (
                            <>
                                <div key={kep.id} className="col-sm-4">
                                    <img className="img-fluid" alt="Kosárlabda játékosok a pályán, labdával a levegőben"
                                        title="Kosárlabda játék pillanat" src={kep.src} />
                                </div >
                            </>
                        ))
                    }
                </div>
            </section>
        </>
    )
}