# Application "word_keeper"
* Loads data from "https://www.dictionaryapi.com"
* Performs Search by the first, and the output of the first 10 words in the list
* When you click on a word, you can open and see more designations and transcription
* Words can be saved to favorites
* On the favorites page, you can change the order of words by dragging and drop the word by clicking on asterisk
* Part of speech filter works
* The search also works on selected words



The application uses two modes of displaying data "view" and "select",
which can be switched by clicking on the title "Word Keeper" and "Starred Words"

Mode as well as functions that switch it to be passed through the context in ModeControl component

Processing of data returned from api is carried out by methods of the class Content

Data filtering is carried out in the component PageContent



If you need to change the api "https://www.dictionaryapi.com" and change the incoming data,
you need to change the default parameters in functions and methods :
* class Content from "src/api/contentApi"
* function checkUniqueObject from "src/lib/"
* function filterByInputSearchValue from "src/lib/"
* function filterByCheckboxItem from "src/lib/"
* function removeFromArrayObject from "src/lib/"
* function downloadData from "src/content/PageContent"