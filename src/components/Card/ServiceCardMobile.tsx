import {Card, createStyles, Divider, Group, Image, Text, Box} from '@mantine/core';

const useStyles = createStyles(() => ({
    card: {
        maxWidth: 235
    },
    description: {
        color: '#1E2B58',
        opacity: 0.5
    },
    price: {
        color: '#4CAF50'
    }
}));

interface ServiceCardMobileProps {
    image: string;
    title: string;
    description: string;
    price: string
}

export function ServiceCardMobile({image, title, description, price}: ServiceCardMobileProps) {
    const {classes} = useStyles();

    return (
        <Box mt={24}>
            <Text component="p" size={16} weight={700}>Выберите услугу</Text>
            <Card withBorder mt={16} p={4} radius={20}>
                <Group spacing={16} align="start">
                    <Image src={image} width={100} height={100} radius={16}/>
                    <Card.Section className={classes.card}>
                        <Text size={16} weight={500}>{title}</Text>
                        <Text lineClamp={2} size={12} className={classes.description}>{description}</Text>
                        <Text size={16} className={classes.price}>{price}</Text>
                    </Card.Section>
                </Group>
            </Card>

            <Card withBorder mt={16} p={4} radius={20}>
                <Group spacing={16} align="start">
                    <Image src={image} width={100} height={100} radius={16}/>
                    <Card.Section className={classes.card}>
                        <Text size={16} weight={500}>{title}</Text>
                        <Text lineClamp={2} size={12} className={classes.description}>{description}</Text>
                        <Text size={16} className={classes.price}>{price}</Text>
                    </Card.Section>
                </Group>
            </Card>
        </Box>
    );
}