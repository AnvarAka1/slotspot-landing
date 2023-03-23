import React from 'react';
import {Container, Group, Title} from "@mantine/core";
import {CategoryCard} from "./CategoryCard";

function Categories() {
    return (
        <Container size={1200}>
            <Title>Категории</Title>
            <Group position={"apart"} mt={32}>
                <CategoryCard
                    title="Маникюр / Педикюр"
                    type="nail"
                />
                <CategoryCard
                    title="Барбершопы /Парикмахеры"
                    type="barbershop"
                />
                <CategoryCard
                    title="Развлечения"
                    type="entertainment"
                />
                <CategoryCard
                    title="SPA-салоны"
                    type="spa"
                />
            </Group>
        </Container>
    );
}

export default Categories;