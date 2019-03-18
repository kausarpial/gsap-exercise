module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss"; 
          @import "@/styles/_buttons.scss"; 
          @import "@/styles/_common.scss";
        `
      }
    }
  }
};