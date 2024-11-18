import { Box, Text, Heading, Grid, GridItem, Input, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from 'react';

function Lab1() {
    const [phrase, setPhrase] = useState('На краю леса сидела маленькая птичка, тихо напевая свою утреннюю песню под лучами восходящего солнца.');
    const [shift, setShift] = useState(1);
    const [steps, setSteps] = useState(1);
    const [encrypted, setEncrypted] = useState('');
    const [decryptionSteps, setDecryptionSteps] = useState([]);
    const [hackedMessage, setHackedMessage] = useState([]);

    const russianAlphabet = [
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
        'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
    ];

    // Список бан слогов
    const banSyllableList = ["кы", "кя", "кё", "кю", "гы", "гя", "гё", "гю", "чы", "чя", "чю", "шы", "шя", "шю",
        "аь", "аы", "аъ", "вэ", "гф", "гх", "гъ", "гь", "гэ", "ёъ", "ёь", "ёы", "ёэ", "еъ",
        "еь", "еы", "еэ", "ёя", "жф", "жх", "жш", "жщ", "зщ", "иь", "иы", "иъ", "йа", "йё",
        "йж", "ёи", "ёе", "ёё", "ёа", "жй", "зй", "йй", "йь", "йы", "йъ", "йэ", "кй", "кщ",
        "кь", "къ", "лй", "лъ", "лэ", "мй", "мъ", "нй", "оъ", "оы", "оь", "пв", "пг", "пж",
        "пз", "пй", "пъ", "ръ", "сй", "тй", "уъ", "уы", "уь", "фб", "фз", "фж", "фй", "фп",
        "фх", "фц", "фъ", "фэ", "хё", "хж", "хй", "хщ", "хы", "хь", "хю", "хя", "цб", "цё",
        "цж", "цй", "цф", "цх", "цч", "цщ", "цъ", "ць", "ця", "чб", "чг", "чз", "чй", "чп",
        "чф", "чщ", "чъ", "чы", "шд", "шж", "шз", "шй", "шш", "шщ", "шъ", "шы", "щб", "щг",
        "щд", "щж", "щз", "щй", "щп", "щт", "щф", "щх", "щц", "щч", "щш", "щщ", "щъ", "ъа",
        "ъб", "ъв", "ъг", "ъд", "ъж", "ъз", "ъи", "ъй", "ък", "ъл", "ъм", "ън", "ъо", "ъп",
        "ър", "ъс", "ът", "ъу", "ъф", "ъх", "ъц", "ъч", "ъш", "ъщ", "ъъ", "ъы", "ъь", "ъэ",
        "ыа", "ыё", "ыо", "ыф", "ыь", "ыы", "ыъ", "ыэ", "ьа", "ьй", "ьл", "ьу", "ьъ", "ьы",
        "ьъ", "эа", "эе", "эё", "эц", "эч", "эъ", "эы", "эь", "ээ", "эю", "юу", "юь", "юы",
        "юь", "яа", "яё", "яо", "яъ", "яы", "яь", "яэ",
        "жы", "жя", "жю", "хы", "хя", "хё", "хю", "ця", "цё", "цю", "що", "щы", "щя", "щю"]

    /**
     * Функция шифрования
     */
    const handleEncryption = () => {
        //Сдвиг корректировки(чтобы не выхоидть за границы алфавита - 2 сдвига идентично 35 и тд.) 
        let effectiveShift = (shift % russianAlphabet.length + russianAlphabet.length) % russianAlphabet.length;
        let currentPhrase = phrase.toUpperCase();

        //Пробегаемся с нужным количеством шагов
        for (let i = 0; i < steps; i++) {

            currentPhrase = currentPhrase.split('').map(char => {
                const index = russianAlphabet.indexOf(char);
                //Если символ есть в алфавите, ему присваивается index в зависимости от его положения, если нет - -1
                if (index !== -1) {
                    //Шифрование исходной буквы по новому индексу
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
     *  Функция дешифрования
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

    /**
     * Функция взлома
    */
    const hack = () => {
        const hacked = [];
        // Пробуем все возможные сдвиги от 1 до длины алфавита
        for (let i = 1; i < russianAlphabet.length; i++) {
            let decryptedPhrase = encrypted.split('').map(char => {
                const index = russianAlphabet.indexOf(char);
                // Если символ есть в алфавите
                if (index !== -1) {
                    // Дешифруем символ с текущим сдвигом
                    const newIndex = (index - i + russianAlphabet.length) % russianAlphabet.length;
                    return russianAlphabet[newIndex];
                }
                return char;
            }).join('');

            hacked.push({ shift: i, message: decryptedPhrase });
        }

        banFilter(hacked)
    };

    /**
     * Функция фильтрации по бан слогам
     * @param {Array} hacked массив объектов с сообщениями и сдвигами 
     */
    const banFilter = (hacked) => {
        const listOfChackedStrings = hacked;
        const res = [];
        listOfChackedStrings.forEach((string) => {
            let k = 0;
            string.message.split(' ').forEach((word) => {
                word = word.toLowerCase();
                //Проверка, есть ли бан слог в слове
                const hasBanSyllable = banSyllableList.some(ban => word.includes(ban));
                if (hasBanSyllable) {
                    k += 1;
                }
            });

            res.push({
                shift: string.shift,
                message: string.message,
                banSyllableCount: k
            });
        });
        //Фильтр взломанных сообщений по количеству бан слогов от меньшего к большему
        const sortedRes = res.sort((a, b) => a.banSyllableCount - b.banSyllableCount);
        setHackedMessage(sortedRes);
    };

    return (
        <Box padding="4">
            <Box pb={1} display='flex' flexDirection="column" alignItems='center'>
                <Heading>Лабораторная работа No1 - Шифр Цезаря</Heading>
            </Box>
            <Box display='flex' flexDirection="column" alignItems="flex-start">
                <Heading>Доступные буквы для шифрования</Heading>
                <Grid p={1} templateColumns="repeat(6, 1fr)">
                    {russianAlphabet.map((letter, index) => (
                        <GridItem key={index} padding={1}>
                            <Text>{letter}</Text>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <Box display="flex" flexDirection="column" alignItems='center' pt={1}>
                <Field label="Фраза" required>
                    <Input
                        placeholder="Введите фразу для шифрования"
                        variant="subtle"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)}
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

                {encrypted && (<Box mt={4}>
                    <Button onClick={hack}>
                        Взломать шифр
                    </Button>

                    {hackedMessage.length > 0 && (
                        <Box mt={4}>
                            <Text>Возможные расшифровки:</Text>
                            {hackedMessage.map((item, index) => (
                                <Text key={index}>
                                    Сдвиг {item.shift}, Бан слоги {item.banSyllableCount} : {item.message}
                                </Text>
                            ))}
                        </Box>
                    )}
                </Box>)}
            </Box>
        </Box>
    );
}

export default Lab1;
