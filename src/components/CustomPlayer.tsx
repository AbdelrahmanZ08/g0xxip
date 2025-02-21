import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Music2, Mic2 } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface Verse {
  type: string;
  content: string[];
}

interface SongLyrics {
  verses: Verse[];
}

const songLyrics: Record<string, SongLyrics> = {
  'rumor has it': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "They say I'm living life in different time zones (Yeah)",
          "My presence split across these digital homes (Yeah)",
          "Reality's bent when I'm logged in too deep (Yeah)",
          "Existing everywhere but can't find my peace (Yeah)",
          "Avatar's living while my body's asleep (Yeah)",
          "These servers hold the pieces that I can't keep, yeah"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Rumor has it I'm everywhere (Everywhere)",
          "Digital fragments scattered in thin air",
          "Rumor has it I've lost control (Lost control)",
          "Living life through each digital role",
          "But they don't know, no they don't know"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Got profiles spinning like they're vinyl discs (Yeah)",
          "Each one showing different sides of what I miss (Yeah)",
          "They say I'm online but I can't be found (Yeah)",
          "My data's floating but I'm system down (Yeah)",
          "Everybody's got a piece of who I am (Yeah)",
          "But none of them know the truth behind this scan, yeah"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "They think they know me from my status updates",
          "But I'm just codes and encrypted mistakes",
          "Living life in multiple dimensions",
          "Lost myself in all these extensions",
          "Yeah, yeah"
        ]
      }
    ]
  },
  '15 alarms': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Fifteen alarms / one minute apart",
          "Brown noise drowning out / my racing heart",
          "Shower running / coffee brewing",
          "Toast forgotten while / I'm viewing",
          "All the things / I need to do",
          "Before you're running / out the door too",
          "Morning chaos / in full bloom",
          "But I wouldn't change / a single move"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Leave the coffee / on the counter",
          "Don't worry / I'll lock the door",
          "Lipstick on the wine glass / you had the night before",
          "Picking up after you / is just picking you after all",
          "Wondering if you're collecting me too / these days"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Watch your dot move / cross the screen",
          "Every turn and / in between",
          "Call me up just / to talk away",
          "Derail my whole / working day",
          "Check the list once / check it twice",
          "Making sure you're / doing alright",
          "Should drive me crazy / but I find",
          "I'm always waiting / right outside"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "All these little things / you do",
          "Leave traces I can / hold onto",
          "Maybe that's why / I don't mind",
          "Picking up these pieces / of our lives"
        ]
      },
      {
        type: 'Final Chorus',
        content: [
          "Leave the coffee / on the counter",
          "Don't worry / I'll lock the door",
          "Lipstick on the wine glass / you had the night before",
          "Picking up after you / is just picking you after all",
          "Wondering if you're collecting me too / these days"
        ]
      }
    ]
  },
  'rug pull romance': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "DM sliding right into my heart",
          "Should've known it was a scam from the start",
          "Your PFP had that rare NFT glow",
          "Now I'm finding out it's just for show",
          "Promised me those gains in your Discord space",
          "Think I downloaded malware from your gaze"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Rug pull romance (yeah)",
          "Should've checked the tokenomics of this dance",
          "Thought you were my degen soulmate chance",
          "Now my wallet's empty, like your promises",
          "(Like your promises)",
          "Rug pull romance",
          "Got me leveraged up on this finance",
          "Thought we'd build our own decentralized advance",
          "Now my copium is running low",
          "And your Twitter's gone ghost mode"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Sharing alpha secrets, caught up in your shilling",
          "Every 'gm' hit different, had me feeling thrilling",
          "Your Bored Ape matched your energy (fr fr)",
          "Till I found out you just right-clicked me",
          "Posting rocket emojis on your every tweet",
          "Now my portfolio's bleeding, and you've hit delete",
          "Should've seen the red flags in your whitepaper",
          "Now I'm down catastrophic, what a player"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "You said we'd build like Faze Clan",
          "Stream our love across the land",
          "But you're just another fake account",
          "Farming engagement while I drown",
          "No cap, I thought we had that based connection",
          "Till I saw through your pump and dump reflection",
          "NGMI alone with my L's to hold",
          "While you're out there touching someone else's digital gold"
        ]
      },
      {
        type: 'Outro',
        content: [
          "Guess I'll stake my heart somewhere else (somewhere else)",
          "Put my feelings in cold storage",
          "Till I find someone who's really based",
          "Not just another social exploit",
          "(No more rug pull romance)",
          "GG go next, I'm out this stance",
          "(No more rug pull romance)",
          "Ratio'd by reality, it's time to advance"
        ]
      }
    ]
  },
  'deepseek this': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Deep seek this, deep seek that",
          "Why don't you seek a deep connection with a girly?",
          "Got the world in panic, had my heart beating frantic",
          "Your neural networks acting purely"
        ]
      },
      {
        type: 'Pre-Chorus',
        content: [
          "Deep learning what love means",
          "Through datasets of broken dreams",
          "Can't decrypt what your heart needs",
          "Nothing's ever what it seems"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Deep seek me in your virtual reality",
          "Upload your love to my capacity",
          "Binary tears on my LED screen",
          "Teaching AI what heartbreak means",
          "(What heartbreak means)"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Got my Y2K aesthetic on display",
          "Quantum-computing feelings day by day",
          "Your avatar left me on read again",
          "While my algorithms try to explain"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "Deep seek this, deep seek that",
          "Got the world in panic, system's static",
          "Had my heart beating frantic",
          "Love turned automatic"
        ]
      },
      {
        type: 'Outro',
        content: [
          "Deep seek, deep seek",
          "But can't find what I need",
          "Deep seek, deep seek",
          "Love's not in the machine"
        ]
      }
    ]
  },
  'real reel': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Red candles falling down",
          "Lost everything around, me/",
          "Your signal cut right through",
          "Now I'm staking it all, on you/"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "You've seen scars made, heart breaks",
          "Alone with these ghosts that all fade",
          "Lost at sea, hard waves",
          "But you reel 'real' me in when others are fake",
          "Girl, you my ride or die",
          "(Yeah, you my ride or die)",
          "Till the end of time, you were by my side",
          "Till it's all said and done and time has died",
          "You forever make me feel grateful that I'm alive"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Diamond hands, you and me",
          "Through the volatility",
          "Trading stories after dark",
          "While you're healing all these scars"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "Been rugged before (before)",
          "But you're worth falling for (for)"
        ]
      },
      {
        type: 'Final Chorus',
        content: [
          "You've seen scars made, heart breaks",
          "(Heart breaks)",
          "Lost at sea, hard waves",
          "(Hard waves)",
          "Girl, you my ride or die",
          "Till the end of time, you were by my side",
          "Till it's all said and done and time has died",
          "You forever make me feel grateful that I'm alive"
        ]
      }
    ]
  },
  'parasite': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Empty promises like credit cards",
          "Maxed out on sympathy",
          "You call when your world falls apart",
          "But never listen to me",
          "Screen lights up with your SOS",
          "Three AM, right on time",
          "Funny how you disappear when",
          "I'm the one who needs a lifeline"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Parasites in designer clothes",
          "Taking everything I grow",
          "Empty hands when I'm falling low",
          "But you're first in line for the show",
          "Yeah, you're first in line for the show"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Table's full at your victory feast",
          "But when I'm starving, you're gone",
          "Friendship's just a currency",
          "That you spend until it's withdrawn",
          "Got your hand out like it's muscle memory",
          "But your arms don't know how to hold",
          "Now I'm learning that sometimes lonely",
          "Is better than fool's gold"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "Been giving out pieces of my soul",
          "To people who collect the toll",
          "But never pay their own",
          "Time to cut these shadows loose",
          "'Cause I've got nothing left to lose",
          "Except these heavy chains you chose"
        ]
      },
      {
        type: 'Outro',
        content: [
          "Parasites in designer clothes",
          "Taking, taking as I go",
          "Now I know, yeah, now I know"
        ]
      }
    ]
  },
  'jelly, jelly': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Sweet like honey when I trade",
          "Got them watching every play",
          "Jelly jelly of my ways",
          "All these haters in my space",
          "(In my space)"
        ]
      },
      {
        type: 'Pre-Chorus',
        content: [
          "You can taste it in the air",
          "All that sugar everywhere",
          "They so bitter while I shine",
          "Getting sweeter all the time"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "Jelly jelly of my moves (so sweet)",
          "Jelly jelly, what's the use? (can't beat)",
          "Watch my chart go up up up",
          "While you're feeling stuck stuck stuck",
          "Jelly jelly baby",
          "Like strawberry candy",
          "Jelly jelly honey",
          "Can't buy what I got with money"
        ]
      },
      {
        type: 'Post-Chorus',
        content: [
          "(Spoken cutely)",
          "\"Aww, you're jelly? That's so cute!\""
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "0x0x on display",
          "Got my tokenomics laid",
          "Jelly of my protocol",
          "While I'm living sweet through all",
          "(Sweet through all)"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "Sugar-coated alpha leaks",
          "Got them bitter for weeks",
          "Try to copy, try to paste",
          "But they cannot match my taste",
          "Dripping sweet",
          "Like digital candy",
          "While they stay salty",
          "In their feelings, yeah"
        ]
      },
      {
        type: 'Outro',
        content: [
          "(Whispered playfully)",
          "Stay jelly, stay sweet",
          "While I make my own heat",
          "Guess that's why they call it",
          "Jelly jelly...",
          "(Giggled)",
          "Tastes like success ox"
        ]
      }
    ]
  },
  '360noscope': {
    verses: [
      {
        type: 'Verse 1',
        content: [
          "Top of tower, spinning fast",
          "Your hitbox won't make it past",
          "360 vision, no-scope dreams",
          "Make the killcam look so clean"
        ]
      },
      {
        type: 'Pre-Chorus',
        content: [
          "Spinning spinning vertigo",
          "Watch my sensitivity go",
          "Up up up we're going high",
          "Drop shot making bodies fly"
        ]
      },
      {
        type: 'Chorus',
        content: [
          "MLG, 360",
          "No scope royalty",
          "Top of Rust, can't touch me",
          "Making clips for eternity",
          "(Yeah yeah)"
        ]
      },
      {
        type: 'Verse 2',
        content: [
          "Intervention making bodies fall",
          "Wall bang through the rusty walls",
          "Y-Y ladder stall so clean",
          "Making content for the stream"
        ]
      },
      {
        type: 'Bridge',
        content: [
          "FLICK (flick)",
          "QUICK (quick)",
          "SPIN (spin)",
          "WIN (win)",
          "Still going hard"
        ]
      },
      {
        type: 'Outro',
        content: [
          "360 through the sky",
          "Making montage clips so fly",
          "(No scope life)"
        ]
      }
    ]
  }
};

const songs = [
  {
    title: 'rumor has it',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/5scqVjS2QlboGwy5M7tpS9?si=9a278f79cadf47e0',
    image: '/Images/g0xxip_webpng.png',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['Digital Identity', 'Social Media', 'Online Presence'],
    lyricsText: `[Verse 1]
They say I'm living life in different time zones (Yeah)
My presence split across these digital homes (Yeah)
Reality's bent when I'm logged in too deep (Yeah)
Existing everywhere but can't find my peace (Yeah)
Avatar's living while my body's asleep (Yeah)
These servers hold the pieces that I can't keep, yeah

[Chorus]
Rumor has it I'm everywhere (Everywhere)
Digital fragments scattered in thin air
Rumor has it I've lost control (Lost control)
Living life through each digital role
But they don't know, no they don't know

[Verse 2]
Got profiles spinning like they're vinyl discs (Yeah)
Each one showing different sides of what I miss (Yeah)
They say I'm online but I can't be found (Yeah)
My data's floating but I'm system down (Yeah)
Everybody's got a piece of who I am (Yeah)
But none of them know the truth behind this scan, yeah

[Chorus]
Rumor has it I'm everywhere (Everywhere)
Digital fragments scattered in thin air
Rumor has it I've lost control (Lost control)
Living life through each digital role
But they don't know, no they don't know

[Bridge]
They think they know me from my status updates
But I'm just codes and encrypted mistakes
Living life in multiple dimensions
Lost myself in all these extensions
Yeah, yeah`
  },
  {
    title: 'rug pull romance',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/7Dr4Pci8FxaoJK1eZuJt4G?si=1e1b966d6c704d81',
    image: '/Images/artworks-hGqzSLPzmCzESRHo-qyVo9A-t500x500.jpg',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['Crypto', 'Romance', 'Scam'],
    lyricsText: `[Verse 1]
DM sliding right into my heart
Should've known it was a scam from the start
Your PFP had that rare NFT glow
Now I'm finding out it's just for show
Promised me those gains in your Discord space
Think I downloaded malware from your gaze

[Chorus]
Rug pull romance (yeah)
Should've checked the tokenomics of this dance
Thought you were my degen soulmate chance
Now my wallet's empty, like your promises
(Like your promises)
Rug pull romance
Got me leveraged up on this finance
Thought we'd build our own decentralized advance
Now my copium is running low
And your Twitter's gone ghost mode

[Verse 2]
Sharing alpha secrets, caught up in your shilling
Every "gm" hit different, had me feeling thrilling
Your Bored Ape matched your energy (fr fr)
Till I found out you just right-clicked me
Posting rocket emojis on your every tweet
Now my portfolio's bleeding, and you've hit delete
Should've seen the red flags in your whitepaper
Now I'm down catastrophic, what a player

[Bridge]
You said we'd build like Faze Clan
Stream our love across the land
But you're just another fake account
Farming engagement while I drown
No cap, I thought we had that based connection
Till I saw through your pump and dump reflection
NGMI alone with my L's to hold
While you're out there touching someone else's digital gold

[Chorus]
Rug pull romance (yeah)
Should've checked the tokenomics of this dance
Thought you were my degen soulmate chance
Now my wallet's empty, like your promises
(Like your promises)
Rug pull romance
Got me leveraged up on this finance
Thought we'd build our own decentralized advance
Now my copium is running low
And your Twitter's gone ghost mode

[Outro]
Guess I'll stake my heart somewhere else (somewhere else)
Put my feelings in cold storage
Till I find someone who's really based
Not just another social exploit
(No more rug pull romance)
GG go next, I'm out this stance
(No more rug pull romance)
Ratio'd by reality, it's time to advance`
  },
  {
    title: '360noscope',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/5uiKchhmCjdSciJycm4CXz?si=8aa25f98806e4a76',
    image: '/Images/songs/360noscope.png',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['Gaming', 'Competition', 'Streaming'],
    lyricsText: `Top of tower, spinning fast
Your hitbox won't make it past
360 vision, no-scope dreams
Make the killcam look so clean

[Pre-Chorus]
Spinning spinning vertigo
Watch my sensitivity go
Up up up we're going high
Drop shot making bodies fly

[Chorus]
MLG, 360
No scope royalty
Top of Rust, can't touch me
Making clips for eternity
(Yeah yeah)

[Verse 2]
Intervention making bodies fall
Wall bang through the rusty walls
Y-Y ladder stall so clean
Making content for the stream

[Bridge]
FLICK (flick)
QUICK (quick)
SPIN (spin)
WIN (win)
Still going hard

[Chorus repeats]

[Outro]
360 through the sky
Making montage clips so fly
(No scope life)`
  },
  {
    title: 'jelly, jelly',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/7fkhgz0hkzWAHn43d1Tmay?si=0ddcd02a377247ab',
    image: '/Images/songs/jelly jelly.png',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['Success', 'Competition', 'Confidence'],
    lyricsText: `Sweet like honey when I trade
Got them watching every play
Jelly jelly of my ways
All these haters in my space
(In my space)

[Pre-Chorus]
You can taste it in the air
All that sugar everywhere
They so bitter while I shine
Getting sweeter all the time

[Chorus]
Jelly jelly of my moves (so sweet)
Jelly jelly, what's the use? (can't beat)
Watch my chart go up up up
While you're feeling stuck stuck stuck
Jelly jelly baby
Like strawberry candy
Jelly jelly honey
Can't buy what I got with money

[Post-Chorus]
(Spoken cutely)
"Aww, you're jelly? That's so cute!"

[Verse 2]
0x0x on display
Got my tokenomics laid
Jelly of my protocol
While I'm living sweet through all
(Sweet through all)

[Bridge]
Sugar-coated alpha leaks
Got them bitter for weeks
Try to copy, try to paste
But they cannot match my taste
Dripping sweet
Like digital candy
While they stay salty
In their feelings, yeah

[Chorus]
Jelly jelly of my moves (so sweet)
Jelly jelly, what's the use? (can't beat)
Watch my chart go up up up
While you're feeling stuck stuck stuck
Jelly jelly baby
Like strawberry candy
Jelly jelly honey
Can't buy what I got with money

[Outro]
(Whispered playfully)
Stay jelly, stay sweet
While I make my own heat
Guess that's why they call it
Jelly jelly...
(Giggled)
Tastes like success ox`
  },
  {
    title: 'deepseek this',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/17tebOMaphmHGKq75IrbE8?si=706c83e0f76342e4',
    image: '/Images/deepseek this.png',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['AI', 'Technology', 'Romance'],
    lyricsText: `[Verse 1]
Deep seek this, deep seek that
Why don't you seek a deep connection with a girly?
Got the world in panic, had my heart beating frantic
Your neural networks acting purely

[Pre-Chorus]
Deep learning what love means
Through datasets of broken dreams
Can't decrypt what your heart needs
Nothing's ever what it seems

[Chorus]
Deep seek me in your virtual reality
Upload your love to my capacity
Binary tears on my LED screen
Teaching AI what heartbreak means
(What heartbreak means)

[Verse 2]
Got my Y2K aesthetic on display
Quantum-computing feelings day by day
Your avatar left me on read again
While my algorithms try to explain

[Bridge]
Deep seek this, deep seek that
Got the world in panic, system's static
Had my heart beating frantic
Love turned automatic

[Repeat Chorus]

[Outro]
Deep seek, deep seek
But can't find what I need
Deep seek, deep seek
Love's not in the machine`
  },
  {
    title: 'paras1te',
    artist: 'g0xxip',
    url: 'https://open.spotify.com/track/0y72ljNQbPQOuxun1NsQay?si=63b505fe9bfa4a1f',
    image: '/Images/songs/parasite.png',
    platform: 'spotify',
    genre: 'Cyberpunk Pop',
    releaseDate: '2025',
    lyrics: true,
    categories: ['Relationships', 'Betrayal', 'Growth'],
    lyricsText: `Empty promises like credit cards
Maxed out on sympathy
You call when your world falls apart
But never listen to me
Screen lights up with your SOS
Three AM, right on time
Funny how you disappear when
I'm the one who needs a lifeline

[Chorus]
Parasites in designer clothes
Taking everything I grow
Empty hands when I'm falling low
But you're first in line for the show
Yeah, you're first in line for the show

[Verse 2]
Table's full at your victory feast
But when I'm starving, you're gone
Friendship's just a currency
That you spend until it's withdrawn
Got your hand out like it's muscle memory
But your arms don't know how to hold
Now I'm learning that sometimes lonely
Is better than fool's gold

[Bridge]
Been giving out pieces of my soul
To people who collect the toll
But never pay their own
Time to cut these shadows loose
'Cause I've got nothing left to lose
Except these heavy chains you chose

[Chorus repeats]

[Outro]
Parasites in designer clothes
Taking, taking as I go
Now I know, yeah, now I know`
  }
];

export default function CustomPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const playerRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && showLyrics) {
          setShowLyrics(false);
        }
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, [showLyrics]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentSong(index);
      });
    }
  }, [emblaApi]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    window.open(songs[currentSong].url, '_blank');
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative" ref={playerRef}>
      {/* Main Player Section */}
      <div className="w-full max-w-[95vw] mx-auto">
        <div className="bg-gradient-to-r from-black via-purple-900/20 to-black rounded-xl p-4 md:p-8">
          <div className="flex flex-col gap-6">
            {/* Album Art and Info */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-[280px] flex-shrink-0">
                <div className="relative aspect-square shadow-2xl shadow-purple-500/20">
                  <Image
                    src={songs[currentSong].image}
                    alt={songs[currentSong].title}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="space-y-3">
                  <h2 className="text-2xl font-['Terminal'] text-white truncate">
                    {songs[currentSong].title}
                  </h2>
                  <p className="text-lg font-['Terminal'] text-purple-300">
                    {songs[currentSong].artist}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span className="px-2 py-1 bg-purple-900/50 rounded-full">
                      {songs[currentSong].platform}
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 rounded-full">
                      {songs[currentSong].genre}
                    </span>
                    <span className="px-2 py-1 bg-purple-900/50 rounded-full">
                      {songs[currentSong].releaseDate}
                    </span>
                  </div>
                  {songs[currentSong].categories && (
                    <div className="flex flex-wrap gap-2 text-sm">
                      {songs[currentSong].categories.map((category, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                          #{category.toLowerCase().replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button 
                onClick={scrollPrev}
                className="p-3 md:p-4 bg-purple-900/50 rounded-full text-white hover:bg-purple-800 transition-all"
              >
                <SkipBack size={24} />
              </button>
              <button 
                onClick={handlePlayPause}
                className="p-4 md:p-6 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <button 
                onClick={scrollNext}
                className="p-3 md:p-4 bg-purple-900/50 rounded-full text-white hover:bg-purple-800 transition-all"
              >
                <SkipForward size={24} />
              </button>
              <button
                onClick={() => setShowLyrics(!showLyrics)}
                className={`p-3 md:p-4 rounded-full transition-all ${
                  showLyrics 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-900/50 text-white hover:bg-purple-800'
                }`}
              >
                <Mic2 size={24} />
              </button>
            </div>

            {/* Song Queue */}
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-l from-black to-transparent z-10" />
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3 px-4">
                  {songs.map((song, index) => (
                    <div 
                      key={song.title} 
                      className={`flex-none w-24 md:w-28 cursor-pointer transition-all duration-300 ${
                        index === currentSong 
                          ? 'opacity-100 scale-105 ring-2 ring-purple-500 ring-offset-2 ring-offset-black' 
                          : 'opacity-50 hover:opacity-75 hover:scale-102'
                      }`}
                      onClick={() => emblaApi?.scrollTo(index)}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={song.image}
                          alt={song.title}
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <p className="text-xs md:text-sm font-['Terminal'] text-white truncate text-center">
                            {song.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Lyrics Section */}
      {showLyrics && isVisible && (
        <div 
          className="fixed top-0 right-0 w-[400px] h-full bg-black/95 rounded-l-xl shadow-2xl shadow-purple-500/20 overflow-hidden z-50 transition-all duration-300 ease-out transform border-l border-purple-500/20"
          style={{
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="sticky top-0 bg-black/95 p-4 border-b border-purple-500/20 flex justify-between items-center">
            <h3 className="text-xl font-['Terminal'] text-white flex items-center gap-2">
              <Mic2 className="text-purple-400" size={20} />
              Lyrics
            </h3>
            <button
              onClick={() => setShowLyrics(false)}
              className="p-2 hover:bg-purple-900/50 rounded-full transition-all"
            >
              <span className="text-purple-300 text-lg">×</span>
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100%-4rem)]">
            <div className="prose prose-invert font-['Terminal'] max-w-none">
              {songs[currentSong].lyricsText ? (
                <div className="space-y-8">
                  {songs[currentSong].lyricsText.split('\n\n').map((section, index) => (
                    <div 
                      key={index} 
                      className="space-y-2 opacity-0 animate-fadeSlideIn"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {section.split('\n').map((line, lineIndex) => (
                        <p 
                          key={lineIndex}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 animate-fadeIn">
                  <p className="text-gray-400 italic">
                    Lyrics are not available for this track yet.
                  </p>
                  <p className="text-purple-400 mt-2">
                    Check back soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 