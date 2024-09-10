import axios from "axios";
import { parseVideoDuration } from "./parseVideoDuration";
import { convertRawtoString } from "./convertRawtoString";
import { timeSince } from "./timeSince";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const { data: { items: channelsData } } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`
    );

    const parsedChannelsData = channelsData.map((channel) => ({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    const { data: { items: videosData } } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
    );

    const parsedData = items.map((item, index) => {
      const channelData = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );

      if (!channelData) {
        console.warn(`Channel data not found for channelId: ${item.snippet.channelId}`);
        return null;
      }

      return {
        videoId: item.id.videoId,
        videoTitle: item.snippet.title,
        videoDescription: item.snippet.description,
        videoThumbnail: item.snippet.thumbnails.medium.url,
        videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
        videoViews: convertRawtoString(videosData[index].statistics.viewCount),
        videoAge: timeSince(new Date(item.snippet.publishedAt)),
        channelInfo: {
          id: item.snippet.channelId,
          image: channelData.image,
          name: item.snippet.channelTitle,
        },
      };
    }).filter(Boolean);

    return parsedData;
  } catch (err) {
    console.error("Error parsing data:", err);
    throw err;
  }
};