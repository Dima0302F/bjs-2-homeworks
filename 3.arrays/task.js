function compareArrays(arr1, arr2) {
    // Длины массивов разные, сразу возвращаем false
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Сравнения элементов на одинаковых индексах
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    // Фильтруем по полу
    const filteredUsers = users.filter(user => user.gender === gender);
    
    // Если нет подходящих пользователей, возвращаем 0
    if (filteredUsers.length === 0) {
        return 0;
    }
    
    // Суммируем возраста и вычисляем среднее
    const sumAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    
    return sumAge / filteredUsers.length;
}
