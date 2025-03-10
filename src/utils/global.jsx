const validateFirstName = (name) => name.length < 16;
const validateLastName = (name) => name.length < 31;
const answerLog = () => {
    let info = {
        firstName: localStorage.getItem('first_name'),
        lastName: localStorage.getItem('last_name'),
        email: localStorage.getItem('email')
    }
    let responses = JSON.parse(localStorage.getItem('answers'));    
    let [testFlag, multiFlag, annotationFlag] = [true, true, true];

    console.log(`USER INFORMATION:\n\tFirst Name: ${info.firstName}\n\tLast Name: ${info.lastName}\n\tEmail: ${info.email}\n`)
    console.log('\nANSWERS')
    for(let i = 0 ; i < responses.length ; i++){
        if(responses[i].type === 'test' && testFlag){
            console.log('\nTest Questions');
            testFlag = false;
        }                
        if(responses[i].type === 'multipleChoice' && multiFlag){
            console.log('\nMultiple Choice Questions');
            multiFlag = false;
        }
        if(responses[i].type === 'annotation' && annotationFlag){
            console.log('\nAnnotation Questions');
            annotationFlag = false;
        }
        console.log(`\tQuestion id: ${responses[i].id}\n\tAnswer: ${responses[i].option}\n`);
    }
};

export {validateFirstName, validateLastName, answerLog};
