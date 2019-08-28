module.exports = (function() {
  // The public API
  return {
    findEmp: function(name) {
      return fetch(
        `http://api.additivasia.io/api/v1/assignment/employees/${name}`,
      ).then(response => response.json());
    },

    findByName: function(searchKey) {
      console.log("findByName");
      return fetch(
        `http://api.additivasia.io/api/v1/assignment/employees/${searchKey}`,
      ).then(response => response.json());
    },
  };
})();
