import {ActionIcon, Container, createStyles, Group, Image, Text, Box} from '@mantine/core';
import SlotSpot from '@src/assets/icons/slotspot-icon.svg';
import TwitterIcon from '@src/assets/icons/Twitter.svg';
import facebookIcon from '@src/assets/icons/facebook.svg';
import LinkedInIcon from '@src/assets/icons/LinkedIN.svg';
import instagramIcon from '@src/assets/icons/instagram.svg';

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        backgroundColor: theme.colors.gray[0],
    },

    logo: {
        maxWidth: 280,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    inner: {
        display: 'flex',
        gap: 200,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },

    title: {
        fontSize: 16,
        marginBottom: 28
    },

    afterFooter: {
        background: theme.colors.dark[0],
        color: theme.colors.light[0],
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
    afterFooterContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

export function Footer({ data }: FooterLinksProps) {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size={1200}>
                <div className={classes.logo}>
                    <Image height={24} width={110} src={SlotSpot} />
                    <Text size={24} weight={700}>
                        +998 90 000 00 00
                    </Text>
                    <Text size={16} >
                        Ташкент, Учтепинский р-н, ул. Садокат, 2 дом
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container fluid className={classes.afterFooter}>
                <Container size={1200} className={classes.afterFooterContent}>
                    <Text>
                        Все права защищены © Slotspot LLC
                    </Text>

                    <Group spacing={24} position="apart" >
                        <ActionIcon size="lg">
                            <Image width={18} height={18} src={facebookIcon} />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <Image width={18} height={18} src={TwitterIcon} />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <Image width={18} height={18} src={LinkedInIcon} />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <Image width={18} height={18} src={instagramIcon} />
                        </ActionIcon>
                    </Group>
                </Container>
            </Container>
        </footer>
    );
}
