import { Box, Text, Heading, Grid, GridItem, Input, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from 'react';

function Lab1() {
    const [phrase, setPhrase] = useState('На краю леса сидела маленькая птичка, тихо напевая свою утреннюю песню под лучами восходящего солнца.');
    const [shift, setShift] = useState(1);
    const [steps, setSteps] = useState(1);
    const [encrypted, setEncrypted] = useState('');
    const [decryptionSteps, setDecryptionSteps] = useState([]);

    const russianAlphabet = [
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
        'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
    ];

    /**
     * Функция шифрования
     */
    const handleEncryption = () => {
        let effectiveShift = (shift % russianAlphabet.length + russianAlphabet.length) % russianAlphabet.length;
        let currentPhrase = phrase.toUpperCase();
        for (let i = 0; i < steps; i++) {
            currentPhrase = currentPhrase.split('').map(char => {
                const index = russianAlphabet.indexOf(char);
                if (index !== -1) {
                    const newIndex = (index + effectiveShift) % russianAlphabet.length;
                    return russianAlphabet[newIndex];
                }
                return char;
            }).join('');
        }
        setEncrypted(currentPhrase);
        setDecryptionSteps([]);
    };

    /**
     * Функция дешифрования
     */
    const handleDecryption = () => {
        let effectiveShift = (shift % russianAlphabet.length + russianAlphabet.length) % russianAlphabet.length;
        let currentPhrase = encrypted;
        const stepsArray = [];

        for (let i = 0; i < steps; i++) {
            currentPhrase = currentPhrase.split('').map(char => {
                const index = russianAlphabet.indexOf(char);
                if (index !== -1) {
                    const newIndex = (index - effectiveShift + russianAlphabet.length) % russianAlphabet.length;
                    return russianAlphabet[newIndex];
                }
                return char;
            }).join('');
            stepsArray.push(currentPhrase);
        }
        setDecryptionSteps(stepsArray);
    };

    const hacking = () => {
        const mostFrequentRussianLetter = 'О';
    const letterFrequency = {};

    // Подсчет частоты каждой буквы в зашифрованном тексте
    encrypted.split('').forEach(char => {
        if (russianAlphabet.includes(char)) {
            letterFrequency[char] = (letterFrequency[char] || 0) + 1;
        }
    });

    // Нахождение наиболее часто встречающейся буквы в зашифрованном тексте
    let mostFrequentEncryptedLetter = Object.keys(letterFrequency).reduce((a, b) => 
        letterFrequency[a] > letterFrequency[b] ? a : b
    );

    // Вычисление предполагаемого сдвига
    const shift = (russianAlphabet.indexOf(mostFrequentEncryptedLetter) - 
                   russianAlphabet.indexOf(mostFrequentRussianLetter) + russianAlphabet.length) % russianAlphabet.length;

    // Расшифровка с использованием найденного сдвига
    const decryptedPhrase = encrypted.split('').map(char => {
        const index = russianAlphabet.indexOf(char);
        if (index !== -1) {
            const newIndex = (index - shift + russianAlphabet.length) % russianAlphabet.length;
            return russianAlphabet[newIndex];
        }
        return char;
    }).join('');

    setDecryptionSteps([`Предполагаемый сдвиг: ${shift}`, `Расшифрованная фраза: ${decryptedPhrase}`]);

    }

    return (
        <Box padding="4">
            <Box pb={5} display='flex' flexDirection="column" alignItems='center'>
                <Heading>Лабораторная работа No1 - Шифр Цезаря</Heading>
            </Box>
            <Box display='flex' flexDirection="column" alignItems="flex-start">
                <Heading>Доступные буквы для шифрования</Heading>
                <Grid p={2} templateColumns="repeat(6, 1fr)">
                    {russianAlphabet.map((letter, index) => (
                        <GridItem key={index} padding={1}>
                            <Text>{letter}</Text>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <Box display="flex" flexDirection="column" alignItems='center' pt={5}>
                <Field label="Фраза" required>
                    <Input
                        placeholder="Введите фразу для шифрования"
                        variant="subtle"
                        value={phrase}
                        onChange={(e) => setPhrase((e.target.value))}
                        mb={5}
                    />
                </Field>
                <Field label="Сдвиг" required>
                    <Input
                        placeholder="Введите сдвиг"
                        variant="subtle"
                        mb={5}
                        value={shift}
                        onChange={(e) => setShift(Number(e.target.value))}
                        type="number"
                    />
                </Field>
                <Field label="Количество шагов" required>
                    <Input
                        placeholder="Введите количество шагов"
                        variant="subtle"
                        mb={5}
                        value={steps}
                        onChange={(e) => setSteps(Number(e.target.value))}
                        type="number"
                        min="1"
                        step="1"
                    />
                </Field>
                <Button colorScheme="teal" onClick={handleEncryption}>
                    Зашифровать
                </Button>
                {encrypted && (
                    <>
                        <Text mt={4}>
                            Зашифрованная фраза: {encrypted}
                        </Text>
                        <Button onClick={handleDecryption} mt={2}>
                            Расшифровать
                        </Button>
                        <Box mt={2}>
                            <Button onClick={hacking}>
                                Взломать
                            </Button>
                        </Box>
                    </>
                )}

                {decryptionSteps.length > 0 && (
                    <Box mt={4}>
                        <Text>Шаги расшифровки:</Text>
                        {decryptionSteps.map((step, index) => (
                            <Text key={index}>{index + 1}: {step}</Text>
                        ))}
                    </Box>
                )}



            </Box>
        </Box>
    );
}

export default Lab1;
