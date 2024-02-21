export const useFirstUpperCase = (value: string) => {
    const UpperChar = value[0].toUpperCase();
    const UpperString = UpperChar + value.slice(1)

    return UpperString;
}