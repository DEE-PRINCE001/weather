export const CtoF = (celsius) => {
    return Number(((9/5)*celsius + 32).toFixed(1));
} 

export const FtoC = (fahrenheit) => {
    return (5/9)*fahrenheit - 32;
}

export const KmhtoMph = (Kmh) => {
    return Number((0.621371 * Kmh).toFixed(1));
}

export const MphtoKmh = (Mph) => {
    return 1.60934 * Mph;
}

export const MmtoIn = (Mm) => {
    return Number((Mm/25.4).toFixed(1));
}

export const IntoMm = (In) => {
    return In * 25.4
}