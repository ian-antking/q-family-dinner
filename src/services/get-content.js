import contentClient from './content-client'

export default async () => {
  const content = {};
  const data = await contentClient.getEntries()
    const contentTypes = [...new Set(data.items.map(item => item.sys.contentType.sys.id))];
    contentTypes.forEach(type => {
      content[`${type}s`] = data.items.filter(item => item.sys.contentType.sys.id === type);
    });
    return content;
}
