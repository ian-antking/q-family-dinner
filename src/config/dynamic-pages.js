const pageNames = ['Events', 'Contact'];

class PageData {
  constructor(name) {
    this.sys = { id: `${name}_key` };
    this.fields = {
      slug: name.toLowerCase(),
      title: name,
      primaryPage: true,
    };
  }
}

const dynamicPages = pageNames.map(pageName => new PageData(pageName));
export default dynamicPages;
