
export default function NepszeruSportok() {
    return (
        <>
         <div className="table-responsive">
            <section className="mb-5">
                <h2>Népszerű sportok</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sportág</th>
                            <th>Játékosok száma</th>
                            <th>Főbb jellemzők</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Foci</td>
                            <td>11 fő/csapat</td>
                            <td>Labdajáték, csapatmunka</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kosárlabda</td>
                            <td>5 fő/csapat</td>
                            <td>Labdajáték, gyorsaság</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tenisz</td>
                            <td>1 vagy 2 fő</td>
                            <td>Egyéni vagy páros játék</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Úszás</td>
                            <td>Egyéni</td>
                            <td>Állóképesség, gyorsaság</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Röplabda</td>
                            <td>6 fő/csapat</td>
                            <td>Labdajáték, csapatmunka</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
        </>
    )
}