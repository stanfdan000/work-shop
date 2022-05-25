import { checkAuth, logout, getClass, deleteParticipants } from '../fetch-utils.js';
import { renderCLass } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
async function displayClass() {
    const main = document.querySelector('main');
    main.textContent = '';
    const data = await getClass();
    for (let Class of data) {
        const ClassEl = renderCLass(Class);
        const ul = document.createElement('ul');
        for (let participants of Class.participants) {
            const li = document.createElement('li');
            li.textContent = `${participants.name}: ${participants.contact}`;
            li.addEventListener('click', async () => {
                await deleteParticipants(participants.id);
                await displayClass();
            });
            ul.append(li);
        }
        ClassEl.append(ul);
        main.append(ClassEl);
    }
}
displayClass();