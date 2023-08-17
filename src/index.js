/*
 * @Description: 
 */
function omit(obj, fields) {
    // 浅拷贝
    const shallowCopy = Object.assign({}, obj);
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key];
    }
    return shallowCopy;
}
export default omit;