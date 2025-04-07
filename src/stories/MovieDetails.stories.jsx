import React from 'react';
import MovieDetails from '../components/MovieDetails';
import '../css/MovieDetails.css';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/lv/7/7f/Inception_ver3.jpg', 
    name: 'Inception',
    releaseYear: '2010',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: '8.8',
    duration: '2h 28m',
    description: 'A thief who steals corporate secrets through dream-sharing technology must perform his toughest job yet: planting an idea in the mind of his target.'
  },
};

