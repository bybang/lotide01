const args = process.argv.splice(2);

const reverse = (array) => {
  for (i = 0; i < array.length; i++) {
    let result = "";
    for (j = array[i].length -1; j >= 0; j--) {
      result += array[i][j];
    }
    console.log(result);
  }
};

reverse(args);