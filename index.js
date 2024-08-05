const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

const selectOperationNode = document.querySelector('.js-select-operation');


btnResultNode.addEventListener('click', function(){
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = Number(selectOperationNode.value)

    const result = calc({
        a, b, operation
    })

    console.log(result)
});


