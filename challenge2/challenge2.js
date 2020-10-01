const linkData2 = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
      console.log('=== Challenge 2 ===');
      console.log('Pramudya Anggara Picauly');
      const filterData = res.data.filter( value => {
          return value.userId === 8;
        });
        console.log(filterData);
        for(let i of filterData){
          console.log(i);
        }
      })
}

linkData2();
