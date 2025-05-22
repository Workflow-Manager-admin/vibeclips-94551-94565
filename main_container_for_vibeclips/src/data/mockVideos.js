/**
 * Mock video data for VibeClips application
 * This simulates the data structure we would receive from an API
 */

const mockVideos = [
  {
    id: '1',
    videoUrl: '/placeholder-video-1.mp4',  // These would be replaced with actual video URLs
    thumbnailUrl: 'https://via.placeholder.com/1080x1920/333/fff?text=Video+1',
    description: 'Check out this amazing sunset view! #sunset #vibes',
    user: {
      id: 'user1',
      username: '@sunsetlover',
      avatarUrl: 'https://via.placeholder.com/150/f28c28/fff?text=SL',
    },
    stats: {
      likes: 1245,
      comments: 42,
      shares: 15,
    },
  },
  {
    id: '2',
    videoUrl: '/placeholder-video-2.mp4',
    thumbnailUrl: 'https://via.placeholder.com/1080x1920/222/fff?text=Video+2',
    description: 'Dancing to my favorite song! #dance #music',
    user: {
      id: 'user2',
      username: '@dancequeen',
      avatarUrl: 'https://via.placeholder.com/150/ff4081/fff?text=DQ',
    },
    stats: {
      likes: 8976,
      comments: 231,
      shares: 76,
    },
  },
  {
    id: '3',
    videoUrl: '/placeholder-video-3.mp4',
    thumbnailUrl: 'https://via.placeholder.com/1080x1920/444/fff?text=Video+3',
    description: 'My cooking tutorial for the best pasta ever! #cooking #food',
    user: {
      id: 'user3',
      username: '@chefmaster',
      avatarUrl: 'https://via.placeholder.com/150/4caf50/fff?text=CM',
    },
    stats: {
      likes: 3452,
      comments: 156,
      shares: 28,
    },
  },
  {
    id: '4',
    videoUrl: '/placeholder-video-4.mp4',
    thumbnailUrl: 'https://via.placeholder.com/1080x1920/111/fff?text=Video+4',
    description: 'Travel vlog: exploring hidden gems in Tokyo! #travel #tokyo',
    user: {
      id: 'user4',
      username: '@worldtraveler',
      avatarUrl: 'https://via.placeholder.com/150/03a9f4/fff?text=WT',
    },
    stats: {
      likes: 6789,
      comments: 312,
      shares: 145,
    },
  },
];

export default mockVideos;
