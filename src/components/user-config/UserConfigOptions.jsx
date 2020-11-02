const UserConfigOptions =[
    {
      id:1,
      selectedOption:'None',
      label: '',
      code:'',
      description:''
    },
    {
      id:2,
      selectedOption:'Set global username',
      label: 'Name',
      code:'git config --global user.name',
      description:'Sets up name variable of user to be added during commit operations'
    },
    {
      id:3,
      selectedOption:'Set global email',
      label: 'email',
      code: 'git config --global user.email',
      description:'Sets up email variable of user to be added during commit operations'
    }
  ]
    
    
  export default UserConfigOptions