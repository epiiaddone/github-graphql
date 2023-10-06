
//addStar is the mutation function defined by GitHub
//inside the function, we specify what we want the response to be:
// starrable {
//     stargazers {
//         totalCount
//     }
// }
export const STAR_REPO = `
 mutation ($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
        starrable {
            stargazers {
                totalCount
            }
        }
    }
 }
`;


export async function starRepo(repoId: string) {
    const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
        method: 'POST',
        body: JSON.stringify({
            query: STAR_REPO,
            variables: {
                repoId,
            },
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
        },
    });
    await response.json();
}