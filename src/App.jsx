import React, { useState, useEffect } from 'react'
import axios from './axios.jsx'
import Champion from './components/Champion.jsx'
import { Grid } from '@material-ui/core'

function App() {
    const [champions, setChampions] = useState([])
    const [championNames, setChampionNames] = useState([])
    const [championSkills, setChampionSkills] = useState([])
    const [championPassives, setChampionPassives] = useState([])
    const [language, setLanguage] = useState("tr_TR")
    const [version, setVersion] = useState("")

    useEffect(() => {
        const getChamps = async () => {
            await axios.get(`/${language}/champion.json`)
                .then(response => { setVersion(response.data.version); return response.data.data; })
                .then(champs => {
                    setChampions(Object.values(champs));
                    Object.values(champs).forEach(async champion => (
                        await axios.get(`/${language}/champion/${champion.id}.json`)
                            .then(response => response.data.data)
                            .then(champInfo => {
                                setChampionSkills(prevState => [...prevState, { champName: champion.id, champSkills: Object.values(champInfo)[0].spells }])
                                setChampionPassives(prevState => [...prevState, { champName: champion.id, champPassive: Object.values(champInfo)[0].passive }])
                            })
                    ))
                })
        }
        getChamps();
    }, [])

    return (
        <Grid container spacing={3}>
            {champions && champions.map(({ id, title }) => (
                <Grid key={id} item xs={12} sm={6} md={2}>
                    <Champion
                        name={id}
                        title={title}
                        version={version}
                        imageUrl={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
                        passive={championPassives.filter(champion => champion.champName === id)[0]}
                        skills={championSkills.filter(champion => champion.champName === id)} />
                </Grid>
            ))}
        </Grid>
    )
}

export default App
