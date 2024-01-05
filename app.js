const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');

    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if(minEl.value === '' || maxEl.value === ''){
        alert("Please enter values of min and max");
        return;
    }

    if(min > max){
        alert("Min must be less than max");
        return;
    }

    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = getRandomNumber(min, max);
}

const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate);

