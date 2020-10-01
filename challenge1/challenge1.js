const linkData = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then( res => {
      console.log('=== Challenge 1 ===');
      console.log('Pramudya Anggara Picauly');
      const dictData = {
        'dataLength': res.data.length,
        'data': res.data
      }
      console.log(dictData);
    });
}

linkData();

