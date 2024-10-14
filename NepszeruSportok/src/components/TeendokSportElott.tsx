interface TeendokProps {
    teendok: string[]
}

export default function TeendokSportElott(props: TeendokProps) {
    return (
        <>
            <section className="mb-5">
                <h2>Teendők sportolás előtt</h2>
                <ol className="list-group list-group-numbered">
                    {
                        props.teendok.map(teendo => (
                            <>
                                <li className="list-group-item">{teendo}</li>
                            </>

                        ))
                    }

                </ol>
            </section>
        </>
    )
}