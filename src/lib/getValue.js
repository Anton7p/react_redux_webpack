

// methods of this class Value process data returned from api https://dictionaryapi.com/
export class Value {
    static  Instance = new Value();

    getPartOfSpeech(value,property='fl') {

        if (value && value[property]) {
            return value[property]
        }
        return 'nothing here'
    }

    getName(value,property='hwi',name='hw') {

        if (value && value[property]) {
            return value[property][name]
        }
        return 'nothing here'
    }

    getDescription(value,property='shortdef') {

        if (value[property] && value[property].length !== 0) {
            return value[property].map((el, idx) => <span key={idx}>{el}</span>)
        }
        return 'there is not definition for this word'
    }

    getPronunciation(value,property='hwi',array='prs',pronunciation='mw') {

        if (value[property] && value[property][array]) {
            return value[property][array][0][pronunciation]
        }
        return 'nothing here'
    }

}
