const awsconfig = {
    Auth: {
      identityPoolId: 'us-east-1:614b95d4-9ab2-4180-b1b2-3b4bdeeb6fcc', // Your Identity Pool ID
      region: 'us-east-1', // Your AWS region
      userPoolId: 'us-east-1_nMk0ehv5k', // Your User Pool ID
      userPoolWebClientId: '1ugudas0pvlj8qj6lrd7ndoh29', // Your App Client ID
    },
    API: {
        endpoints: [
          {
            name: "DynamoDBAPI",
            endpoint: "https://jl44x2bganc4dbfjyfcqqr65nq.appsync-api.us-east-1.amazonaws.com/graphql", // replace with actual endpoint
            region: "YOUR_AWS_REGION"
          }
        ]
      }
  };
  
  export default awsconfig;
  