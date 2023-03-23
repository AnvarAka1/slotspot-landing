import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    questionTitle: {
        fontWeight: 700
    },
    item: {
        border: 0,
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
}));

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function Faq() {
    const { classes } = useStyles();
    return (
        <Container size="md">
            <Title align="center">
                Часто задаваемые вопросы
            </Title>

            <Accordion classNames={{label: classes.questionTitle}} variant="contained" mt={32}>
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>Часто задаваемые вопросы</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                    <Accordion.Control>Как бронировать?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                    <Accordion.Control>Как получить скидки?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                    <Accordion.Control>Как пользоваться сайтом?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}