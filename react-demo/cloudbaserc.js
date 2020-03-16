module.exports = {
  envId: '{{envId}}',
  functionRoot: 'functions',
  functions: [
    {
      name: 'custom-login',
      config: {
        timeout: 5,
        envVariables: {},
        runtime: 'Nodejs8.9'
      }
    },
    {
      name: 'base64',
      config: {
        timeout: 5,
        envVariables: {},
        runtime: 'Nodejs8.9'
      }
    }
  ]
}
