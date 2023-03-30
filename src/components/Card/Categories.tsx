import React from 'react'
import { Container, Group, Title } from '@mantine/core'
import { CategoryCard } from './CategoryCard'
import { Category } from '@src/dto/company'
import { CategoryType } from '@src/constants/IconByNames'

type Props = {
  categories: Category[]
}

const types = ['nail', 'barbershop', 'entertainment', 'spa']

function Categories({ categories }: Props) {
  return (
    <Container size={1200}>
      <Title>Категории</Title>
      <Group position={'apart'} mt={32}>
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            type={types[index] as keyof CategoryType}
          />
        ))}
      </Group>
    </Container>
  )
}

export default Categories
