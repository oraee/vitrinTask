import axios from "axios";

export async function getPosts() {
  try {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = posts.data;
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function getPostById(params) {
  try {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = post.data;
    return { data };
  } catch (error) {
    return { error };
  }
}

