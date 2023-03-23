import { useState, useRef } from 'react';
import {Autocomplete, Container, createStyles, Image, Loader} from '@mantine/core';
import searchIcon from "../../assets/icons/search-circle.svg"


const useStyles = createStyles((theme) => ({
    input: {
        padding: 24,
        border: '1px solid #000'
    }
}));


export function SearchAutocompleteInput() {
    const { classes } = useStyles();
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const handleChange = (val: string) => {
        window.clearTimeout(timeoutRef.current);
        setValue(val);
        setData([]);

        if (val.trim().length === 0 || val.includes('@')) {
            setLoading(false);
        } else {
            setLoading(true);
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
                setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
            }, 1000);
        }
    };
    return (
        <Container size={1200}>
            <Autocomplete
                value={value}
                data={data}
                radius={12}
                mt={16}
                onChange={handleChange}
                icon= {<Image src={searchIcon}/>}
                rightSection={loading ? <Loader size={16} /> : null}
                placeholder="Поиск локации"
                classNames={{ input : classes.input}}
            />
        </Container>
    );
}