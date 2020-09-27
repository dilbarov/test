import {CONTROL_NUMBERS, INN_DIGITS_LENGTH} from "./constants/constants";

export const StartPositionType = {
    UL_N1: 2,
    FL_N1: 1,
    FL_N2: 0
};

export const getFirstControlNumberForInn = inn => {
    return inn.length === INN_DIGITS_LENGTH.entity
        ? inn[INN_DIGITS_LENGTH.entity - 1]
        : inn[INN_DIGITS_LENGTH.individual - 2];
};

export const getSecondControlNumberForInn = inn => {
    if (inn.length !== INN_DIGITS_LENGTH.individual) {
        throw new Error(
            `Количество символов ИНН физического лица несоотвествует: ожидается ${INN_DIGITS_LENGTH.individual}`
        );
    }
    return inn[INN_DIGITS_LENGTH.individual - 1];
};

export const getCurrentControlNumber = (inn, controlSumType) => {
    if (controlSumType === "UL_N1" || controlSumType === "FL_N1") {
        return getFirstControlNumberForInn(inn);
    }
    return getSecondControlNumberForInn(inn);
};

export const checkExpressionForNumber = expression => {
    return /^(?!00)\d+$/.test(expression);
};

export const validateInn = inn => {
    if (inn.length === INN_DIGITS_LENGTH.individual) {
        return checkControlSumInn(inn, "FL_N1") && checkControlSumInn(inn, "FL_N2");
    }
    return checkControlSumInn(inn, "UL_N1");
};

export const checkControlSumInn = (inn, controlSumType) => {
    let currentControlSum = 0;

    const controlNumber = getCurrentControlNumber(inn, controlSumType);
    const startPosition = StartPositionType[controlSumType];

    for (
        let index = 0;
        index < inn.length && startPosition + index < CONTROL_NUMBERS.length;
        index += 1
    ) {
        currentControlSum +=
            Number(inn[index]) * CONTROL_NUMBERS[startPosition + index];
    }

    const currentControlNumber =
        currentControlSum % 11 > 9
            ? (currentControlSum % 11) % 10
            : currentControlSum % 11;

    return currentControlNumber === Number(controlNumber);
};

export const validateKpp = (kpp) => {
    const check = `${kpp[4]}${kpp[5]}`
    return (
        /^\d{9}$/.test(kpp) &&
        check !== `50` &&
        check !== `01` &&
        check !== `45`
    );
};
