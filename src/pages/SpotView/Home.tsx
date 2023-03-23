import React from 'react';
import {HomePageBanner} from "../../components/Banner/HomePageBanner";
import {SearchAutocompleteInput} from "../../components/Inputs/SearchInput";
import {Container, Grid} from "@mantine/core";
import {SpotCarousel} from "../../components/Carousel/SpotCarousel";
import {Faq} from "../../components/Accordion/Faq";
import Categories from "../../components/Card/Categories";
import TelegramContact from "../../components/Banner/TelegramContact";

function Home() {
    return (
        <Container fluid p={0}>
            <Grid>
                <Grid.Col xs={12} p={0}>
                    <HomePageBanner/>
                    <SearchAutocompleteInput/>

                    <Grid.Col p={0} xs={12} mt={24}>
                        <Categories />
                    </Grid.Col>

                    <Grid.Col p={0} xs={12} mt={24}>
                        <SpotCarousel/>
                    </Grid.Col>

                    <Grid.Col p={0} xs={12} mt={24}>
                        <Faq />
                    </Grid.Col>

                    <Grid.Col p={0} xs={12} mt={24}>
                        <TelegramContact />
                    </Grid.Col>

                </Grid.Col>
            </Grid>
        </Container>
    );
}

export default Home;