// methods of this class Content process data returned from api https://dictionaryapi.com/


export class Content {
    static  Instance = new Content();

    getPartOfSpeech(value, property = "fl") {

        if (value && value[property]) {
            return value[property];
        }
        return "nothing here";
    }

    getName(value, mode, property = "hwi", name = "hw") {

        if (value && value[property]) {
            let str = value[property][name].replace(/\*/gi, '')
            if (mode === 'view') {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
            return str
        }
        return "nothing here";
    }


    getDescription(value, property = "shortdef") {

        if (value[property] && value[property].length !== 0) {
            return value[property].map((el) => el);
        }
        return "there is not definition for this word";
    }

    getPronunciation(value, property = "hwi", array = "prs", pronunciation = "mw") {

        if (value[property] && value[property][array]) {
            return value[property][array][0][pronunciation];
        }
        return "nothing here";
    }

}
