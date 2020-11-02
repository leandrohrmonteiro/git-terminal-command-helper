const LocalRepositoryOptions = [
    {
      id:1,
      selectedOption:'None',
      label:'',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:false,
      code:'',
      description:''
    },
    {
      id:2,
      selectedOption:'Start local repository',
      label:'Start Local Repository',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git init',
      description:'Creates repository in current folder.'
    },
    {
      id:3,
      selectedOption:'Check repository status',
      label:'Check status',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git status',
      description:'Returns status of current repository'
      },
    {
      id:4,
      selectedOption:'Track and stage inputed file',
      label:'Track and stage',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git add',
      description:'Tracks and stages selected file. (git add .) will do so for   all files.'
      },
    {
      id:5,
      selectedOption:'Unstage file',
      label:'Unstage',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git restore --staged',
      description:'Unstages and untracks inputed file.'
      },
    {
      id:6,
      selectedOption:'Force remove file',
      label:'Force remove',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git rm -f',
      description:'Forces unstage, untrack and removal of inputed file.'
      },
    {
      id:7,
      selectedOption:'Perform commit',
      label:'Perform commit',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git commit -m',
      description:'Creates commit snapshot with inputed message.'
      },
    {
      id:8,
      selectedOption:'Ammends last commit',
      label:'Ammend last commit',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git commit --ammend -m',
      description:'Copies over last commit snapshot and message.'
      },
    {
      id:9,
      selectedOption:'See commit log',
      label:'See commit log',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git log',
      description:'Returns log of commits performed. (git log --pretty=oneline)   To see hash and message in same line.'
      },
    {
      id:10,
      selectedOption:'Travel to commit',
      label:'Travel to',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git checkout',
      description:'Transforms repository into commit snapshot inputed. (git checkout master) Transforms repository into the most recent commit.'
      },
    
    ]
    
    export default LocalRepositoryOptions