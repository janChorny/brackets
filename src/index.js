module.exports = function check(str, bracketsConfig) {
  // your solution
	let bracketsConfigToString = ''
  for (let i = 0; i < bracketsConfig.length; i++){
	  bracketsConfigToString = bracketsConfig[i].join('');
	  if (str.includes(bracketsConfigToString)){
		  str = str.replace(bracketsConfigToString, '');
		  i = -1
	  }
  }
   return !str;
}
