import { Card, Text, Group, Image, createStyles, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        maxWidth: 384
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        background:'red',
        top: 0
    }
}));

interface CompanyCardProps {
    link: string;
    image: string;
    title: string;
    author: string;
    type: keyof object;
    views: number;
    comments: number;
}

export function SpotCard({company}: {company: CompanyCardProps}) {
    const { image, title, type, author, views, comments } = company
    const { classes, cx } = useStyles();

    return (
        <Card
            className={classes.card}
            radius={12}
            p={0}
        >
            <Image pos="relative" src={image} radius={12} height={200}/>

            <Title size={24}>
                {title}
            </Title>

            <Group>
                <Text>
                    4.9
                </Text>
                <Text>
                    17 Matbuotchilar ko'chasi, Tashkent 100047
                </Text>
            </Group>
        </Card>
    );
}