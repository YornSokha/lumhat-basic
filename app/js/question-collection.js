class Collection {
    constructor() {
        this.questionList = [];
    }

    addQuestion(question) {
        this.questionList.push(question);
    }
}

class Question {
    constructor(questionDescription) {
        this.questionDescription = questionDescription;
        this.answerList = [];
    }

    addAnswer(answerDescription, isCorrect) {
        this.answerList.push(new Answer(answerDescription, isCorrect));
        return this;
    }
}

class Answer {
    constructor(answerDescription, isCorrect) {
        this.answerDescription = answerDescription;
        this.isCorrect = isCorrect;
    }
}

const collection = new Collection();
const questionList = [
    new Question("Abstract class is _")
        .addAnswer("A class must contain all pure virtual functions.", false)
        .addAnswer("A class may not contain pure virtual function.", false)
        .addAnswer("A class must contain pure virtual function defined outside the class.", false)
        .addAnswer("A class must contain at least one pure virtual function.", true),

    new Question("C++ does not supports the following :")
        .addAnswer("Hybrid inheritance", false)
        .addAnswer("Multilevel inheritance", false)
        .addAnswer("Hierarchical inheritance", false)
        .addAnswer("None of the above", true),

    new Question("Which operator is required to be overloaded as member function only?")
        .addAnswer("=", true)
        .addAnswer("-", false)
        .addAnswer("--", false)
        .addAnswer("++", false),

    new Question("A protected member of the class in accessible in _")
        .addAnswer("Same class and derived class", true)
        .addAnswer("Only same class", false)
        .addAnswer("Outside the class", false)
        .addAnswer("None of the above", false),

    new Question("How can we make an class act as an interface in C++?")
        .addAnswer("Defining the class following with the keyword virtual", false)
        .addAnswer("Defining the class following with the keyword interface", false)
        .addAnswer("By only providing all the functions as virtual functions in the class", true)
        .addAnswer("Defining the class following with the keyword abstract", false),

    new Question("Which feature of the OOPS gives the concept of reusability?")
        .addAnswer("Abstraction", false)
        .addAnswer("Inheritance", true)
        .addAnswer("Encapsulation", false)
        .addAnswer("None of the above", false),

    new Question("Choose the option not applicable for the constructor")
        .addAnswer("Cannot be called explicitly.", false)
        .addAnswer("Cannot be overloaded.", false)
        .addAnswer("Cannot be overridden.", true)
        .addAnswer("None of the above.", false),

    new Question("Choose the invalid identifier from the below")
        .addAnswer("Int", false)
        .addAnswer("0", false)
        .addAnswer("bool", true)
        .addAnswer("DOUBLE", false),

    new Question("By default the members of the structure are _")
        .addAnswer("private", false)
        .addAnswer("protected", false)
        .addAnswer("public", true)
        .addAnswer("Access specifiers not applicable for structures.", false),

    new Question("How many number of arguments can a destructor of a class receives?")
        .addAnswer("1", false)
        .addAnswer("2", false)
        .addAnswer("0", true)
        .addAnswer("None of the above", false),

    new Question("Which operator is used to resolve the scope of the global variable?")
        .addAnswer("->", false)
        .addAnswer("::", true)
        .addAnswer("-", false)
        .addAnswer("*", false),

    new Question("Which allows you to create a derived class that inherits properties from more than one base class?")
        .addAnswer("Multilevel inheritance", false)
        .addAnswer("Hybrid Inheritance", false)
        .addAnswer("Hierarchical Inheritance", false)
        .addAnswer("Multiple inheritance", true),

    new Question("Which feature in OOP allows reusing code?")
        .addAnswer("Polymorphism", false)
        .addAnswer("Encapsulation", false)
        .addAnswer("Inheritance", true)
        .addAnswer("Data hiding", false),

    new Question("A function that changes the state of the cout object is called a(n) _")
        .addAnswer("member", false)
        .addAnswer("manipulator", true)
        .addAnswer("adjuster", false)
        .addAnswer("operator", false),

    new Question("What does C++ append to the end of a string literal constant?")
        .addAnswer("a null character", true)
        .addAnswer("a space", false)
        .addAnswer("a number sign (#)", false)
        .addAnswer("an asterisk (*)", false),

    new Question("An array element is accessed using _")
        .addAnswer("a first-in-first-out approach", false)
        .addAnswer("an index number" , true)
        .addAnswer("the dot operator", false)
        .addAnswer("a member name", false),

    new Question("To hide a data member from the program, you must declare the data member in the ___ section of the class.")
        .addAnswer("concealed", false)
        .addAnswer("confidential", false)
        .addAnswer("private", true)
        .addAnswer("hidden", false),

    new Question("External documentation includes")
        .addAnswer("a printout of the program's code", true)
        .addAnswer("flowcharts", false)
        .addAnswer("IPO charts", false)
        .addAnswer("pseudo code", false),

    new Question("The function whose prototype is void getData(Item *thing); receives")
        .addAnswer("a reference to a structure", false)
        .addAnswer("a pointer to a structure", true)
        .addAnswer("a copy of a structure", false)
        .addAnswer("nothing", false),

    new Question("Null character needs a space of ___")
        .addAnswer("zero bytes", false)
        .addAnswer("three bytes", false)
        .addAnswer("four bytes", false)
        .addAnswer("one byte", true)
];

for(let item of questionList) {
    collection.addQuestion(item);
}

const collection_java = new Collection();
const questionList_java = [
    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),

    new Question()
        .addAnswer()
        .addAnswer()
        .addAnswer()
        .addAnswer(),
];

for(let item of questionList_java) {
    collection_java.addQuestion(item);
}