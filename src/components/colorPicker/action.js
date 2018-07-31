export function onColorChange(color, value) {
    return {
        type : 'UPDATE_COLORS',
        color,
        value
    };
}