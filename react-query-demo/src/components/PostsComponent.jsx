import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // Using useQuery to fetch data with additional options
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: true, // Refetch data when window is focused
    keepPreviousData: true,      // Keep previous data while fetching new data
    staleTime: 1000 * 60 * 5,    // Data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 10,   // Cache data for 10 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
