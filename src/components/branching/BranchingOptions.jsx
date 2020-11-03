const BranchingOptions = [
    {
      id:1,
      selectedOption:'None',
      label:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:false,
      code:'',
      description:''
    },
    {
      id:2,
      selectedOption:'Create branch',
      label:'Branch to create',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git branch ',
      description:'Creates new branch with inputed name.'
    },
    {
      id:3,
      selectedOption:'Switch branch',
      label:'Branch to switch to',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git switch ',
      description:'Switches current position into inputed branch'
      },
    {
      id:4,
      selectedOption:'Branch log',
      label:'Get log from',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git log ',
      description:'Retrieves log from inputed branch. (git log --all) retrieves log from all branches in repository.'
      },
    {
      id:5,
      selectedOption:'Merge branch',
      label:'Receive a merge from',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git merge ',
      description:'Inputed branch is merged into current branch.'
      },
    {
      id:6,
      selectedOption:'Delete local branch',
      label:'Branch to delete',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git branch -d ',
      description:'Deletes branch in local repository.'
      },
    
    ]
    
    export default BranchingOptions