
const inputName = document.getElementById('input_name')

const saveButton = document.getElementById('save_button')

saveButton.addEventListener("click", function () {
    const name = inputName.value
    chrome.storage.sync.set({})
    console.log('ttt')
})


