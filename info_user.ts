
type User = {
    name: string;
    age: string;
    address: {
        city: string;
        uf: string;
    }
}
function showUserInfo(user) {
    return `Welcome, ${user.name} - ${user.age}. Cidade: ${user.address.city}, UF: ${user.address.city}`;
}

showUserInfo('')