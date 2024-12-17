import React, { useState } from "react";
import { Box, Button, Text, Input, Textarea, Code } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Lab3_hash = () => {
    const [data, setData] = useState('Фраза, которую нужно зашифровать');

    const [key, setKey] = useState("Abcd168Kfjsmvk463dvvmaksdkAlvks6");
    const [encodedData, setEncodedData] = useState("");
    const [decodedData, setDecodedData] = useState("");
    const [hash, setHash] = useState("");

    /**
     * Функция хэширования сообщений Hi = E_Hi-1(Mi) + Mi
     */
    const handleHashing = () => {
        const keyBytes = new TextEncoder().encode(key);
        const subkeys = generateKeys(keyBytes);
        let dataBytes = new TextEncoder().encode(data);
        dataBytes = addPadding(dataBytes);
        let Hi = new Uint8Array(8); // H0 инициализируем нулевым блоком

        for (let i = 0; i < dataBytes.length; i += 8) {
            const Mi = dataBytes.slice(i, i + 8);
            const E_Hi = encodeBlock(Mi, subkeys);

            // Суммирование по модулю 2
            for (let j = 0; j < 8; j++) {
                Hi[j] ^= E_Hi[j] ^ Mi[j];
            }
        }

        // Конвертация в HEX
        setHash(Array.from(Hi).map(b => b.toString(16).padStart(2, '0')).join(''));
    };

    /**
     * Функция шифрования
     */
    const handleEncryption = () => {
        const keyBytes = new TextEncoder().encode(key);
        const subkeys = generateKeys(keyBytes);
        let dataBytes = new TextEncoder().encode(data);

        dataBytes = addPadding(dataBytes);

        const result = new Uint8Array(dataBytes.length);

        // Шифруем данные блоками по 8 байтов
        for (let i = 0; i < Math.floor(dataBytes.length / 8); i++) {
            const block = dataBytes.slice(i * 8, (i + 1) * 8);
            const encodedBlock = encodeBlock(block, subkeys);
            result.set(encodedBlock, i * 8);
        }

        // Преобразование в строку с помощью кодировки Base64
        setEncodedData(btoa(String.fromCharCode.apply(null, result)));
    };

    // Подстановочная таблица
    const SubstitutionBox = Array(8)
        .fill()
        .map(() => Array(16).fill().map((_, i) => i));

    /**
     * Функция генерации ключей
     * @param key ключ
     * @returns массив ключей
     */
    const generateKeys = (key) => {
        //Ключ должен быть длиной 32 символа
        if (key.length !== 32) {
            throw new Error("Ключ неверной длины");
        }

        const subkeys = [];
        for (let i = 0; i < 8; i++) {
            subkeys[i] = new DataView(key.buffer).getUint32(4 * i, true);
        }

        return subkeys;
    };
    /**
     * Функция для подстановки входного значения
     * @param {*} value 
     * @returns 
     */
    const substitution = (value) => {
        return Array.from({ length: 8 }, (_, i) =>
            SubstitutionBox[i][(value >> (4 * i)) & 0x0f] << (4 * i)
        ).reduce((acc, curr) => acc | curr, 0);
    };

    /**
     * Функция, которая добавляет паддинг(увеличение двоичной записи до кратности 8)
     * @param {} data 
     * @param {*} blockSize 
     * @returns 
     */
    const addPadding = (data, blockSize = 8) => {
        const paddingLength = blockSize - (data.length % blockSize);
        return new Uint8Array([...data, ...new Array(paddingLength).fill(paddingLength)]);
    };

    /**
     * Функция удаления паддинга
     * @param {*} data 
     * @returns 
     */
    const removePadding = (data) => {
        // Извлекаем длину паддинга из последнего байта
        const paddingLength = data.at(-1);

        // Проверяем, что длина паддинга допустима
        if (paddingLength < 1 || paddingLength > data.length) {
            throw new Error("Неверная длина паддинга");
        }

        // Возвращаем данные без паддинга
        return data.slice(0, -paddingLength);
    };

    /**
 * Универсальная функция для шифрования и расшифровки блока
 * @param {Uint8Array} block - Блок данных длиной 8 байтов
 * @param {Uint32Array} keys - Ключи
 * @param {Function} getKeyIndex - Функция для определения индекса ключа
 * @returns {Uint8Array} - Обработанный блок
    */
    const processBlock = (block, keys, getKeyIndex) => {
        // Проверяем длину блока
        if (block.length !== 8) {
            throw new Error("Блок должен содержать ровно 8 байтов.");
        }

        // Разделяем блок на две 32-битные части
        const view = new DataView(block.buffer);
        let N1 = view.getUint32(0, true); // Старшая половина
        let N2 = view.getUint32(4, true); // Младшая половина

        // Основной цикл обработки (32 итерации)
        for (let i = 0; i < 32; i++) {
            const keyIndex = getKeyIndex(i); // Определяем индекс ключа
            let s = (N1 + keys[keyIndex]) >>> 0; // Модуль 2^32
            s = substitution(s); // Подстановка
            s = (s << 11) | (s >>> 21); // Циклический сдвиг влево на 11 бит
            s ^= N2; // XOR

            // Обмен значениями между N1 и N2
            [N1, N2] = i < 31 ? [s, N1] : [N1, s];
        }

        // Создаём и возвращаем обработанный блок
        const output = new ArrayBuffer(8);
        const outputView = new DataView(output);
        outputView.setUint32(0, N1, true);
        outputView.setUint32(4, N2, true);

        return new Uint8Array(output);
    };

    /**
     * Функция шифрования блока
     * @param {Uint8Array} block - Блок данных длиной 8 байтов
     * @param {Uint32Array} keys - Ключи
     * @returns {Uint8Array} - Зашифрованный блок
     */
    const encodeBlock = (block, keys) => {
        return processBlock(block, keys, (i) => (i < 24 ? i % 8 : 7 - (i % 8)));
    };

    /**
     * Функция расшифровки блока
     * @param {Uint8Array} block - Блок данных длиной 8 байтов
     * @param {Uint32Array} keys - Ключи
     * @returns {Uint8Array} - Расшифрованный блок
     */
    const decodeBlock = (block, keys) => {
        return processBlock(block, keys, (i) => (i < 8 ? i : 31 - i) % 8);
    };

    const handleDecryption = () => {
        const keyBytes = new TextEncoder().encode(key);
        const subkeys = generateKeys(keyBytes);

        // Декодируем данные
        const dataBytes = new Uint8Array(atob(encodedData).split('').map(char => char.charCodeAt(0)));

        // Расшифровываем данные
        const result = new Uint8Array(dataBytes.length);
        for (let i = 0; i < dataBytes.length; i += 8) {
            const block = dataBytes.slice(i, i + 8);
            result.set(decodeBlock(block, subkeys), i);
        }

        // Возвращаем данные без паддинга
        setDecodedData(new TextDecoder().decode(removePadding(result)));
    };

    const handleClear = () => {
        setEncodedData('');
        setDecodedData('');
        setHash('');
    }

    return (
        <Box>
            <Text textAlign='center' fontSize="xl" fontWeight="bold" m={4}>Лабораторная работа №3 и №6. Стандарт шифрования ГОСТ 28147-89 + функция хэширования</Text>
            <Box p={4}>
                <Field label="Текст для шифрования" required>
                    <Input
                        variant="subtle"
                        type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Введите фразу"
                        mb={4}
                    />
                </Field>
                <Field label="Ключ длиной 32 символа" required>
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
                <Button mr={4} onClick={handleEncryption}>Зашифровать</Button>
                {encodedData && (< ><Button mr={4} onClick={handleDecryption}>Расшифровать</Button>
                    <Button onClick={handleClear}>Сбросить</Button></>)}

            </Box>

            <Box p={4}>
                <Text fontSize="xl">Зашифрованная фраза:<Code colorScheme="green" ml={2}>{encodedData || "Ещё не зашифровано"}</Code></Text>
                {decodedData && (<Text fontSize="xl">Расшифрованная фраза:<Code colorScheme="green" ml={2}>{decodedData}</Code></Text>)}

            </Box>
            {encodedData && (
                <Box>
                    <Box p={4}>
                        <Button mr={4} onClick={handleHashing}>Вычислить хэш</Button>
                    </Box>

                    <Box p={4}>
                        <Text fontSize="xl">
                            Хэш:
                            <Code colorScheme="green" ml={2}>{hash || "Ещё не вычислено"}</Code>
                        </Text>

                    </Box>
                </Box>
            )}


        </Box >
    );
};

export default Lab3_hash;
