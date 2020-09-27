import {CONTROL_NUMBERS} from "../tools/constants/constants";

const getRandomNumber = (minNumber = 0) => {
    return Math.floor(Math.random() * (10 - minNumber)) + minNumber;
}

const getControlNumber = (controlNumberType, innNumbers) => {
    let startPosition;
    switch (controlNumberType) {
        case "ul_n1":
            startPosition = 2;
            break;
        case "fl_n1":
            startPosition = 1;
            break;
        default:
            startPosition = 0;
            break;
    }
    const controlSum = innNumbers.reduce((prevNum, currentNumber, index) => prevNum + currentNumber * CONTROL_NUMBERS[index + startPosition], 0);
    const controlNumber = controlSum % 11;
    return (controlNumber % 11 > 9) ? controlNumber % 10 : controlNumber;
}

/**
 * Принимает type который может быть ul или fl
 * @param type
 */
export const generateInn = (type) => {

    const inn = [];
    const firstLength = type === 'ul' ? 9 : 10;

    for (let i = 0; i < firstLength; i += 1) {
        const innNumber = getRandomNumber(i === 1 && inn[0] === 0 ? 1 : 0)
        inn.push(innNumber);
    }

    if (type === 'ul') {
        inn.push(getControlNumber('ul_n1', inn))
    } else {
        inn.push(getControlNumber('fl_n1', inn));
        inn.push(getControlNumber('fl_n2', inn));
    }

    return inn.join('');
};

/**
 * Генерирует
 * @returns {string}
 */
export const generateKpp = () => {
    const kpp = [];

    for (let i = 0; i < 9; i += 1) {
        const kppNumber = getRandomNumber(i === 1 && kpp[0] === 0 ? 1 : 0);
        kpp.push(kppNumber);
    }

    const checkNumbers = `${kpp[4]}${kpp[5]}`;

    if (checkNumbers === `50` || checkNumbers === `01` || checkNumbers === `45`) {
        kpp[4] += 1;
    }
    return kpp.join('');
};


