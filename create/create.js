import { createParticipants, getClass } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const pickClass = document.getElementById('Class');
const formParticipants = document.getElementById('participant');
const select = document.querySelector('select');

async function onLoad() {
    const Classes = await getClass();
    for (let Class of Classes) {
        const optionClass = renderOption(Class);
        select.append(optionClass);
    }
}
onLoad();
formParticipants.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(formParticipants);
    await createParticipants({
        name: form.get('name'),
        contact: form.get('contact'),
        class_id: form.get('class_id'),
    });
    window.location.href = '../workshops';
});