class Formatter {
  //add static methods here
  static capitalize (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  static sanitize  (string) {
      return string.replace("[^a-zA-Z0-9 -]", '');
    }
  static titleize  (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        if (str[i] ==='a' || str[i] ==='an' || str[i] ==='but' || str[i] ==='of' ||
        str[i] ==='and' || str[i] ==='for' || str[i] ==='at' ||
        str[i] ==='by' || str[i] ==='from') {

        }else {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
      }
      return str.join(' ');
    }
}
