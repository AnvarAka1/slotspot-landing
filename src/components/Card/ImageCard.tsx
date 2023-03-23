import {createStyles, Paper} from '@mantine/core';

const useStyles = createStyles(() => ({
    card: {
        height: 440,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}));

interface ImageCard {
    image: string
}

export function ImageCard({ image }: ImageCard) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            radius={12}
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        />
    );
}