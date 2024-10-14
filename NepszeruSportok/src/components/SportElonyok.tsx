export default function SportElonyok() {
    const sportElonyok = [
        "Fizikai erőnlét fejlesztése",
        "Csapatmunka és együttműködés",
        "Stresszoldás és mentális egészség javítása",
        "Önfegyelem és kitartás erősítése",
        "Közösségépítés"
    ]
    return (
        <>
        <section className="mb-5">
            <h2>A sportok előnyei</h2>
            <ul className="list-group">
                {
                    sportElonyok.map(elony => (
                        <>
                        <li className="list-group-item">{elony}</li>
                        </>
                        
                    ))
                }
                <li className="list-group-item">Fizikai erőnlét fejlesztése</li>
            </ul>
        </section>
        </>
    )
}