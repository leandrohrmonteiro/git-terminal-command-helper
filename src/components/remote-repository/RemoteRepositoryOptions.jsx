const RemoteRepositoryOptions = [
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
      selectedOption:'Identify remotes',
      label:'Identify remotes',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git remote -v',
      description:'Returns identity of remote repositories connected to current local repository.'
    },
    {
      id:3,
      selectedOption:'Add remote',
      label:'Add shortname',
      aditionalLabel:'Add url',
      hasUserInput:true,
      hasMultipleUserInput:true,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git remote add ',
      description:'Connects remote repository to current local repository'
      },
    {
      id:4,
      selectedOption:'Get data from remote repository',
      label:'Add shortname',
      aditionalLabel:'Add branch',
      hasUserInput:true,
      hasMultipleUserInput:true,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git pull ',
      description:'Retrieves data and merges it to current reposiry. The ( git fetch ) variant will not merge the data.'
      },
    {
      id:5,
      selectedOption:'Push data to remote repository',
      label:'Add shortname',
      aditionalLabel:'Add branch',
      hasUserInput:true,
      hasMultipleUserInput:true,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git push ',
      description:'Pushes data from current local repository branch to remote repository.(usually the same branch).'
      },
    {
      id:6,
      selectedOption:'Rename remote',
      label:'Add current name',
      aditionalLabel:'Add new name',
      hasUserInput:true,
      hasMultipleUserInput:true,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git remote rename ',
      description:'Renames remote.'
      },
    {
      id:7,
      selectedOption:'Remove remote',
      label:'Input remote to remove',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git remove ',
      description:'Removes connection to remote repository.'
      },
    
    
    ]
    
    export default RemoteRepositoryOptions