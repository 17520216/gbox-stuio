
/* <-------  Check unique  -------> */

const $btn = document.querySelector(".btnSubmit")
const $input = document.getElementById("text");
const $checkText = document.getElementById("num");

const submit = () => {
    const arr = []
    const value = $input.value;
    for (let i = 0; i < value.length; i++) {
        arr[i] = parseInt(value[i]);
    }
    const listCheck = arr.filter((check) => check % $checkText.value === 0);
    const finalList = checkExists(listCheck);

    alert(finalList)
}


const checkExists = (arr = []) => {
    let temp = [];
    for (let value of arr) {
        if (!temp.includes(value)) {
            temp.push(value)
        }
    }
    return temp;
}





$btn.addEventListener("click", submit);