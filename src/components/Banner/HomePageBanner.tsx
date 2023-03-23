import {createStyles, Box, Title, Text, Button, Container} from '@mantine/core';
import bannerImage from "../../assets/home-banner.png"
const useStyles = createStyles((theme) => ({
    root: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bannerImage})`,
        paddingLeft: 60,
        paddingTop: 70,
        borderRadius: 12
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontWeight: 590,
        fontSize: 48,

        [theme.fn.smallerThan('md')]: {
            fontSize: 34,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 552,
    },

    control: {
        fontSize: 16,
        background: theme.colors.light[0],
        color: theme.colors.dark[0]
    },
}));

export function HomePageBanner() {
    const { classes } = useStyles();
    return (
        <Container size={1200}>
            <Box className={classes.root} mt={24}>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            У нас 10 новых локаций ⚡️
                        </Title>

                        <Text size={24} className={classes.description} mt={16}>
                            Теперь можете бронировать новые места и получать скидки до 30%
                        </Text>

                        <Button
                            variant="light"
                            size="lg"
                            className={classes.control}
                            mt={32}
                            radius={12}
                        >
                            Посмотреть
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
    );
}