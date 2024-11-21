// RecipeVideos.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "/src/RecipeVideos.css"


const RecipeVideos = ({ query }) => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    const fetchVideos = async () => {
        const apiKey = 'AIzaSyAAUIex89UDUVkFtRJMfJy9zpLkYR2acc8';
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,  // Number of videos to display
                    q: `${query} recipe`,  // Include "recipe" in the search term
                    key: apiKey,
                },
            });
            setVideos(response.data.items);
        } catch (err) {
            setError('Failed to load videos');
        }
    };

    useEffect(() => {
        if (query) {
            fetchVideos();
        }
    }, [query]);

    if (error) return <p>{error}</p>;
    if (!videos.length) return <p>Loading videos...</p>;

    return (
        <div className="youtube-videos">
            {videos.map((video) => (
                <div key={video.id.videoId} className="video">
                    <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p>{video.snippet.title}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeVideos;
