'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { MdAccountCircle, MdSearch } from "react-icons/md";
import {
  setSearchQuery,
  fetchSearchResults,
  fetchSuggestions,
  clearResults,
} from '../redux/slices/searchSlice';
import { RootState } from '../redux/store'; 
import { useRouter } from 'next/router';

// Define types for suggestion and result items
interface User {
  id: string;
  username: string;
  bio: string;
  profilePicture?: string | null;
}

export const SearchToggle = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);

  const { searchQuery, searchResults, suggestions, noResults } = useSelector(
    (state: RootState) => state.search
  );

  useEffect(() => {
    // Clear results when component mounts
    dispatch(clearResults());
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
    setIsSearchSubmitted(false); // Reset to show suggestions when typing

    if (value.length > 2) {
      dispatch(fetchSuggestions(value));
    } else {
      dispatch(clearResults());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchSubmitted(true); // Set to true to show results on submit
    dispatch(fetchSearchResults(searchQuery));
  };

  const handleProfileClick = (userId: string) => {
    router.push(`/profile/${userId}`); // Adjust the path as per your routes
  };

  useEffect(() => {
    console.log("Fetching results:", searchResults);
    console.log("Suggestions:", suggestions);
  }, [searchResults, suggestions]);

  return (
    <div className="w-72 h-[480px] p-5 flex flex-col rounded-lg shadow-lg">
      <div className="space-y-2">
        <form onSubmit={handleSubmit} className="flex space-x-1">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="border rounded-md focus:outline-none border-gray-300 px-3"
          />
          <button type="submit" className="text-xl">
            <MdSearch />
          </button>
        </form>
      </div>
      <div className="mt-4">
        {isSearchSubmitted ? (
          searchResults.length > 0 ? (
            <div>
              <h2 className="text-sm font-semibold">Search Results</h2>
              {searchResults.map((result: User) => (
                <div key={result.id} onClick={() => handleProfileClick(result.id)} className="flex items-center space-x-3 mt-2">
                  {result.profilePicture ? (
                    <Image
                      src={result.profilePicture}
                      alt={result.username}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                      placeholder="blur"
                      blurDataURL="/default-avatar.png"
                    />
                  ) : (
                    <MdAccountCircle className="text-xl" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{result.username}</span>
                    <span className="text-xs text-gray-500">{result.bio}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            noResults && <p className="text-sm text-gray-500 mt-2">User not found</p>
          )
        ) : (
          suggestions.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold">Suggestions</h2>
              {suggestions.map((suggestion: User) => (
                <div key={suggestion.id} className="flex items-center space-x-1 mt-2">
                  {suggestion.profilePicture ? (
                    <Image
                      src={suggestion.profilePicture}
                      alt={suggestion.username}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                      placeholder="blur"
                      blurDataURL="/default-avatar.png" // Optional placeholder for loading
                    />
                  ) : (
                    <MdAccountCircle className="text-xl" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{suggestion.username}</span>
                    <span className="text-xs text-gray-500">{suggestion.bio}</span>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};
