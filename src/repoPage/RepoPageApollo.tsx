import { useState } from 'react';

import {
    useLazyQuery,//we don't want query run on mount
    useMutation,
    useApolloClient,
   } from '@apollo/client';

import { GET_REPO_APOLLO } from '../api/getRepoApollo';
import { STAR_REPO_APOLLO } from '../api/starRepoApollo';

import { RepoData, SearchCriteria } from '../api/types';
import { SearchRepoForm } from './SearchRepoForm';
import { FoundRepo } from './FoundRepo';
import { StarRepoButton } from './StarRepoButton';

export function RepoPageApollo() {
    const [searchCriteria, setSearchCriteria] =
    useState<SearchCriteria | undefined >();


    const [getRepo, { data }] = useLazyQuery(GET_REPO_APOLLO);

    const queryClient = useApolloClient();

    const [starRepo] = useMutation(STAR_REPO_APOLLO, {
        onCompleted: () => {
        queryClient.cache.writeQuery({
            query: GET_REPO_APOLLO,
            data: {
            repository: {
            ...data.repository,
            viewerHasStarred: true,
            },
            },
            variables: searchCriteria,
            });
            },
           });       

        function handleSearch(search: SearchCriteria) {
            getRepo({
                variables: { ...search },
                });
            //triggers re-render
            setSearchCriteria(search);
            }

        function handleStarClick() {
            if (data) {
                starRepo({ variables: { repoId: data.repository.id } 
                });;
            }
            }


        return (
            <main className="max-w-xs ml-auto mr-auto">
            <SearchRepoForm onSearch={handleSearch} />
            {data && (
            <>
            <FoundRepo
            name={data.repository.name}
            description={data.repository.description}
            stars={data.repository.stargazers.totalCount}
            />
            {!data.repository.viewerHasStarred && (
            <StarRepoButton onClick={handleStarClick} />
            )}
            </>
            )}
            </main>
            );           

   }