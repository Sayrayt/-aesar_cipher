import { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem, Text, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Lab2 = () => {
    const [phrase, setPhrase] = useState('На краю леса сидела маленькая птичка, тихо напевая свою утреннюю песню под лучами восходящего солнца.');
    const [key, setKey] = useState("Ключ");
    const [replacementTable, setReplacementTable] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const [encryptedPhrase, setEncryptedPhrase] = useState('');
    const [decryptedPhrase, setDecryptedPhrase] = useState('');

    const russianAlphabet = [
        "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й",
        "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У",
        "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
    ];

    /**
     * Функция для создания таблицы подстановок
     * @param alphabet - массив букв русского алфавита
     */
    const createReplacementTable = (alphabet) => {
        const table = [[...russianAlphabet.slice(32), ...russianAlphabet.slice(0, 32)]];
        const length = alphabet.length;

        for (let i = 0; i < length; i++) {
            const row = [...alphabet.slice(i), ...alphabet.slice(0, i)];
            table.push(row);
        }

        setReplacementTable(table);
    };

    /**
     * Функция шифрования
     * @param phrase фраза, которую нужно зашифровать
     * @param key ключ
     */
    const handleEncryption = (phrase, key) => {
        const arrayOfChar = [];
        const specialCharacters = [];
        const currentPhrase = phrase.toUpperCase();

        // Оставляем массив без посторонних символов
        currentPhrase.split('').forEach((char, i) => {
            const index = russianAlphabet.indexOf(char);
            if (index !== -1) {
                arrayOfChar.push(char);  // Добавляем только буквы из алфавита
            } else {
                specialCharacters.push({ char, index: i });  // Запоминаем спецсимволы (например, пробелы, запятые, точки)
            }
        });

        // Делим на блоки в зависимости от длины ключа
        const blocks = [];
        for (let i = 0; i < arrayOfChar.length; i += key.length) {
            blocks.push(arrayOfChar.slice(i, i + key.length));
        }

        // Шифруем каждый блок
        const encryptedBlocks = blocks.map(block =>
            block.map((letter, index) => {
                const keyLetter = key[index % key.length].toUpperCase(); // Буква из ключа
                const keyRow = replacementTable[0].indexOf(keyLetter);

                // Ищем строку с keyLetter в первой строке replacementTable
                for (let row = 1; row < replacementTable.length; row++) {
                    if (replacementTable[row][0] === letter) {
                        return replacementTable[row][keyRow];  // Возвращаем пересечение столбца keyRow и строки row
                    }
                }
                return letter;  // Если буква не найдена в таблице, возвращаем её без изменений
            })
        );

        let encrypted = encryptedBlocks.map(block => block.join('')).join('');

        // Восстанавливаем спецсимволы в исходные позиции
        specialCharacters.forEach(({ char, index }) => {
            encrypted = encrypted.slice(0, index) + char + encrypted.slice(index);
        });

        setEncryptedPhrase(encrypted);
    };

    /**
     * Функция дешифрования
     * @param encryptedPhrase зашифрованная фраза
     * @param key ключ
     */
    const handleDecryption = (encryptedPhrase, key) => {
        const arrayOfChar = [];
        const specialCharacters = [];

        // Оставляем массив без посторонних символов
        encryptedPhrase.split('').forEach((char, i) => {
            const index = russianAlphabet.indexOf(char);
            if (index !== -1) {
                arrayOfChar.push(char);  // Добавляем только буквы из алфавита
            } else {
                specialCharacters.push({ char, index: i });  // Запоминаем спецсимволы
            }
        });

        // Делим зашифрованную фразу на блоки длиной ключа
        const blocks = [];
        for (let i = 0; i < arrayOfChar.length; i += key.length) {
            blocks.push(arrayOfChar.slice(i, i + key.length));
        }

        // Дешифруем каждый блок
        const decryptedBlocks = blocks.map(block =>
            block.map((encryptedLetter, index) => {
                const keyLetter = key[index % key.length].toUpperCase();  // Буква из ключа
                const keyRow = replacementTable[0].indexOf(keyLetter);

                // Находим строку, соответствующую букве ключа, в таблице подстановок
                for (let row = 1; row < replacementTable.length; row++) {
                    if (replacementTable[row][keyRow] === encryptedLetter) {
                        return replacementTable[row][0];  // Возвращаем первую букву строки
                    }
                }
                return encryptedLetter;  // Если буква не найдена, возвращаем её без изменений
            })
        );

        let decrypted = decryptedBlocks.map(block => block.join('')).join('');

        // Восстанавливаем спецсимволы в исходные позиции
        specialCharacters.forEach(({ char, index }) => {
            decrypted = decrypted.slice(0, index) + char + decrypted.slice(index);
        });

        setDecryptedPhrase(decrypted);
    };

    useEffect(() => {
        createReplacementTable(russianAlphabet);
    }, []);

    return (
        <Box p={4}>
            <Text textAlign='center' fontSize="xl" fontWeight="bold" mb={4}>
                Лабораторная работа N2 Таблица подстановок (Шифр Виженера)
            </Text>

            <Box pb={4}>
                <Button onClick={() => setIsOpen(!isOpen)}> Открыть таблицу подстановок</Button>
            </Box>

            {isOpen && (
                <Grid templateColumns={`repeat(${russianAlphabet.length}, auto)`} gap={0.1}>
                    {replacementTable.map((row, rowIndex) =>
                        row.map((letter, colIndex) => (
                            <GridItem
                                key={`cell-${rowIndex}-${colIndex}`}
                                textAlign="center"
                                border={`1px solid ${colIndex === 0 || rowIndex === 0 ? "white" : "transparent"}`}
                            >
                                <Text fontSize="sm">{letter}</Text>
                            </GridItem>
                        ))
                    )}
                </Grid>
            )}

            <Box display="flex" flexDirection="column" alignItems='center' pt={4}>
                <Field label="Фраза" required>
                    <Input
                        placeholder="Введите фразу для шифрования"
                        variant="subtle"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)}
                        mb={5}
                    />
                </Field>
                <Field label="Ключ" required>
                    <Input
                        placeholder="Введите ключ"
                        variant="subtle"
                        mb={5}
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        type="text"
                    />
                </Field>
            </Box>

            <Box>
                <Button colorScheme="teal" onClick={() => { handleEncryption(phrase, key) }}>
                    Зашифровать
                </Button>
            </Box>
            {encryptedPhrase && (
                <Box>
                    <Text>Зашифрованная фраза: {encryptedPhrase}</Text>
                    <Button colorScheme="teal" onClick={() => { handleDecryption(encryptedPhrase, key) }}>
                        Расшифровать
                    </Button>
                    <Text>Расшифрованная фраза: {decryptedPhrase}</Text>
                </Box>
            )}
        </Box>
    );
};

export default Lab2;
