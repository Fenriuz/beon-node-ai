import axios from 'axios';

const main = async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  console.log(response.data);
};

main();
