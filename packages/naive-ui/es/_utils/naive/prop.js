export function largerSize(size) {
    switch (size) {
        case 'tiny':
            return 'small';
        case 'small':
            return 'medium';
        case 'medium':
            return 'large';
        case 'large':
            return 'huge';
    }
}
export function smallerSize(size) {
    switch (size) {
        case 'tiny':
            return 'mini';
        case 'small':
            return 'tiny';
        case 'medium':
            return 'small';
        case 'large':
            return 'medium';
        case 'huge':
            return 'large';
    }
    throw Error(`${size} has no smaller size.`);
}
