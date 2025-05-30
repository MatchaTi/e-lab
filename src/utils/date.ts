export function getCurrentDate() {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(today);

    return formattedDate;
}

export function formatDate(date: Date) {
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

    return formattedDate;
}

export function formatLetterDate(date: Date) {
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

    return formattedDate;
}

export function getDayName(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
    };

    return new Intl.DateTimeFormat('id-ID', options).format(date);
}

export function formatRequestDate(input: string | Date) {
    const date = typeof input === 'string' ? new Date(input) : input;

    if (isNaN(date.getTime())) return 'Invalid Date';

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    return new Intl.DateTimeFormat('en-GB', options).format(date).replace(',', '');
}

export function formatBirthDate(input: Date) {
    const date = new Date(input);

    if (isNaN(date.getTime())) return 'Invalid Date';

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('id-ID', options).format(date);
}

/**
 * Get date with year/month format
 * Used for file path generation
 */
export function getDateInGMT8() {
    // Get current date
    const date = new Date();

    // Use Intl.DateTimeFormat with 'Asia/Singapore' time zone to ensure GMT+8
    const options = {
        timeZone: 'Asia/Singapore',
        year: 'numeric',
        month: '2-digit',
    } as const;
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const gmt8DateParts = formatter.formatToParts(date);

    // Extract the year and month from formatted parts
    const year = gmt8DateParts.find((part) => part.type === 'year')?.value ?? '';
    const month = gmt8DateParts.find((part) => part.type === 'month')?.value ?? '';

    // Return formatted result in "YYYY/MM"
    return `${year}/${month}`;
}
