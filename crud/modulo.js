export const documentos = async function() {
    const response = await fetch('http://127.0.0.1:3000/doc');
    const data = await response.json();
    return data
}


export const usuarios = async function() {
    const response = await fetch('http://127.0.0.1:3000/usuarios');
    const data = await response.json();
    return data
}