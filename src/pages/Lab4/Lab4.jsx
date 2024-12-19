import React, { useState } from "react";
import { Box, Button, Text, Input, Textarea, Code } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Lab4 = () => {
    const [phrase, setPhrase] = useState('Bright stars lit up the night sky as the cool breeze whispered through the trees.');
    const [key, setKey] = useState("Key");
    const [encodedData, setEncodedData] = useState("");
    const [decodedData, setDecodedData] = useState("");

    //Создание массива S(от 0 до 255)
    const initArrayS = () => {
        const result = [];
        for (let i = 0; i < 256; i++) {
            result.push(i);
        }
        console.log('arrayS', result);
        return result;
    }
    //Создание массива T(циклично выводит символы ключа)
    const initArrayT = () => {
        const result = [];
        for (let i = 0; i < 256; i++) {
            const k = key[i % key.length].charCodeAt(0);
            result.push(k);
        }
        console.log('arrayT', result);

        return result;
    };

    //Перемешивание массива
    const shuffleArrayS = (key) => {
        const S = initArrayS();
        const T = initArrayT(key);
        let j = 0;

        for (let i = 0; i < 256; i++) {
            j = (j + S[i] + T[i]) % 256;

            [S[i], S[j]] = [S[j], S[i]];
        }
        console.log('S', S);
        return S;
    };

    // Генерация ключевого потока
    const keystreamGeneration = (key, length) => {
        const S = shuffleArrayS(key);
        let i = 0, j = 0;
        const keystream = [];

        // Генерация потока
        for (let n = 0; n < length; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;

            [S[i], S[j]] = [S[j], S[i]];  // Меняем местами S[i] и S[j]
            const K = S[(S[i] + S[j]) % 256];  // Генерация байта ключа

            keystream.push(K);  // Добавляем байт в поток
        }
        console.log('keystream', keystream);

        return keystream;
    };

    //Функция шифрования
    const handleEncryption = () => {
        const Kn = keystreamGeneration(key, phrase.length); // Байт ключевого потока
        const Pn = phrase.split('').map(c => c.charCodeAt(0)); // Преобразуем строку в ASCII коды
        console.log('Kn', Kn);
        console.log('Pn', Pn);

        const encrypted = Pn.map((p, index) => p ^ Kn[index]); // XOR с байтами ключевого потока
        console.log('Encrypted:', encrypted);

        // Преобразуем зашифрованные данные в Base64
        const encryptedText = btoa(String.fromCharCode(...encrypted));
        console.log('Encrypted (Base64):', encryptedText);
        setEncodedData(encryptedText);
    };

    // Функция дешифрования
    const handleDecryption = () => {
        const Kn = keystreamGeneration(key, phrase.length); // Длина должна совпадать с длиной исходной строки
        const En = atob(encodedData).split('').map(c => c.charCodeAt(0)); // Преобразуем Base64 обратно в ASCII коды

        const decrypted = En.map((e, index) => e ^ Kn[index]); // XOR с ключевым потоком
        const decryptedText = String.fromCharCode(...decrypted); // Преобразуем обратно в строку
        console.log('decryptedText', decryptedText);

        setDecodedData(decryptedText);
    };

    const clear = () => {
        setEncodedData('');
        setDecodedData('');
    }

    return (
        <Box>
            <Text textAlign='center' fontSize="xl" fontWeight="bold" m={4}>Лабораторная работа №4. Поточный шифр(RC4)</Text>
            <Box p={4}>
                <Field label="Текст для шифрования" required>
                    <Input
                        variant="subtle"
                        type="text"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)}
                        placeholder="Введите фразу"
                        mb={4}
                    />
                </Field>
                <Field label="Ключ" required>
                    <Input
                        variant="subtle"
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder="Введите ключ"
                    />
                </Field>
            </Box>
            <Box p={4}>
                <>
                    <Button mr={4} onClick={handleEncryption}>Зашифровать</Button>
                    {encodedData !== '' && <Button mr={4} onClick={handleDecryption}>Дешифровать</Button>}
                    {encodedData !== '' && <Button onClick={clear}>Очистить</Button>}
                </>
            </Box>

            <Box>
                <Box p={4}>
                    <Text fontSize="xl">
                        Зашифрованная фраза: <Code>{encodedData || "Текст не зашифрован"}</Code>
                    </Text>
                    {encodedData !== '' && <Text fontSize="xl">
                        Расшифрованная фраза: <Code>{decodedData || "Текст не расшифрован"}</Code>
                    </Text>}
                </Box>
            </Box>
        </Box>
    );
};

export default Lab4;
