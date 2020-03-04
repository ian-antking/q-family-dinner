const pageNames = ['Events', 'Contact'];

class PageData {
  constructor(name) {
    this.sys = { id: `${name}_key` };
    this.fields = {
      path: name.toLowerCase(),
      title: name,
    };
  }
}

const dynamicPages = pageNames.map(pageName => new PageData(pageName));
export default dynamicPages;
