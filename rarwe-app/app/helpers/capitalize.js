import { helper } from '@ember/component/helper';

export default helper(function capitalize(input) {
  // let words = input.toString().trim().split(' ').map(word => {
  //   return word[0].toUpperCase() + word.slice(1);
  // });
  // return words.join(' ');
  return input;
});
