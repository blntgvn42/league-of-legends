import React from 'react'

import spinner from "../Spinner-2s-200px.svg"

import { Card, CardContent, Typography, Grid, Box, } from "@material-ui/core"

import "./Champion.css"

function Champion({ imageUrl, name, title, skills, version, passive }) {
    return (
        <div className="champion">
            <Card className="champion__card">
                <img src={imageUrl} alt={name} className="champion__image" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="champion__name">{name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="champion__title">{title}</Typography>
                </CardContent>
                <CardContent>
                    {skills.length ? (
                        <Box display="flex" flexDirection="column">
                            <Grid container spacing={3} justify="space-evenly">
                                {passive &&
                                    <Grid item xs={12} md={6} lg={4} xl={3}>
                                        <img className="champion__skills" src={`http://ddragon.leagueoflegends.com/cdn/10.15.1/img/passive/${Object.values(passive)[1].image.full}`} alt="" />
                                        <p className="champion__skill--name">{Object.values(passive)[1].name}</p>
                                    </Grid>
                                }
                                <Grid item xs={12} md={6} lg={4} xl={3}>
                                    <img className="champion__skills" src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skills[0].champSkills[0].id}.png`} alt="" />
                                    <p className="champion__skill--name">{skills[0].champSkills[0].name}</p>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} xl={3}>
                                    <img className="champion__skills" src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skills[0].champSkills[1].id}.png`} alt="" />
                                    <p className="champion__skill--name">{skills[0].champSkills[1].name}</p>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} justify="space-evenly">
                                <Grid item xs={12} md={6} lg={4} xl={3}>
                                    <img className="champion__skills" src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skills[0].champSkills[2].id}.png`} alt="" />
                                    <p className="champion__skill--name">{skills[0].champSkills[2].name}</p>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} xl={3}>
                                    <img className="champion__skills" src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skills[0].champSkills[3].id}.png`} alt="" />
                                    <p className="champion__skill--name">{skills[0].champSkills[3].name}</p>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : "LOADING"}
                </CardContent>
            </Card>
        </div >
    )
}

export default Champion
