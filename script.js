class Bible {
    constructor(outputBookTextElement, outputVersionTextElement, outputBookNumberElement) {
        this.outputBookTextElement = outputBookTextElement
        this.outputVersionTextElement = outputVersionTextElement
        this.outputNumberTextElement = outputNumberTextElement
    }    

        clearnumber() {
        this.outputNumberTextElement.innerHTML = ''        
    }
    
        clearversion() {
        this.outputVersionTextElement.innerHTML = ''        
    }
}

const outputBookTextElement = document.querySelector('[output-book]')
const outputVersionTextElement = document.querySelector('[output-version]')
const outputNumberTextElement = document.querySelector('[output-number]')
const outputDataMaxTextElement = document.querySelector('[data-max]')

const bible = new Bible(outputBookTextElement, outputVersionTextElement, outputNumberTextElement)

var stuff = JSON.parse(document.getElementById('stuff').innerHTML);
var idx

document.querySelectorAll('.bible-grid [data-book]').forEach(item => {
    item.addEventListener('click', event => {
        bible.outputBookTextElement.innerHTML = item.innerHTML
        for (var i = 0; i < stuff.length; i++) {
            if (stuff[i].Book === item.innerHTML) {
                document.querySelector('[data-max]').innerHTML = stuff[i].Chapter;
                window.idx = i;
            }
        }
    })
})

document.querySelectorAll('.version-grid [data-version]').forEach(item => {
    item.addEventListener('click', event => {
        if (bible.outputVersionTextElement.innerHTML.includes(item.innerHTML)) return
        if (bible.outputVersionTextElement.innerHTML.split(";").length > 2 ) return
        if (bible.outputVersionTextElement.innerHTML === "") {
            bible.outputVersionTextElement.innerHTML = item.innerHTML
        }
        else {
            bible.outputVersionTextElement.innerHTML += ";" + item.innerHTML
        }        
    })
})

document.querySelectorAll('.number-grid [data-number]').forEach(item => {
    item.addEventListener('click', event => {
        bible.outputNumberTextElement.innerHTML += item.innerHTML
        if (parseInt(bible.outputNumberTextElement.innerHTML) > document.querySelector('[data-max]').innerHTML) {
            bible.outputNumberTextElement.innerHTML = document.querySelector('[data-max]').innerHTML;
        }
    })
})

document.querySelectorAll('.version-grid [select-option]').forEach(item => {
    item.addEventListener('click', event => {
        if (bible.outputVersionTextElement.innerHTML === '') {bible.outputVersionTextElement.innerHTML = 'ESV'}
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
        if (item.innerHTML === 'Swindoll') {
            console.log(window.idx);
            window.open("https://insight.org/resources/bible/" + stuff[window.idx].Swindoll);            
        }
         if (item.innerHTML === 'Stedman') {
            console.log(window.idx);
            window.open("https://www.raystedman.org/bible-overview/adventuring/" + stuff[window.idx].Stedman);            
        }        
         if (item.innerHTML === 'Constable') {
            console.log(window.idx);
            window.open("https://www.planobiblechapel.org/tcon/notes/html/" + stuff[window.idx].Constable);            
        }         
        
    })
})

document.querySelectorAll('.number-grid [clear-number]').forEach(item => {
    item.addEventListener('click', event => {
        bible.clearnumber()
    })
})

document.querySelectorAll('.version-grid [clear-version]').forEach(item => {
    item.addEventListener('click', event => {
        bible.clearversion()
    })
})