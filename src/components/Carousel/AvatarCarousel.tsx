import {Carousel} from '@mantine/carousel';
import {useMediaQuery} from '@mantine/hooks';
import {Button, Card, createStyles, Group, Image, Text, useMantineTheme} from '@mantine/core';

const useStyles = createStyles(() => ({
    button: {
        color: "#000",
        border: "1px solid #000"
    },
}));

const data = [
    {
        image:
            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Катя',
    },
    {
        image:
            'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Джон',
    },
    {
        image:
            'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Анна',
    },
    {
        image:
            'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Джон',
    },
    {
        image:
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Элла',
    },
    {
        image:
            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Катя',
    },
    {
        image:
            'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Джон',
    },
    {
        image:
            'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Анна',
    },
    {
        image:
            'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Джон',
    }
];


interface CardProps {
    image: string;
    title: string;
}

function AvatarCard({ image, title }: CardProps) {
    return (
        <Group align="center" position="center">
            <Image m={0} width={100} height={100} radius={50} src={image} alt={title} />
            <Text size={14} weight={700} component="p">{title}</Text>
        </Group>
    );
}

export function AvatarCarousel() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title} p={0}>
            <AvatarCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Card withBorder mt={24} radius={12}>
            <Group position="apart">
                <Text size={24} weight={590} component="p">
                    Выберите специалиста
                </Text>
                <Button variant="outline" className={classes.button} radius={50}>
                    Выбрать свободного специалиста
                </Button>
            </Group>
            <Card.Section p={24}>
                <Carousel
                    withControls={false}
                    slideSize="16%"
                    breakpoints={[{ maxWidth: 'sm', slideSize: '15%', slideGap: 12 }]}
                    align="start"
                    mt={24}
                    slidesToScroll={mobile ? 1 : 2}
                >
                    {slides}
                </Carousel>
            </Card.Section>
        </Card>
    );
}