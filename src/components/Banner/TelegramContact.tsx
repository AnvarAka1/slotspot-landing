import React from 'react';
import {Box, createStyles, Group, Image, Title, Button, Text} from "@mantine/core";
import telegramIcon from "../../assets/icons/telegram-plane 1.svg";

const useStyles = createStyles((theme) => ({
    container: {
        background: '#4147D5',
        padding: 40
    },
    title: {
        color: theme.colors.light,
        fontWeight: 590,
        fontSize: 32
    },
    text: {
        color: theme.colors.light
    }
}));

function TelegramContact() {
    const { classes } = useStyles();
    return (
        <Box className={classes.container}>
            <Title className={classes.title} align="center">
                Остались вопросы?
            </Title>

            <Group align="center" position="center" mt={24}>
                <Button
                    leftIcon={<Image width={24} height={24} src={telegramIcon} />}
                    radius={12}
                    variant="white"
                    color="dark"
                >
                    Позвонить
                </Button>

                <Text className={classes.text} size={18}>и мы ответим на все ваши вопросы 😇</Text>
            </Group>
        </Box>
    );
}

export default TelegramContact;