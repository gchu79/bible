class Bible {
    constructor(outputBookTextElement, outputVersionTextElement, outputBookNumberElement) {
        this.outputBookTextElement = outputBookTextElement
        this.outputVersionTextElement = outputVersionTextElement
        this.outputNumberTextElement = outputNumberTextElement
    }    

        clear() {
        this.outputBookTextElement.innerHTML = ''
        this.outputVersionTextElement.innerHTML = ''
        this.outputNumberTextElement.innerHTML = ''        
    }
}

const outputBookTextElement = document.querySelector('[output-book]')
const outputVersionTextElement = document.querySelector('[output-version]')
const outputNumberTextElement = document.querySelector('[output-number]')

const bible = new Bible(outputBookTextElement, outputVersionTextElement, outputNumberTextElement)

document.querySelectorAll('.bible-grid [data-book]').forEach(item => {
    item.addEventListener('click', event => {
        bible.outputBookTextElement.innerHTML = item.innerHTML
    })
})

document.querySelectorAll('.version-grid [data-version]').forEach(item => {
    item.addEventListener('click', event => {
        bible.outputVersionTextElement.innerHTML = item.innerHTML      
    })
})

document.querySelectorAll('.number-grid [data-number]').forEach(item => {
    item.addEventListener('click', event => {
        bible.outputNumberTextElement.innerHTML = item.innerHTML        
    })
})

document.querySelectorAll('.version-grid [select-option]').forEach(item => {
    item.addEventListener('click', event => {
        if (bible.outputBookTextElement.innerHTML === '' || bible.outputVersionTextElement.innerHTML === '' || bible.outputNumberTextElement.innerHTML === '') return;
        if (item.innerHTML === 'BibleHub Parallel') {
            window.open("https://biblehub.com/" + bible.outputBookTextElement.innerHTML.replace(' ','_').toLowerCase() + "/" + bible.outputNumberTextElement.innerHTML + ".htm");        
        }
        if (item.innerHTML === 'BibleGateway') {
            window.open("https://www.biblegateway.com/passage/?search=" + bible.outputBookTextElement.innerHTML.toLowerCase() + "%20" + bible.outputNumberTextElement.innerHTML + "&version=" + bible.outputVersionTextElement.innerHTML);        
        }
        if (item.innerHTML === 'BibleHub Interlinear') {
            window.open("https://biblehub.com/interlinear/" + bible.outputBookTextElement.innerHTML.replace(' ','_').toLowerCase() + "/" + bible.outputNumberTextElement.innerHTML + ".htm");            
        }
        
    })
})

document.querySelectorAll('.number-grid [clear-all]').forEach(item => {
    item.addEventListener('click', event => {
        bible.clear()      
    })
})