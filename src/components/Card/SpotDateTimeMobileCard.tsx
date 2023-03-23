import {Carousel} from '@mantine/carousel';
import {useMediaQuery} from '@mantine/hooks';
import {Box, Button, Card, Text, useMantineTheme} from '@mantine/core';

interface SpotDateTimeMobileCardProps {
    values: string[],
    cardTitle: string
}


export function SpotDateTimeMobileCard({values, cardTitle}: SpotDateTimeMobileCardProps) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = values.map((item: string) => (
        <Carousel.Slide p={0}>
            <Button variant="outline" color="dark" radius={50}>
                {item}
            </Button>
        </Carousel.Slide>
    ));

    return (
        <Box component="div" mt={24}>
            <Text size={16} weight={700} component="p">
                {cardTitle}
            </Text>
            <Card.Section>
                <Carousel
                    withControls={false}
                    slideSize="20%"
                    breakpoints={[{maxWidth: 'sm', slideSize: '15%', slideGap: 12}]}
                    align="start"
                    mt={24}
                    slidesToScroll={mobile ? 1 : 2}
                >
                    {slides}
                </Carousel>
            </Card.Section>
        </Box>
    );
}