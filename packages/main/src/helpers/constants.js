export const socialArray = ['facebook', 'twitter', 'youtube', 'instagram'];

export const nicheList = [
  {
    value: 'Entertainment',
    label: 'Entertainment'
  },
  {
    value: 'Fashion',
    label: 'Fashion'
  },
  {
    value: 'Modeling',
    label: 'Modeling'
  },
  {
    value: 'Blog',
    label: 'Blog'
  },
  {
    value: 'Travel',
    label: 'Travel'
  },
  {
    value: 'Fitness',
    label: 'Fitness'
  },
  {
    value: 'Beauty',
    label: 'Beauty'
  },
  {
    value: 'Music',
    label: 'Music'
  },
  {
    value: 'Comedy',
    label: 'Comedy'
  },
  {
    value: 'Photography',
    label: 'Photography'
  },
  {
    value: 'Food',
    label: 'Food'
  },
  {
    value: 'Art',
    label: 'Art'
  },
  {
    value: 'Wellness',
    label: 'Wellness'
  },
  {
    value: 'Design',
    label: 'Design'
  },
  {
    value: 'Tech',
    label: 'Tech'
  },
  {
    value: 'Nature',
    label: 'Nature'
  },
  {
    value: 'Pets',
    label: 'Pets'
  },
  {
    value: 'Gaming',
    label: 'Gaming'
  },
  {
    value: 'Dance',
    label: 'Dance'
  }
];

export const durationList = [
  {
    value: 'Up to 7 days',
    label: 'Up to 7 days'
  },
  {
    value: '1-2 weeks',
    label: '1-2 weeks'
  },
  {
    value: '2-3 weeks',
    label: '2-3 weeks'
  },
  {
    value: '4-6 weeks',
    label: '4-6 weeks'
  },
  {
    value: '7-9 weeks',
    label: '7-9 weeks'
  }
];

export const budgetList = [
  {
    value: '$0',
    label: '$0'
  },
  {
    value: '$100',
    label: '$100'
  },
  {
    value: '$250',
    label: '$250'
  },
  {
    value: '$500',
    label: '$500'
  },
  {
    value: '$1,000',
    label: '$1,000'
  },
  {
    value: '$2,500',
    label: '$2,500'
  },
  {
    value: '$5,000',
    label: '$5,000'
  },
  {
    value: '$10,000',
    label: '$10,000'
  }
];

export const budgetRanges = [
  {
    value: '500-2499',
    label: '$500-$2,499'
  },
  {
    value: '2500-9999',
    label: '$2,500-$9,999'
  },
  {
    value: '10000-100000',
    label: '$10,000-$100,000'
  },
  {
    value: '100000+',
    label: '$100,000+'
  }
];

export const genderList = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'All', label: 'All' }
];

export const ageList = [
  {
    value: 'Any age',
    label: 'Any age'
  },
  {
    value: '13-17',
    label: '13-17'
  },
  {
    value: '18-24',
    label: '18-24'
  },
  {
    value: '25-34',
    label: '25-34'
  },
  {
    value: '35-44',
    label: '35-44'
  },
  {
    value: '45-54',
    label: '45-54'
  },
  {
    value: '55-64',
    label: '55-64'
  },
  {
    value: '65+',
    label: '65+'
  }
];

export const campaignValues = {
  creatorMode: 'campaign',
  information: {
    title: '',
    link: '',
    niche: null,
    picture: '',
    description: '',
    duration: null,
    audience: {
      gender: null,
      age: null,
      country: null
    },
    budget: null
  },
  product: {
    shipping: false,
    giveaway: false
  },
  content: {
    own_content: false,
    reposts_only: false,
    should_tag_page: false,
    hashtags: []
  },
  social: {
    facebook: {
      include: false,
      status_update: false,
      image: false,
      video: false,
      blog: false
    },
    instagram: {
      include: false,
      story_mention: false,
      image: false,
      video: false,
      story_takeover: false
    },
    twitter: {
      include: false,
      tweet: false,
      image: false,
      video: false,
      blog: false
    },
    youtube: {
      include: false,
      vlog: false,
      review: false,
      unboxing: false,
      tutorial: false,
      comedic: false,
      mention: false,
      haul: false,
      lookbook: false,
      favorites: false
    }
  }
};

export const adminFilters = [
  {
    value: 'approved',
    label: 'Approved'
  },
  {
    value: 'unapproved',
    label: 'Unapproved'
  },
  {
    value: 'collaborations',
    label: 'Collaborations'
  },
  {
    value: 'agent',
    label: 'Agents'
  }
];
