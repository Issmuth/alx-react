export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(IsIndex) {
    if (IsIndex) {
        return "Holberton School";
    }
    return "Holberton School main dashboard";
}