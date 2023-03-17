import { Box, Grid } from '@mui/material';
import React from 'react'
import "./SobreOProjeto.css";
import {Helmet} from 'react-helmet';

function SobreOProjeto() {
    return (
    <>        
            <Box className="parallax">
                <img src="/assets/img/favela1.png" id="favela1"/>
                <img src="/assets/img/favela6.png" id="favela6"/>
                <img src="/assets/img/favela2.png" id="favela2"/>
                <img src="/assets/img/favela3.png" id="favela3"/>
                <img src="/assets/img/favela4.png" id="favela4"/>
                <img src="/assets/img/favela5.png" id="favela5"/>
                <img src="/assets/img/favela_poste_esq.png" id="favela_poste_esq"/>
                <img src="/assets/img/pipa_dir_1.png" id="pipa_dir_1"/>
                <img src="/assets/img/pipa_dir_2.png" id="pipa_dir_2"/>
                <img src="/assets/img/pipa_esq_1.png" id="pipa_esq_1"/>
                <img src="/assets/img/pipa_esq_2.png" id="pipa_esq_2"/>
                <img src="/assets/img/pipa_esq_3.png" id="pipa_esq_3"/>
                <img src="/assets/img/pipa_esq_4.png" id="pipa_esq_4"/>
                <h2 id="text">Poder <br/> Digital <br/> Periférico</h2>
                <img src="/assets/img/favela_poste_dir.png" id="favela_poste_dir"/>
                <img src="/assets/img/favela_casa_dir.png" id="favela_casa_dir"/>
                <img src="/assets/img/favela_casa_esq.png" id="favela_casa_esq"/>
                <img src="/assets/img/favela_muro.png" id="favela_muro"/>
            </Box>

            <Grid container item md={12} className="sec">
                <h2>Poder Digital Periférico</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit, facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus!
                </p>
            </Grid>

            <Helmet>
                <script src="scripts/script.js" type="text/javascript" />
            </Helmet>
            </>
    );
}

export default SobreOProjeto;