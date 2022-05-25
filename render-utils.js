export function renderCLass(Class) {
    const div = document.createElement('div');
    div.classList.add('class');
    const h2 = document.createElement('h2');
    h2.textContent = Class.name;
    div.append(h2);
    return div;
}
export function renderOption(Class) {
    const option = document.createElement('option');
    option.value = Class.id;
    option.textContent = Class.name;
    return option;
}