const fetch = require('node-fetch');

module.exports = () => {
    async function getUsers(){
        const result = await fetch(
            'https://lwj-learn.hasura.app/v1/graphql',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                        query MyQuery {
                        users {
                            githubUsername
                            id
                            name
                            }
                        }
                        `,
                    variables: {}
                }),
            }
        ).then((res) => res.json());

        return result.data.users;
    }

    return getUsers();

    
};