import Notiflix from 'notiflix';
const API_PATH = 'https://api.thecatapi.com/v1/breeds/';
const options = {
  headers: {
    'x-api-key':
      'live_9h7xqhH16IEIw3qqV14r4TChLRMNR7zKuUhXAKSNMNKGrofSD1EQ49gbJSZoskAA',
  },
};

async function handleResponse(response) {
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}

export async function fetchBreeds() {
  try {
    const response = await fetch(`${API_PATH}`, options);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch cat breeds.');
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const resp = await fetch(
      `https://api.thecatapi.com/v1/breeds/${breedId}`,
      options
    );
    const data = await handleResponse(resp);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch cat breeds.');
  }
}

export async function fetchImageCatByBreed(imageId) {
  try {
    const resp = await fetch(
      `https://api.thecatapi.com/v1/images/${imageId}`,
      options
    );
    const data = await handleResponse(resp);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch cat image.');
  }
}
