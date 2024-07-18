export default {
parseURLs: () => {
    const data = get_videolinks.data[0].video_links; // Adjust this to match your query's result structure
    return JSON.parse(data);
  }
}
