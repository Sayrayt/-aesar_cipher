import React, { useState } from "react";
import { Box, Button, Text, Input, Code } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Lab5 = () => {
    const [p, setP] = useState(29);
    const [q, setQ] = useState(19);
    const [e, setE] = useState(0);
    const [d, setD] = useState(0);
    const [n, setN] = useState(0);
    const [phrase, setPhrase] = useState('Bright stars lit up the night sky as the cool breeze whispered through the trees.');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');

    // Функция для вычисления функции Эйлера
    const eulerFunction = (p, q) => {
        const n = p * q;  // n = p * q
        setN(n);
        const Fn = (p - 1) * (q - 1);  // Функция Эйлера для простых чисел p и q
        return Fn;
    };

    // Функция для вычисления наибольшего общего делителя (НОД) двух чисел
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Функция для выбора публичного экспонента e
    const choosePublicExponent = () => {
        const phi = eulerFunction(p, q);
        let estimatedE = 3;

        // Проверка, что gcd(estimatedE, φ(n)) = 1
        while (gcd(estimatedE, phi) !== 1) {
            estimatedE += 1;
        }

        setE(estimatedE); // Обновляем состояние после завершения вычислений
    };

    const calculatingThePrivateExponentD = () => {
        const phi = eulerFunction(p, q);
        const gcdExtended = (a, b) => {
            if (b === 0) {
                return { gcd: a, x: 1, y: 0 };
            }
            const { gcd, x: x1, y: y1 } = gcdExtended(b, a % b);
            return { gcd, x: y1, y: x1 - Math.floor(a / b) * y1 };
        };

        // Находим обратное по модулю значение для e
        const { gcd, x } = gcdExtended(e, phi);
        if (gcd !== 1) {
            console.error("Обратное по модулю не существует!");
            return;
        }

        // Приватный ключ d
        const d = (x % phi + phi) % phi;
        setD(d); // Сохраняем значение d в состояние
    };

    // Функция для генерации случайного большого простого числа
    function generateLargePrime(bits) {
        const min = Math.pow(2, bits - 1); // Минимальное значение: 2^(bits-1)
        const max = Math.pow(2, bits) - 1; // Максимальное значение: 2^bits - 1

        while (true) {
            let candidate = Math.floor(Math.random() * (max - min)) + min; // Генерация случайного числа в диапазоне
            if (isPrime(candidate)) return candidate; // Проверяем, простое ли число
        }
    }

    // Функция для проверки простоты числа (тест Миллера-Рабина)
    function isPrime(num, iterations = 40) {
        if (num < 2) return false;
        if (num % 2 === 0) return num === 2;

        let s = 0, d = num - 1;
        while (d % 2 === 0) {
            d /= 2;
            s += 1;
        }

        for (let i = 0; i < iterations; i++) {
            const a = 2 + Math.floor(Math.random() * (num - 4)); // Случайное основание в диапазоне [2, num-2]
            let x = modExp(a, d, num);
            if (x === 1 || x === num - 1) continue;

            let composite = true;
            for (let r = 0; r < s - 1; r++) {
                x = modExp(x, 2, num);
                if (x === num - 1) {
                    composite = false;
                    break;
                }
            }
            if (composite) return false;
        }

        return true;
    }

    // Функция для быстрого возведения в степень по модулю
    function modExp(base, exp, mod) {
        let result = 1;
        base = base % mod;
        while (exp > 0) {
            if (exp % 2 === 1) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = Math.floor(exp / 2);
        }
        return result;
    }

    const clear = () => {
        setE(0);
        setD(0);
    };

    const handleGeneratePrimes = () => {
        const generatedP = generateLargePrime(5); // Генерация простого числа p
        console.log('generatedP', generatedP);
        const generatedQ = generateLargePrime(5); // Генерация простого числа q
        console.log('generatedQ', generatedQ);

        setP(generatedP); // Устанавливаем p как число
        setQ(generatedQ); // Устанавливаем q как число
    };

    // (char.charCodeAt(0)) ** e % n).toString()

    const handleEncryption = () => {

        setEncryptedMessage(phrase
            .split('')
            .map((char) => (BigInt(char.charCodeAt(0)) ** BigInt(e) % BigInt(n)).toString())
            .join(','))
    };
    console.log('e', e, typeof (e));
    console.log('n', n, typeof (n));

    const handleDecryption = () => {

        setDecryptedMessage(encryptedMessage
            .split(',')
            .map((char) => String.fromCharCode(Number(BigInt(char) ** BigInt(d) % BigInt(n))))
            .join(''));
        console.log('decryptedMessage', decryptedMessage);
        console.log('encryptedMessage', encryptedMessage);


    };


    return (
        <Box>
            <Text textAlign="center" fontSize="xl" fontWeight="bold" m={4}>
                Лабораторная работа №5. Шифр RSA
            </Text>
            <Button m={4} onClick={handleGeneratePrimes}>
                Сгенерировать простые числа
            </Button>
            <Box p={4}>
                <Field label="Простоe число p" required>
                    <Input
                        variant="subtle"
                        value={p.toString()} // Преобразуем число в строку для отображения
                        onChange={(e) => setP(Number(e.target.value))}
                        placeholder="Введите число p"
                        mb={4}
                    />
                </Field>
                <Field label="Простое число q" required>
                    <Input
                        variant="subtle"
                        value={q.toString()} // Преобразуем число в строку для отображения
                        onChange={(e) => setQ(Number(e.target.value))}
                        placeholder="Введите число q"
                        mb={4}
                    />
                </Field>
            </Box>

            <Box p={4}>
                <Button mr={4} onClick={choosePublicExponent}>Вычислить публичный ключ</Button>
                {e ? (
                    <>
                        <Button mr={4} onClick={calculatingThePrivateExponentD}>Вычислить приватный ключ</Button>
                        <Button onClick={clear}>Очистить</Button>
                    </>
                ) : null}
            </Box>

            <Box display='flex' p={4}>
                {e ? (
                    <Text pr={20} fontSize="3xl">
                        Публичная ключ:
                        <Text fontSize="xl">
                            Публичная экспонента e: <Code>{e}</Code> <br />
                            Произведение n: <Code>{n}</Code>
                        </Text>
                    </Text>
                ) : null}

                {e && d ? (
                    <Text fontSize="3xl">
                        Приватный ключ:
                        <Text fontSize="xl">
                            Приватная экспонента d: <Code>{d}</Code> <br />
                            Произведение n: <Code>{n}</Code>
                        </Text>
                    </Text>
                ) : null}
            </Box>
            <Box>
                {e && d ? (
                    <>
                        <Box p={4}>
                            <Field label="Введите текст для шифрования" required>
                                <Input
                                    variant="subtle"
                                    value={phrase}
                                    onChange={(e) => setPhrase(e.target.value)}
                                    placeholder="Введите фразу"
                                />
                            </Field>
                        </Box>

                        <Box wordBreak="break-word" p={4}>
                            <Button onClick={handleEncryption}>Зашифровать сообщение</Button>
                            {encryptedMessage != '' ? (<Text fontSize="lg" mt={4}>
                                Зашифрованное сообщение: <Code p={4}>{encryptedMessage}</Code>
                            </Text>) : null}

                        </Box>

                        {encryptedMessage != '' ? (
                            <Box p={4}>
                                <Button onClick={handleDecryption}>Расшифровать сообщение</Button>
                                {decryptedMessage != "" ? (<Text fontSize="lg" mt={4}>
                                    Расшифрованное сообщение:<br /> <Code p={4}>{decryptedMessage}</Code>
                                </Text>) : null}

                            </Box>
                        ) : null}
                    </>
                ) : null}

            </Box>
        </Box>

    );
};

export default Lab5;
