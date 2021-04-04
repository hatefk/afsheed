import {gql, useQuery} from '@apollo/client';

const GET_ALL_POSTS = gql`
query GetPosts($options: PageQueryOptions!) {
    posts(options: $options) {
        data {
            id
            title
            body
        }
    }
}
`

export const useGetPosts = () => {
    const { data } = useQuery(GET_ALL_POSTS, {
        variables: { options: { paginate: { page: 1, limit: 10 } } }
    });
    return data?.posts?.data; 
};