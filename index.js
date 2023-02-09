function introduction(name){
    switch(name)
    {
        case "Aki":
            return "Hi, my name is Aki.";
            break;
        case "Samip":
            return "Hi, my name is Samip.";
            break;
        default:
            console.log("Ya done fucked up A-Aron!");
    };

};

function introductionWithLanguage(name,language){
    if (name === "Aki" && language === "Ember.js"){
        return "Hi, my name is Aki and I am learning to program in Ember.js.";
    }
    else if (name === "Samip" && language === "React"){
        return "Hi, my name is Samip and I am learning to program in React.";
    };

};

function introductionWithLanguageOptional(name,language){
    switch(name)
    {
        case "Gracie":
            switch (language)
            {   
                case undefined:
                    return "Hi, my name is Gracie and I am learning to program in JavaScript.";
                    break;
                default:
                    return `Hi, my name is Gracie and I am learning to program in ${language}.`;
            };
            break;
        
 
    };
};