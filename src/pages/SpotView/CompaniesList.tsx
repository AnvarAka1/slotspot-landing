import React from 'react'
import { Container, Grid } from '@mantine/core'
import { companyData } from '@src/constants/constants'
import { SpotCard } from '@src/components/Card/SpotCard'

function CompaniesList() {
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
