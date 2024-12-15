import { useState, useEffect } from "react";
import { Box, Button, Grid, GridItem, Text, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Lab2 = () => {
    const [phrase, setPhrase] = useState('На краю леса сидела маленькая птичка, тихо напевая свою утреннюю песню под лучами восходящего солнца. Её нежный голос плавно переливался в тишине, будто вплетался в первые лучи света. Лес оживал медленно: зашуршали листья, где-то вдали послышался стук дятла. Птичка огляделась, словно прислушиваясь к миру вокруг, и вдруг с лёгким трепетом расправила крылья. Её песня прервалась, сменившись звонким свистом — сигналом к началу нового дня. Взмыв в воздух, она растворилась в золотистом небе, оставляя за собой только эхо утренней мелодии.Высоко в небе птичка кружила над лесом, заглядывая в каждую его тень. На поляне у подножия старого дуба мелькнул заяц, настороженно прислушивающийся к её трелям. В ветвях деревьев заворочались первые белки, пока росистая трава блестела под солнцем. Птичка сделала ещё один круг и, словно выбрав цель, устремилась вниз, к густому кустарнику. Там, среди зелёных ветвей, её ждали трое маленьких птенцов, раскрывающих клювы в нетерпении. Она принесла им свой утренний улов — крошечную гусеницу, начав кормить их с заботливой нежностью.Птенцы тихо пищали, радуясь заботе матери, а птичка, прислушиваясь к шуму леса, снова подняла голову. Лес казался бескрайним, наполненным множеством звуков и движений. Где-то в стороне донёсся треск ветки — это косуля осторожно пробиралась через густую траву. Неподалёку пролетела другая птица, выкрикивая громкие позывные, и птичка ответила ей коротким трелем.Ветра почти не было, и лёгкий аромат утренней росы всё ещё витал в воздухе. Утреннее солнце медленно поднималось выше, окутывая лес мягким золотистым светом. Птичка на мгновение замерла, словно наслаждаясь этим мгновением, затем вновь отправилась в поиски еды. Её полёт был быстрым, но плавным, а маленькие крылья мелькали, как отблески света между деревьями.Она заметила на одной из веток маленькую бабочку, замершую в ожидании тепла. Но птичка пролетела мимо — её внимание привлёк шорох в густых зарослях. Там она нашла ещё одну гусеницу и тут же вернулась к птенцам, которые радостно встретили её.Солнце поднималось всё выше, пробуждая лес окончательно. Вдали зашумел ручей, отражая искры света в своей воде. Лягушки у воды устроили свой собственный утренний концерт, а в воздухе раздалось стрекотание кузнечиков. Лес оживал всеми своими красками и звуками, и птичка чувствовала себя частью этого живого полотна.На соседней поляне, покрытой яркими цветами, трудились пчёлы, собирая нектар. Их жужжание казалось мелодичным аккомпанементом к трелям птиц. Где-то над верхушками деревьев парила хищная птица, лениво оглядывая окрестности. Но маленькая птичка не обращала на неё внимания — она была занята своими заботами.Её птенцы подрастали, и с каждым днём их требовалось кормить всё больше. Птичка знала, что скоро они станут сильнее и начнут учиться летать. Это наполняло её одновременно гордостью и лёгкой тревогой. Впрочем, сегодняшний день только начинался, и у неё было достаточно времени, чтобы выполнить все свои обязанности.Она снова взмыла в воздух, на этот раз устремившись к опушке леса. Здесь, среди травы, её внимание привлёк крошечный сверчок, который тихо прыгал между стеблями. Птичка ловко схватила его и снова вернулась к своим птенцам. Их радостное щебетание звучало как настоящая благодарность.В это время неподалёку начали просыпаться другие обитатели леса. Ёжик, свернувшийся клубком у корней дерева, медленно поднялся и отправился на поиски пищи. Стая воробьёв весело щебетала на соседнем дубе, обсуждая свои утренние планы.В тени под кустами мелькнула лиса, внимательно оглядывающая поляну. Её рыжая шкура ярко выделялась на фоне зелени, но она двигалась осторожно, почти бесшумно. Птичка заметила её и взлетела повыше, наблюдая за её движениями.Лес был полон жизни, но каждый его житель, казалось, следовал своим задачам. Маленькая птичка понимала это лучше всех. Её мир был сложным, но гармоничным, где каждое существо находило своё место.Когда солнце поднялось ещё выше, воздух начал прогреваться, и роса на листьях испарялась. Птичка решила сделать небольшой перерыв, усевшись на верхушке высокого дерева. Оттуда открывался великолепный вид на лес, его поляны и озёра.Она наблюдала, как вдали на горизонте над водой парил орёл, а внизу по тропинке шёл охотник с луком за спиной. Но она не чувствовала страха — этот человек был слишком далёк, чтобы нарушить её утренний ритуал.Птичка тихо защебетала, снова воспроизводя свою мелодию. Теперь её песня звучала громче, словно она хотела поделиться радостью нового дня со всем миром. Её голос разносился над лесом, перекрывая шум ветра и треск веток.Птенцы внизу уснули после утреннего кормления, и птичка знала, что у неё есть немного времени для себя. Она сделала ещё один круг над лесом, наслаждаясь теплом солнечных лучей.День только начинался, и впереди её ждало множество новых встреч, полётов и забот. Но сейчас, в этот миг, она чувствовала себя полностью свободной и счастливой.');
    const [key, setKey] = useState("Круг");
    const [replacementTable, setReplacementTable] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [variantsKeys, setVariantsKeys] = useState([]);


    const [encryptedPhrase, setEncryptedPhrase] = useState('');
    const [decryptedPhrase, setDecryptedPhrase] = useState('');

    const russianAlphabet = [
        "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й",
        "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У",
        "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
    ];

    const frequencyArray = [
        { char: 'О', count: '0.1097' },
        { char: 'Е', count: '0.08450' },
        { char: 'А', count: '0.0801' },
        { char: 'И', count: '0.0735' },
        { char: 'Н', count: '0.0670' },
        { char: 'Т', count: '0.0626' },
        { char: 'С', count: '0.0547' },
        { char: 'Р', count: '0.0473' },
        { char: 'В', count: '0.0454' },
        { char: 'Л', count: '0.0440' },
        { char: 'К', count: '0.0349' },
        { char: 'М', count: '0.321' },
        { char: 'Д', count: '0.0298' },
        { char: 'П', count: '0.0281' },
        { char: 'У', count: '0.0262' },
        { char: 'Я', count: '0.0201' },
        { char: 'Ы', count: '0.0190' },
        { char: 'Ь', count: '0.0174' },
        { char: 'Г', count: '0.0170' },
        { char: 'З', count: '0.0165' },
        { char: 'Б', count: '0.0159' },
        { char: 'Ч', count: '0.0144' },
        { char: 'Й', count: '0.0121' },
        { char: 'Х', count: '0.0097' },
        { char: 'Ж', count: '0.0094' },
        { char: 'Ш', count: '0.0073' },
        { char: 'Ю', count: '0.0064' },
        { char: 'Ц', count: '0.0048' },
        { char: 'Щ', count: '0.0036' },
        { char: 'Э', count: '0.0032' },
        { char: 'Ф', count: '0.0026' },
        { char: 'Ё', count: '0.0004' },
        { char: 'Ъ', count: '0.0003' }
    ];


    /**
     * Функция для создания таблицы подстановок
     * @param alphabet - массив букв русского алфавита
     */
    const createReplacementTable = (alphabet) => {
        const table = [[...russianAlphabet.slice(alphabet.length - 1), ...russianAlphabet.slice(0, alphabet.length - 1)]];
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
                const keyRow = replacementTable[0].indexOf(keyLetter); // Буква блока

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
        // specialCharacters.forEach(({ char, index }) => {
        //     encrypted = encrypted.slice(0, index) + char + encrypted.slice(index);
        // });

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
        // specialCharacters.forEach(({ char, index }) => {
        //     decrypted = decrypted.slice(0, index) + char + decrypted.slice(index);
        // });


        setDecryptedPhrase(decrypted);
    };

    /**
    * Функция взлома без ключа (Метод Касиски)
     */
    const hacking = (encryptedPhrase, syllableLength = 2) => {
        const syllableData = {};

        // Проходим по строке, извлекая слоги длиной syllableLength
        for (let i = 0; i <= encryptedPhrase.length - syllableLength; i++) {
            const syllable = encryptedPhrase.slice(i, i + syllableLength);

            // Если слог уже встречался, добавляем информацию о повторениях и индексах
            if (syllableData[syllable]) {
                syllableData[syllable].count++;
                syllableData[syllable].indices.push(i);
            } else {
                // Если слог встречается первый раз, инициализируем его запись
                syllableData[syllable] = {
                    count: 1,
                    indices: [i]
                };
            }
        }


        const repeatedSyllables = [];
        for (let syllable in syllableData) {
            if (syllableData[syllable].count > 1) {
                repeatedSyllables.push({
                    syllable,
                    count: syllableData[syllable].count,
                    indices: syllableData[syllable].indices
                });
            }
        }

        console.log("Повторяющиеся слоги: ", repeatedSyllables);

        // Получаем разницу индексов между всеми парами индексов
        const indexDifferences = repeatedSyllables.flatMap(item => {
            const indices = item.indices;
            let differences = [];
            for (let i = 0; i < indices.length - 1; i++) {
                // Вычисляем разницу между текущим индексом и следующим
                differences.push(indices[i + 1] - indices[i]);
            }
            return differences;
        });

        console.log("Разницы индексов: ", indexDifferences);

        // Функция для нахождения делителей числа
        const getDivisors = (num) => {
            const divisors = [];
            for (let i = 3; i <= num; i++) {  // Начинаем с 3, чтобы исключить 1 и 2
                if (num % i === 0) {
                    divisors.push(i);
                }
            }
            return divisors;
        };

        // Массив для хранения всех делителей
        const allDivisors = [];

        // Находим все делители для чисел из indexDifferences
        indexDifferences.forEach(diff => {
            if (diff !== null) {
                const divisors = getDivisors(diff);
                allDivisors.push(...divisors);
            }
        });

        console.log(" Все делители: ", allDivisors);

        // Подсчитываем частоту встречаемости делителей
        const divisorFrequency = allDivisors.reduce((acc, divisor) => {
            acc[divisor] = (acc[divisor] || 0) + 1;
            return acc;
        }, {});

        // Сортируем делители по частоте (от наиболее частых к редким)
        const sortedDivisors = Object.entries(divisorFrequency)
            .sort((a, b) => b[1] - a[1]) // Сортировка по частоте
            .map(entry => ({
                divisor: entry[0],
                count: entry[1]
            }));

        console.log("Отсортированный список делителей: ", sortedDivisors);

        // Возьмём наиболее частый делитель
        const topDivisor = Number(sortedDivisors[0].divisor);

        console.log("Наиболее частый делитель: ", topDivisor);

        // Делим зашифрованную фразу на блоки длиной наиболее частого делителя

        const blocks = divideStringIntoBlocks(encryptedPhrase, topDivisor);
        console.log("Блоки длины ключа", blocks);

        const arrayWithLettersByIndexes = countingLettersByIndex(blocks);
        console.log('Буквы и их индексы в блоке', arrayWithLettersByIndexes);

        const grouped = groupLettersByIndex(arrayWithLettersByIndexes);
        console.log('Буквы сгруппированные по индексам', grouped);

        const res = countAndSortLettersByIndex(grouped);
        console.log('Индекс блока и буквы с количеством повторений', res);

        const countLettersInText = printLettersCounts(encryptedPhrase);
        console.log(countLettersInText);

        const frequency = countingFrequencyCiphertext(countLettersInText, encryptedPhrase);
        console.log('Частота', frequency);


        const similarity = calculateCosineSimilarity(frequency, frequencyArray);
        console.log(similarity);

        const minusss = [];
        if (similarity > 0.45) {
            for (let i = 0; i < topDivisor; i++) {
                for (let j = 0; j < frequencyArray.length; j++) {
                    const difference = Math.abs(frequency[i].count - frequencyArray[j].count);
                    minusss.push({ textChar: frequency[i].char, standartChar: frequencyArray[j].char, difference: difference });
                }
            }
        }

        // Группируем сопоставления для каждого символа текста
        const groupedResults = {};
        for (const entry of minusss) {
            if (!groupedResults[entry.textChar]) {
                groupedResults[entry.textChar] = [];
            }
            groupedResults[entry.textChar].push({
                standartChar: entry.standartChar,
                difference: entry.difference
            });
        }

        // Формируем финальный результат с сортировкой от меньшего к большему
        const finalResult = Object.entries(groupedResults).map(([textChar, matches]) => ({
            textChar,
            matches: matches.sort((a, b) => a.difference - b.difference)
        }));

        console.log('Результат с группировкой и сортировкой:', finalResult);

        const keys = generateRowWiseKeys(finalResult);
        setVariantsKeys(keys);
        console.log('Ключи:', variantsKeys);

    }

    const generateRowWiseKeys = (finalResult) => {
        const keys = [];

        // Количество вариантов ограничено количеством символов в `matches` первой строки
        const maxCombinations = finalResult[0].matches.length;

        // Генерация построчных ключей
        for (let i = 0; i < maxCombinations; i++) {
            const key = finalResult.map(entry => {
                // Если текущий `i` выходит за пределы `matches`, берем первый элемент
                return entry.matches[i % entry.matches.length].standartChar;
            });
            keys.push(key.join(''));
        }

        return keys;
    };

    const calculateCosineSimilarity = (frequency, frequencyArray) => {
        // Сопоставляем символы между текстом и стандартной частотой
        const matchedFrequencies = compareFrequencies(frequency, frequencyArray);


        // Создаем вектора A и B
        const vectorA = [];
        const vectorB = [];

        for (const match of matchedFrequencies) {
            vectorA.push(match.countCiphertext);
            vectorB.push(match.countStandart);
        }
        console.log(vectorA, vectorB);


        // Вычисляем скалярное произведение
        const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);

        // Вычисляем нормы векторов
        const normA = Math.sqrt(vectorA.reduce((sum, a) => sum + a ** 2, 0));
        const normB = Math.sqrt(vectorB.reduce((sum, b) => sum + b ** 2, 0));

        // Вычисляем косинусное сходство
        const cosineSimilarity = dotProduct / (normA * normB);

        return cosineSimilarity;
    };

    const compareFrequencies = (calculatedFrequencies, frequencyArray) => {
        const results = [];

        for (let i = 0; i < calculatedFrequencies.length; i++) {
            for (let j = 0; j < frequencyArray.length; j++) {
                if (calculatedFrequencies[i].char === frequencyArray[j].char) {
                    results.push({
                        char: calculatedFrequencies[i].char,
                        countCiphertext: calculatedFrequencies[i].count,
                        countStandart: frequencyArray[j].count,
                    });
                }
            }
        }
        return results;
    };

    /**
     * Функция для подсчета частоты символов
     * @param {*} countLettersInText 
     * @param {*} encryptedPhrase 
     * @returns 
     */
    const countingFrequencyCiphertext = (countLettersInText, encryptedPhrase) => {
        const ciphertextLength = encryptedPhrase.length;
        console.log(ciphertextLength);


        return countLettersInText.map(({ char, count }) => ({ char, count: count / ciphertextLength }));
    };

    /**
     * Функция которая выводит буквы и количество их повторений
     * @param str зашифрованная фраза
     * @returns массив объектов {char: буква, count: количество повторений}
     */
    function printLettersCounts(str) {
        const charCount = {};
        const res = []

        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        for (let char in charCount) {
            res.push({ char, count: charCount[char] });
        }
        return res
    }


    /**
     * Функция, которая выводит индекс буквы в блоке, саму букву и количество ее повторений + сразу же фильтрование от большего к меньшему
     * @param {*} groupedArray 
     * @returns 
     */
    const countAndSortLettersByIndex = (groupedArray) => {
        return groupedArray.map(({ index, letter }) => {
            const letterCounts = letter.reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1; // Подсчитываем количество повторений
                return acc;
            }, {});

            // Преобразуем объект в массив и сортируем по убыванию количества
            const letters = Object.entries(letterCounts)
                .map(([char, count]) => ({ letter: char, count }))
                .sort((a, b) => b.count - a.count); // Сортировка по убыванию

            return { index, letters };
        });
    };

    /**
     * Функция, которая группирует буквы по индексам
     * @param arrayWithLettersByIndexes массив букв с объектами и их индексами
     * @returns grouped объект группированных букв по индексам
     */
    const groupLettersByIndex = (arrayWithLettersByIndexes) => {
        const grouped = {};

        arrayWithLettersByIndexes.forEach((item) => {
            const { letter, index } = item;

            if (!grouped[index]) {
                grouped[index] = [];
            }

            grouped[index].push(letter);
        });

        const result = Object.entries(grouped).map(([key, value]) => ({
            index: parseInt(key, 10),
            letter: value,
        }));

        return result;
    }

    /**
     * Функция для вывода букв по индексам
     * @param blocks массив блоков
     * @returns 
     */
    const countingLettersByIndex = (blocks) => {
        const arrayWithLettersByIndexes = [];
        // const test = ['ЩМЙИ', 'ЛККЭ', 'ЭМРБ']
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            for (let j = 0; j < block.length; j++) {
                arrayWithLettersByIndexes.push({ 'letter': block[j], 'index': j });
            }
        };
        return arrayWithLettersByIndexes
    }

    /**
     * Делим зашифрованную фразу на блоки длиной наиболее частого делителя
     * @param encryptedPhrase зашифрованная фраза
     * @param topDivisor наиболее частый делитель
     * @returns массив блоков
     */
    const divideStringIntoBlocks = (encryptedPhrase, topDivisor) => {
        const text = encryptedPhrase;
        const blockSize = topDivisor;
        let result = [];

        for (let i = 0; i < text.length; i += blockSize) {
            let block = text.substring(i, i + blockSize);
            result.push(block);
        }

        return result;
    }


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
                    <Textarea
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
                <Box >
                    <Text>Зашифрованная фраза: <Textarea defaultValue={encryptedPhrase}></Textarea></Text>

                    <Button colorScheme="teal" onClick={() => { handleDecryption(encryptedPhrase, key) }}>
                        Расшифровать
                    </Button>

                    <Text>Расшифрованная фраза: <Textarea defaultValue={decryptedPhrase}></Textarea></Text>
                    <Button colorScheme="teal" onClick={() => { hacking(encryptedPhrase) }}>
                        Взломать
                    </Button>
                    <Text>Вероятные ключи с сортировкой по частотности: {variantsKeys.join(' ')}</Text>
                </Box>
            )}
        </Box>
    );
};

export default Lab2;
