const getElem = (elem, classValue) =>
{
    let res = document.createElement(elem);
    res.setAttribute('class', `${classValue}`);
    return res;
}

export { getElem };