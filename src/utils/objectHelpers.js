// функция чтобы быстро менять объекты внутри массива 
// вернет новый массив в котором, 
// создаст новую копию изменяего объекта и заменит старые свойства новыми - newObjectProps
// если найдет совпадения по такому objPropName и с таким itemId


export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(user => {
        if (user[objPropName] === itemId) {
            return { ...user, ...newObjectProps }
        }
        return user;
    })
} 