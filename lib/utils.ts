export const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1); // month is 0-based in JS
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};