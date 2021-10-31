/**
 * Returns converted string with byksw language
 * @param {String} byksw The text or words to be translated.
 * @return return the converted text.
 */

 const byksw = (byksw) => {
        result = '';
        byksw = byksw.toLowerCase();
        for(i=0;i<byksw.length;i++){
            twohand=byksw[i];
            if(byksw[i]=='a' || byksw[i]=='u' || byksw[i]=='e' || byksw[i]=='o'){
                twohand='w';
            }
            else if(byksw[i]=='i'){
                twohand='y';
            }
            result=result+twohand;
        }
        return result;
}

module.exports = { byksw }
