import React from 'react';
import { Grid, Skeleton, Container } from '@mantine/core';
import {companyData} from "../../constants/constants";
import {SpotCard} from "../../components/Card/SpotCard";


const child = <Skeleton height={140} radius="md" animate={false} />;


function CompaniesList(props) {
    return (
        <Container size={1200} my={24}>
            <Grid>
                {companyData.map((company)=>(
                    <Grid.Col xs={4} mt={24}>
                        <SpotCard company={company}/>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}

export default CompaniesList;