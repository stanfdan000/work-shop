const SUPABASE_URL = 'https://kzldzoahblcypgytcfej.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6bGR6b2FoYmxjeXBneXRjZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDU3NjcsImV4cCI6MTk2Nzg4MTc2N30.j_yg92pc7aweQmR0W4XIaPpIV3g7KQZogm27VeEfxDU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
export async function getClass() {
    const response = await client.from('Class').select('*, participants(*)');
    return response.data;
}
export async function createParticipants(participants) {
    const response = await client.from('participants').insert(participants);
    return response.data;
}
export async function deleteParticipants(id) {
    const response = await client.from('participants').delete().eq('id', id);
    return response.data;
}
