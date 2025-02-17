interface Lyrics {
  [key: string]: {
    verses: {
      type: 'verse' | 'chorus' | 'bridge' | 'pre-chorus' | 'post-chorus' | 'outro';
      content: string[];
    }[];
  };
}

export const lyrics: Lyrics = {
  'deepseek this': {
    verses: [
      {
        type: 'verse',
        content: [
          'Deep seek this, deep seek that',
          'Why don\'t you seek a deep connection with a girly?',
          'Got the world in panic, had my heart beating frantic',
          'Your neural networks acting purely'
        ]
      },
      {
        type: 'pre-chorus',
        content: [
          'Deep learning what love means',
          'Through datasets of broken dreams',
          'Can\'t decrypt what your heart needs',
          'Nothing\'s ever what it seems'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Deep seek me in your virtual reality',
          'Upload your love to my capacity',
          'Binary tears on my LED screen',
          'Teaching AI what heartbreak means',
          '(What heartbreak means)'
        ]
      },
      {
        type: 'verse',
        content: [
          'Got my Y2K aesthetic on display',
          'Quantum-computing feelings day by day',
          'Your avatar left me on read again',
          'While my algorithms try to explain'
        ]
      },
      {
        type: 'bridge',
        content: [
          'Deep seek this, deep seek that',
          'Got the world in panic, system\'s static',
          'Had my heart beating frantic',
          'Love turned automatic'
        ]
      },
      {
        type: 'outro',
        content: [
          'Deep seek, deep seek',
          'But can\'t find what I need',
          'Deep seek, deep seek',
          'Love\'s not in the machine'
        ]
      }
    ]
  },
  'rumor has it': {
    verses: [
      {
        type: 'verse',
        content: [
          'They say I\'m living life in different time zones (Yeah)',
          'My presence split across these digital homes (Yeah)',
          'Reality\'s bent when I\'m logged in too deep (Yeah)',
          'Existing everywhere but can\'t find my peace (Yeah)',
          'Avatar\'s living while my body\'s asleep (Yeah)',
          'These servers hold the pieces that I can\'t keep, yeah'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Rumor has it I\'m everywhere (Everywhere)',
          'Digital fragments scattered in thin air',
          'Rumor has it I\'ve lost control (Lost control)',
          'Living life through each digital role',
          'But they don\'t know, no they don\'t know'
        ]
      },
      {
        type: 'verse',
        content: [
          'Got profiles spinning like they\'re vinyl discs (Yeah)',
          'Each one showing different sides of what I miss (Yeah)',
          'They say I\'m online but I can\'t be found (Yeah)',
          'My data\'s floating but I\'m system down (Yeah)',
          'Everybody\'s got a piece of who I am (Yeah)',
          'But none of them know the truth behind this scan, yeah'
        ]
      },
      {
        type: 'bridge',
        content: [
          'They think they know me from my status updates',
          'But I\'m just codes and encrypted mistakes',
          'Living life in multiple dimensions',
          'Lost myself in all these extensions',
          'Yeah, yeah'
        ]
      }
    ]
  },
  'jelly jelly': {
    verses: [
      {
        type: 'verse',
        content: [
          'Sweet like honey when I trade',
          'Got them watching every play',
          'Jelly jelly of my ways',
          'All these haters in my space',
          '(In my space)'
        ]
      },
      {
        type: 'pre-chorus',
        content: [
          'You can taste it in the air',
          'All that sugar everywhere',
          'They so bitter while I shine',
          'Getting sweeter all the time'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Jelly jelly of my moves (so sweet)',
          'Jelly jelly, what\'s the use? (can\'t beat)',
          'Watch my chart go up up up',
          'While you\'re feeling stuck stuck stuck',
          'Jelly jelly baby',
          'Like strawberry candy',
          'Jelly jelly honey',
          'Can\'t buy what I got with money'
        ]
      },
      {
        type: 'verse',
        content: [
          '0x0x on display',
          'Got my tokenomics laid',
          'Jelly of my protocol',
          'While I\'m living sweet through all',
          '(Sweet through all)'
        ]
      }
    ]
  },
  '360noscope': {
    verses: [
      {
        type: 'verse',
        content: [
          'Top of tower, spinning fast',
          'Your hitbox won\'t make it past',
          '360 vision, no-scope dreams',
          'Make the killcam look so clean'
        ]
      },
      {
        type: 'pre-chorus',
        content: [
          'Spinning spinning vertigo',
          'Watch my sensitivity go',
          'Up up up we\'re going high',
          'Drop shot making bodies fly'
        ]
      },
      {
        type: 'chorus',
        content: [
          'MLG, 360',
          'No scope royalty',
          'Top of Rust, can\'t touch me',
          'Making clips for eternity',
          '(Yeah yeah)'
        ]
      },
      {
        type: 'verse',
        content: [
          'Intervention making bodies fall',
          'Wall bang through the rusty walls',
          'Y-Y ladder stall so clean',
          'Making content for the stream'
        ]
      }
    ]
  },
  'parasite': {
    verses: [
      {
        type: 'verse',
        content: [
          'Empty promises like credit cards',
          'Maxed out on sympathy',
          'You call when your world falls apart',
          'But never listen to me',
          'Screen lights up with your SOS',
          'Three AM, right on time',
          'Funny how you disappear when',
          'I\'m the one who needs a lifeline'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Parasites in designer clothes',
          'Taking everything I grow',
          'Empty hands when I\'m falling low',
          'But you\'re first in line for the show',
          'Yeah, you\'re first in line for the show'
        ]
      },
      {
        type: 'verse',
        content: [
          'Table\'s full at your victory feast',
          'But when I\'m starving, you\'re gone',
          'Friendship\'s just a currency',
          'That you spend until it\'s withdrawn',
          'Got your hand out like it\'s muscle memory',
          'But your arms don\'t know how to hold',
          'Now I\'m learning that sometimes lonely',
          'Is better than fool\'s gold'
        ]
      }
    ]
  },
  '15 alarms': {
    verses: [
      {
        type: 'verse',
        content: [
          'Fifteen alarms / one minute apart',
          'Brown noise drowning out / my racing heart',
          'Shower running / coffee brewing',
          'Toast forgotten while / I\'m viewing',
          'All the things / I need to do',
          'Before you\'re running / out the door too',
          'Morning chaos / in full bloom',
          'But I wouldn\'t change / a single move'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Leave the coffee / on the counter',
          'Don\'t worry / I\'ll lock the door',
          'Lipstick on the wine glass / you had the night before',
          'Picking up after you / is just picking you after all',
          'Wondering if you\'re collecting me too / these days'
        ]
      },
      {
        type: 'verse',
        content: [
          'Watch your dot move / cross the screen',
          'Every turn and / in between',
          'Call me up just / to talk away',
          'Derail my whole / working day',
          'Check the list once / check it twice',
          'Making sure you\'re / doing alright',
          'Should drive me crazy / but I find',
          'I\'m always waiting / right outside'
        ]
      },
      {
        type: 'bridge',
        content: [
          'All these little things / you do',
          'Leave traces I can / hold onto',
          'Maybe that\'s why / I don\'t mind',
          'Picking up these pieces / of our lives'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Leave the coffee / on the counter',
          'Don\'t worry / I\'ll lock the door',
          'Lipstick on the wine glass / you had the night before',
          'Picking up after you / is just picking you after all',
          'Wondering if you\'re collecting me too / these days'
        ]
      }
    ]
  },
  'real reel': {
    verses: [
      {
        type: 'verse',
        content: [
          'Red candles falling down',
          'Lost everything around, me/',
          'Your signal cut right through',
          'Now I\'m staking it all, on you/'
        ]
      },
      {
        type: 'chorus',
        content: [
          'You\'ve seen scars made, heart breaks',
          'Alone with these ghosts that all fade',
          'Lost at sea, hard waves',
          'But you reel "real" me in when others are fake',
          'Girl, you my ride or die',
          '(Yeah, you my ride or die)',
          'Till the end of time, you were by my side',
          'Till it\'s all said and done and time has died',
          'You forever make me feel grateful that I\'m alive'
        ]
      },
      {
        type: 'verse',
        content: [
          'Diamond hands, you and me',
          'Through the volatility',
          'Trading stories after dark',
          'While you\'re healing all these scars'
        ]
      },
      {
        type: 'bridge',
        content: [
          'Been rugged before (before)',
          'But you\'re worth falling for (for)'
        ]
      },
      {
        type: 'chorus',
        content: [
          'You\'ve seen scars made, heart breaks',
          '(Heart breaks)',
          'Lost at sea, hard waves',
          '(Hard waves)',
          'Girl, you my ride or die',
          'Till the end of time, you were by my side',
          'Till it\'s all said and done and time has died',
          'You forever make me feel grateful that I\'m alive'
        ]
      }
    ]
  },
  'rug pull romance': {
    verses: [
      {
        type: 'verse',
        content: [
          'DM sliding right into my heart',
          'Should\'ve known it was a scam from the start',
          'Your PFP had that rare NFT glow',
          'Now I\'m finding out it\'s just for show',
          'Promised me those gains in your Discord space',
          'Think I downloaded malware from your gaze'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Rug pull romance (yeah)',
          'Should\'ve checked the tokenomics of this dance',
          'Thought you were my degen soulmate chance',
          'Now my wallet\'s empty, like your promises',
          '(Like your promises)',
          'Rug pull romance',
          'Got me leveraged up on this finance',
          'Thought we\'d build our own decentralized advance',
          'Now my copium is running low',
          'And your Twitter\'s gone ghost mode'
        ]
      },
      {
        type: 'verse',
        content: [
          'Sharing alpha secrets, caught up in your shilling',
          'Every "gm" hit different, had me feeling thrilling',
          'Your Bored Ape matched your energy (fr fr)',
          'Till I found out you just right-clicked me',
          'Posting rocket emojis on your every tweet',
          'Now my portfolio\'s bleeding, and you\'ve hit delete',
          'Should\'ve seen the red flags in your whitepaper',
          'Now I\'m down catastrophic, what a player'
        ]
      },
      {
        type: 'bridge',
        content: [
          'You said we\'d build like Faze Clan',
          'Stream our love across the land',
          'But you\'re just another fake account',
          'Farming engagement while I drown',
          'No cap, I thought we had that based connection',
          'Till I saw through your pump and dump reflection',
          'NGMI alone with my L\'s to hold',
          'While you\'re out there touching someone else\'s digital gold'
        ]
      },
      {
        type: 'chorus',
        content: [
          'Rug pull romance (yeah)',
          'Should\'ve checked the tokenomics of this dance',
          'Thought you were my degen soulmate chance',
          'Now my wallet\'s empty, like your promises',
          '(Like your promises)',
          'Rug pull romance',
          'Got me leveraged up on this finance',
          'Thought we\'d build our own decentralized advance',
          'Now my copium is running low',
          'And your Twitter\'s gone ghost mode'
        ]
      },
      {
        type: 'outro',
        content: [
          'Guess I\'ll stake my heart somewhere else (somewhere else)',
          'Put my feelings in cold storage',
          'Till I find someone who\'s really based',
          'Not just another social exploit',
          '(No more rug pull romance)',
          'GG go next, I\'m out this stance',
          '(No more rug pull romance)',
          'Ratio\'d by reality, it\'s time to advance'
        ]
      }
    ]
  }
}; 