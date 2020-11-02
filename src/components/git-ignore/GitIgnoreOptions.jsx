const GitIgnoreOptions = [
    {
      id:1,
      selectedOption:'None',
      label:'',
      codeBeforeInput:false,
      code:'',
      description:''
    },
    {
      id:2,
      selectedOption:'Ignore all files of type',
      label:'Ignore',
      codeBeforeInput:true,
      code:'.',
      description:'Ignores all files of selected type.'
    },
    {
      id:3,
      selectedOption:'Do not ignore file',
      label:'Do not ignore',
      code:'!',
      codeBeforeInput:true,
      description:'Does not ignore inputed file'
    },
    {
      id:4,
      selectedOption:'Ignore all instances of file',
      label:'Ignore all instances of',
      code:'',
      description:'Ignores all instances of inputed file'
    },
    {
      id:5,
      selectedOption:'Ignore file in root folder',
      label:'Ignore file in root folder',
      codeBeforeInput:true,
      code:'/',
      description:'Ignores all instances of inputed file'
    },
    {
      id:6,
      selectedOption:'Ignore folder',
      label:'Ignore inputed folder',
      codeBeforeInput:false,
      code:'/',
      description:'Ignores inputed folder and subfolders'
    },
]
    export default GitIgnoreOptions