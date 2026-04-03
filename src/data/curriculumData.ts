// curriculumData.generated.ts

import { Phase, WeekData } from "./types";

export const phases: Phase[] = [
  {
    "id": "all",
    "label": "All Phases",
    "dot": "#eeeae3",
    "title": "All 32 Weeks",
    "desc": "April → November · Complete curriculum from zero to job-ready"
  },
  {
    "id": "foundation",
    "label": "Phase 1 · Foundation",
    "dot": "#4aa0f0",
    "title": "Phase 1 — Foundation",
    "desc": "Weeks 1–5 · Fundamentals, Unity, documentation, first game"
  },
  {
    "id": "prototype",
    "label": "Phase 2 · Prototype",
    "dot": "#2dd4a0",
    "title": "Phase 2 — Prototype Skills",
    "desc": "Weeks 6–10 · Level design, systems, Figma, narrative"
  },
  {
    "id": "jam",
    "label": "Phase 3 · Game Jams",
    "dot": "#b8f04a",
    "title": "Phase 3 — Game Jams",
    "desc": "Weeks 11–15 · Ship games, build community, gain visibility"
  },
  {
    "id": "deepen",
    "label": "Phase 4 · Deepen",
    "dot": "#f0b030",
    "title": "Phase 4 — Deepen Skills",
    "desc": "Weeks 16–20 · Build your main portfolio project"
  },
  {
    "id": "portfolio",
    "label": "Phase 5 · Portfolio",
    "dot": "#f05a48",
    "title": "Phase 5 — Portfolio Assembly",
    "desc": "Weeks 21–26 · Polish, launch, build portfolio site"
  },
  {
    "id": "apply",
    "label": "Phase 6 · Apply",
    "dot": "#8b78f0",
    "title": "Phase 6 — Apply for Jobs",
    "desc": "Weeks 27–32 · Applications, interview prep, December-ready"
  }
];

export const weeks: WeekData[] = [
  {
    "phase": "foundation",
    "num": 1,
    "title": "Game design fundamentals",
    "dates": "Apr 7 – Apr 13",
    "type": "learn",
    "focus": "Start with the vocabulary. You cannot design what you cannot name.",
    "days": [
      {
        "l": "MDA framework",
        "t": "theory"
      },
      {
        "l": "Analyse a game",
        "t": "practice"
      },
      {
        "l": "Core loop theory",
        "t": "theory"
      },
      {
        "l": "Write breakdown",
        "t": "portfolio"
      },
      {
        "l": "Player psychology",
        "t": "theory"
      },
      {
        "l": "Free gaming",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Read the MDA Framework paper — Mechanics, Dynamics, Aesthetics. Read it twice.",
        "tag": "theory",
        "res": [
          {
            "url": "https://users.cs.northwestern.edu/~hunicke/MDA.pdf",
            "label": "MDA Paper PDF",
            "cls": "rfree"
          },
          {
            "url": "https://gamedesignskills.com/game-design/mda/",
            "label": "MDA Explained",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Watch \"Juice it or Lose it\" and \"The Door Problem\" — two essential GDC talks every designer must see.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Fy0aCDmgnxg",
            "label": "▶ Juice It or Lose It",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=mXTxQko-JH0",
            "label": "▶ The Door Problem",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Watch 5 GMTK videos on game design topics. Take notes on each.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "GMTK YouTube",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=zQvWMdWhFCc",
            "label": "▶ How to Design Games",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Play one complete game analytically — write 300 words: core loop, feedback, what you would change.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "GMTK (watch first)",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Learn key vocabulary: core loop, feedback loop, game feel, affordance, friction, emergence.",
        "tag": "theory",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills Wiki",
            "cls": "rfree"
          },
          {
            "url": "https://www.gamedeveloper.com",
            "label": "GDC Articles",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Set up your blog or devlog. Write first post: \"Why I want to be a game designer.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion (free)",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium (free)",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "foundation",
    "num": 2,
    "title": "Game design documentation",
    "dates": "Apr 14 – Apr 20",
    "type": "learn",
    "focus": "The skill most designers lack. A clean doc shows you can think, not just feel.",
    "days": [
      {
        "l": "GDD study",
        "t": "theory"
      },
      {
        "l": "Read real GDDs",
        "t": "theory"
      },
      {
        "l": "Write your GDD",
        "t": "practice"
      },
      {
        "l": "One pager",
        "t": "practice"
      },
      {
        "l": "System doc",
        "t": "practice"
      },
      {
        "l": "Light gaming",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Study 2 real Game Design Documents online — analyse their structure and what information they include.",
        "tag": "theory",
        "res": [
          {
            "url": "https://gamedesignskills.com/game-design/game-design-document/",
            "label": "GDD Guide",
            "cls": "rfree"
          },
          {
            "url": "https://www.gamedeveloper.com/design/anatomy-of-a-design-document",
            "label": "Anatomy of a GDD",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a one-pager for a simple game idea — one page, clear concept pitch. Practice until natural.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a full GDD for a small game concept — 5 to 7 pages covering mechanics, systems, player flow.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Write one system design doc — design a full \"health + damage system\" in detail.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Post your one-pager on your blog as \"Design Diary #1.\" Make it public.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "foundation",
    "num": 3,
    "title": "Unity basics — learn the engine",
    "dates": "Apr 21 – Apr 27",
    "type": "learn",
    "focus": "You need to prototype your own ideas. No one will build your prototypes for you.",
    "days": [
      {
        "l": "Install Unity",
        "t": "practice"
      },
      {
        "l": "Interface tour",
        "t": "theory"
      },
      {
        "l": "First scene",
        "t": "practice"
      },
      {
        "l": "Movement script",
        "t": "practice"
      },
      {
        "l": "Collision + UI",
        "t": "practice"
      },
      {
        "l": "Experiment",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Install Unity LTS from unity.com. Set up your first blank project.",
        "tag": "practice",
        "res": [
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn (official)",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Complete Unity \"Roll-a-Ball\" official tutorial — your first working GameObject.",
        "tag": "practice",
        "res": [
          {
            "url": "https://learn.unity.com/project/roll-a-ball",
            "label": "Roll-a-Ball Tutorial",
            "cls": "rfree"
          },
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys YouTube",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Watch the free 7-hour Unity course on freeCodeCamp YouTube — follow along and build.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=gB1F9G0JXOo",
            "label": "▶ Unity 7hr Free Course",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys Unity",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Learn the essentials: GameObjects, Components, Transform, Rigidbody, MonoBehaviour lifecycle.",
        "tag": "theory",
        "res": [
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Learn only the C# you need: if/else, Update(), OnCollisionEnter(), public variables.",
        "tag": "theory",
        "res": [
          {
            "url": "https://learn.unity.com/course/create-with-code",
            "label": "Unity Create with Code",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Optional paid: Michigan State University Unity course on Coursera — free to audit.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.coursera.org/specializations/game-design-and-development",
            "label": "MSU Unity Course (audit free)",
            "cls": "rpaid"
          }
        ]
      }
    ]
  },
  {
    "phase": "foundation",
    "num": 4,
    "title": "Build your first tiny game",
    "dates": "Apr 28 – May 4",
    "type": "build",
    "focus": "First finished thing ever. Small and complete beats big and broken forever.",
    "days": [
      {
        "l": "Plan the game",
        "t": "practice"
      },
      {
        "l": "Build mechanics",
        "t": "practice"
      },
      {
        "l": "Win/lose state",
        "t": "practice"
      },
      {
        "l": "Polish it",
        "t": "practice"
      },
      {
        "l": "Upload itch.io",
        "t": "portfolio"
      },
      {
        "l": "Show someone",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Design a 10-minute game on paper first. Dodge, collect, survive. Simple is good.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Fy0aCDmgnxg",
            "label": "▶ Juice It or Lose It",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Build it fully in Unity — start screen, gameplay loop, win/lose screen. No missing pieces.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys Unity",
            "cls": "ryt"
          },
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Add sound effects from FreeSound.org — every player action needs audio feedback.",
        "tag": "practice",
        "res": [
          {
            "url": "https://freesound.org",
            "label": "FreeSound.org",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Build for WebGL in Unity and upload to itch.io. Write a proper game description page.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a post mortem — what worked, what did not, what you learned. 300 words. Post publicly.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          },
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "foundation",
    "num": 5,
    "title": "Break week + review",
    "dates": "May 5 – May 11",
    "type": "break",
    "focus": "Rest is not laziness. A tired mind makes worse design decisions.",
    "days": [
      {
        "l": "Review weeks 1–4",
        "t": "theory"
      },
      {
        "l": "Play freely",
        "t": "rest"
      },
      {
        "l": "Outdoor time",
        "t": "rest"
      },
      {
        "l": "Light reading",
        "t": "theory"
      },
      {
        "l": "Plan phase 2",
        "t": "theory"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Honest self-assessment: what did you learn, what is still fuzzy, what needs revisiting?",
        "tag": "theory",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Play 2 to 3 games just for fun. No analysis. Actually enjoy them.",
        "tag": "rest",
        "res": []
      },
      {
        "text": "Read chapter 1 of \"The Art of Game Design\" by Jesse Schell.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Start \"Challenges for Game Designers\" by Brathwaite — do 2 exercises from chapter 1.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.amazon.in/Challenges-Game-Designers-Brenda-Brathwaite/dp/158450580X",
            "label": "📖 Challenges for Designers",
            "cls": "rbook"
          }
        ]
      }
    ]
  },
  {
    "phase": "prototype",
    "num": 6,
    "title": "Level design theory",
    "dates": "May 12 – May 18",
    "type": "learn",
    "focus": "Space tells stories. A good level guides without forcing.",
    "days": [
      {
        "l": "Level theory",
        "t": "theory"
      },
      {
        "l": "Study HL2",
        "t": "practice"
      },
      {
        "l": "Dark Souls maps",
        "t": "practice"
      },
      {
        "l": "Sketch layouts",
        "t": "practice"
      },
      {
        "l": "Greybox Unity",
        "t": "practice"
      },
      {
        "l": "Free gaming",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Watch GMTK on level design fundamentals. Watch \"How Level Design Can Tell a Story\" on GDC YouTube.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=ARJ8cAGm6JE",
            "label": "▶ GMTK Level Design",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=iNiAZ2PSqtI",
            "label": "▶ GDC Level Design Talks",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=4RlpMhBKNr0",
            "label": "▶ Celeste Level Design",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Play Half Life 2 level 1 — pause every 2 minutes and annotate: how is the player guided, where does pacing change?",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "GMTK analysis method",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Draw 3 level layouts on paper — top-down, annotated with player start, challenge zones, rest areas, exit.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Build one greybox level in Unity — no art, only coloured blocks. A 2-minute platformer path.",
        "tag": "practice",
        "res": [
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          },
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write a level design document for your greybox — pacing, what the player learns in each section.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "prototype",
    "num": 7,
    "title": "Systems design basics",
    "dates": "May 19 – May 25",
    "type": "learn",
    "focus": "The most in-demand game design skill. Numbers, economies, progression loops.",
    "days": [
      {
        "l": "Economy theory",
        "t": "theory"
      },
      {
        "l": "Progression systems",
        "t": "theory"
      },
      {
        "l": "Design skill tree",
        "t": "practice"
      },
      {
        "l": "Balance combat",
        "t": "practice"
      },
      {
        "l": "Write system doc",
        "t": "portfolio"
      },
      {
        "l": "Light gaming",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Watch GDC Economy Design talk. Study resource faucets and sinks — what they are and why they matter.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=HhK3oEJY3O0",
            "label": "▶ GDC Economy Design",
            "cls": "ryt"
          },
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Analyse an RPG progression system you know well — Pokemon, Zelda, any RPG. Write how it works.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "▶ GMTK",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Design a skill tree in Figma or on paper — 15 nodes minimum, branching paths, clear player choice.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.figma.com",
            "label": "Figma (free)",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Build a combat balance spreadsheet — two characters, damage/health/speed. Balance so neither is OP.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a full system design document for your skill tree. Post it on your blog.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "prototype",
    "num": 8,
    "title": "Figma — UI/UX for games",
    "dates": "May 26 – Jun 1",
    "type": "learn",
    "focus": "Game designers who understand UI are significantly more hireable.",
    "days": [
      {
        "l": "Figma basics",
        "t": "theory"
      },
      {
        "l": "Study HUDs",
        "t": "practice"
      },
      {
        "l": "Design HUD",
        "t": "practice"
      },
      {
        "l": "Menu flow",
        "t": "practice"
      },
      {
        "l": "Add to portfolio",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Complete Figma beginner tutorial on YouTube — 2 hours. Learn frames, components, auto-layout.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.figma.com",
            "label": "Figma (free)",
            "cls": "rfree"
          },
          {
            "url": "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
            "label": "▶ Figma Beginner Tutorial",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Analyse HUDs from 5 different games — screenshot, annotate: what info is shown, why placed there?",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "▶ GMTK",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Design a complete game HUD in Figma — health, score, minimap, objectives.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.figma.com",
            "label": "Figma (free)",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Design a full menu flow wireframe — main menu, settings, pause, game over, back.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.figma.com",
            "label": "Figma (free)",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Export as PDF and post on blog as \"UI Design Case Study #1.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "prototype",
    "num": 9,
    "title": "Narrative design basics",
    "dates": "Jun 2 – Jun 8",
    "type": "learn",
    "focus": "Story makes players care. Even non-story games need narrative thinking.",
    "days": [
      {
        "l": "Narrative theory",
        "t": "theory"
      },
      {
        "l": "Twine tutorial",
        "t": "practice"
      },
      {
        "l": "Write branching story",
        "t": "practice"
      },
      {
        "l": "Environmental story",
        "t": "practice"
      },
      {
        "l": "Publish + document",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Watch GDC Narrative Design talk. Study: branching dialogue, environmental storytelling, character motivation.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=zyVTxGpEO30",
            "label": "▶ GDC Narrative Design",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "▶ GMTK",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Learn Twine in one sitting — build a 5-choice branching story in 3 hours.",
        "tag": "practice",
        "res": [
          {
            "url": "https://twinery.org",
            "label": "Twine (free)",
            "cls": "rfree"
          },
          {
            "url": "https://www.youtube.com/watch?v=IZ8VmCFEGwM",
            "label": "▶ Twine Tutorial",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Design a scene using only environmental storytelling — no dialogue. Tell a story through objects.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "▶ GMTK",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write a character motivation document — backstory, goal, fear, conflict.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Publish your Twine story on itch.io. Write a blog post about your design choices.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          },
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "prototype",
    "num": 10,
    "title": "Break week + portfolio review",
    "dates": "Jun 9 – Jun 15",
    "type": "break",
    "focus": "You are 10 weeks in. Breathe. Assess. Fill the gaps.",
    "days": [
      {
        "l": "Portfolio audit",
        "t": "portfolio"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Plan weeks 11–20",
        "t": "theory"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Portfolio audit — your blog should have 5+ posts by now. Does it look like a designer lives here?",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Game Design Portfolio",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Play 3 games this week for pure enjoyment. No notes, no analysis.",
        "tag": "rest",
        "res": []
      },
      {
        "text": "Pick 2 exercises from \"Challenges for Game Designers\" and complete them on paper.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.amazon.in/Challenges-Game-Designers-Brenda-Brathwaite/dp/158450580X",
            "label": "📖 Challenges for Designers",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Write a personal progress note — what you built, what surprised you, what you still fear.",
        "tag": "portfolio",
        "res": []
      }
    ]
  },
  {
    "phase": "jam",
    "num": 11,
    "title": "Game Jam #1 — first public game",
    "dates": "Jun 16 – Jun 22",
    "type": "build",
    "focus": "Small, finished, documented. Your first public proof that you can ship.",
    "days": [
      {
        "l": "Register jam",
        "t": "practice"
      },
      {
        "l": "Jam day 1 — design",
        "t": "practice"
      },
      {
        "l": "Jam day 2 — build",
        "t": "practice"
      },
      {
        "l": "Jam day 3 — build",
        "t": "practice"
      },
      {
        "l": "Submit + polish",
        "t": "practice"
      },
      {
        "l": "Post mortem",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Register for a 48-72 hour jam on itch.io — Brackeys Jam, Ludum Dare, or any active jam.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          },
          {
            "url": "https://ldjam.com",
            "label": "Ludum Dare",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "On jam start: write a one-pager design document BEFORE touching the engine. Always.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Build the game. Scope brutally small. Finished with one mechanic beats unfinished with five.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          },
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Submit on time. Something complete beats something impressive and unfinished.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a detailed post mortem — what you designed, built, learned, and would change.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "jam",
    "num": 12,
    "title": "Jam review + design deep dive",
    "dates": "Jun 23 – Jun 29",
    "type": "build",
    "focus": "Reading player feedback is a design skill. Take it seriously.",
    "days": [
      {
        "l": "Read all feedback",
        "t": "theory"
      },
      {
        "l": "Pick weakest system",
        "t": "practice"
      },
      {
        "l": "Redesign on paper",
        "t": "practice"
      },
      {
        "l": "Rebuild in Unity",
        "t": "practice"
      },
      {
        "l": "Document before/after",
        "t": "portfolio"
      },
      {
        "l": "Light rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Read every comment on your jam — list: top 3 things players praised, top 3 they struggled with.",
        "tag": "theory",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Identify the weakest designed system in your jam game.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Redesign it on paper first — write the design doc before touching code. Why does the new version solve the problem?",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Implement the improved system in Unity.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write before/after analysis. Post on blog: \"What playtesting taught me.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "jam",
    "num": 13,
    "title": "Game Jam #2 — different genre",
    "dates": "Jun 30 – Jul 6",
    "type": "build",
    "focus": "Second jam. You are faster now. More intentional design.",
    "days": [
      {
        "l": "Jam concept",
        "t": "practice"
      },
      {
        "l": "Jam build day 1",
        "t": "practice"
      },
      {
        "l": "Jam build day 2",
        "t": "practice"
      },
      {
        "l": "Polish + submit",
        "t": "practice"
      },
      {
        "l": "Post mortem",
        "t": "portfolio"
      },
      {
        "l": "Play others",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Enter a second game jam. Try a completely different genre from your first.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          },
          {
            "url": "https://ldjam.com",
            "label": "Ludum Dare",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write your design document before building — your GDD writing should be getting faster.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Focus on one mechanic done very well. Not five mechanics done poorly.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Fy0aCDmgnxg",
            "label": "▶ Juice It or Lose It",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Play at least 10 other jam entries and leave genuine comments. This is community building.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Detailed post mortem and blog post.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "jam",
    "num": 14,
    "title": "LinkedIn + community setup",
    "dates": "Jul 7 – Jul 13",
    "type": "portfolio",
    "focus": "Visibility is a skill. Start building your public presence now.",
    "days": [
      {
        "l": "LinkedIn setup",
        "t": "portfolio"
      },
      {
        "l": "Portfolio plan",
        "t": "portfolio"
      },
      {
        "l": "Post your games",
        "t": "portfolio"
      },
      {
        "l": "Connect with designers",
        "t": "portfolio"
      },
      {
        "l": "Join Discords",
        "t": "practice"
      },
      {
        "l": "Light rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Set up LinkedIn: headline = \"Aspiring Game Designer | Unity | Systems Design | Animation Background.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Post your 2 jam games on LinkedIn with a short story about design decisions in each.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Connect with 10 working game designers — send a genuine 2-sentence message. No job requests.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Join r/gamedesign on Reddit, IGDA Discord, Game Design Hangout Discord.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.reddit.com/r/gamedesign",
            "label": "r/gamedesign",
            "cls": "rfree"
          },
          {
            "url": "https://igda.org",
            "label": "IGDA",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Follow 20 game studios you want to work at someday on LinkedIn.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "jam",
    "num": 15,
    "title": "Full break week — no work",
    "dates": "Jul 14 – Jul 20",
    "type": "break",
    "focus": "You are 15 weeks in. A full real rest. No guilt. You earned this.",
    "days": [
      {
        "l": "Fully off",
        "t": "rest"
      },
      {
        "l": "Fully off",
        "t": "rest"
      },
      {
        "l": "Fully off",
        "t": "rest"
      },
      {
        "l": "Play games",
        "t": "rest"
      },
      {
        "l": "Play games",
        "t": "rest"
      },
      {
        "l": "Fully off",
        "t": "rest"
      },
      {
        "l": "Fully off",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Full week off from structured work. This is scheduled, not failure.",
        "tag": "rest",
        "res": []
      },
      {
        "text": "Play games you love. Watch films. Spend time with family.",
        "tag": "rest",
        "res": []
      },
      {
        "text": "If inspiration strikes write it in a note — but do not force any output this week.",
        "tag": "rest",
        "res": []
      }
    ]
  },
  {
    "phase": "deepen",
    "num": 16,
    "title": "Main project — concept phase",
    "dates": "Jul 21 – Jul 27",
    "type": "build",
    "focus": "Your biggest project starts. This becomes your portfolio centrepiece.",
    "days": [
      {
        "l": "Brainstorm 10 concepts",
        "t": "practice"
      },
      {
        "l": "Choose concept",
        "t": "practice"
      },
      {
        "l": "Write full GDD",
        "t": "portfolio"
      },
      {
        "l": "Plan systems",
        "t": "practice"
      },
      {
        "l": "Plan levels",
        "t": "practice"
      },
      {
        "l": "Review + refine",
        "t": "practice"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Brainstorm 10 game concepts — one sentence each. Range from tiny to ambitious.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Choose one concept you can finish in 8 weeks. Scope brutally small. Small and complete is the goal.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a complete GDD — 10 pages minimum. Every mechanic, system, win/lose, progression arc.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          },
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Create a milestone list — what gets built in which week. Treat it like a real production schedule.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Share the GDD on your blog publicly. Transparency builds community.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "deepen",
    "num": 17,
    "title": "Main project — core loop build",
    "dates": "Jul 28 – Aug 3",
    "type": "build",
    "focus": "Build the core loop first. Everything else is secondary until this feels good.",
    "days": [
      {
        "l": "Build core mechanic",
        "t": "practice"
      },
      {
        "l": "Refine it",
        "t": "practice"
      },
      {
        "l": "Add feedback",
        "t": "practice"
      },
      {
        "l": "Playtest yourself",
        "t": "practice"
      },
      {
        "l": "Adjust feel",
        "t": "practice"
      },
      {
        "l": "Write devlog",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Build only the core mechanic — what the player does every 5 seconds. Nothing else until it is fun.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Fy0aCDmgnxg",
            "label": "▶ Juice It or Lose It",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Make it feel good before adding anything else. Screen shake, particles, audio — add early.",
        "tag": "practice",
        "res": [
          {
            "url": "https://freesound.org",
            "label": "FreeSound.org",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Playtest with one other person. Watch silently. Note where they get confused or bored.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write weekly devlog — what you built, what you cut, what you learned.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "deepen",
    "num": 18,
    "title": "Main project — systems build",
    "dates": "Aug 4 – Aug 10",
    "type": "build",
    "focus": "Add systems around the core. Document every design decision.",
    "days": [
      {
        "l": "Build system 1",
        "t": "practice"
      },
      {
        "l": "Build system 2",
        "t": "practice"
      },
      {
        "l": "Balance testing",
        "t": "practice"
      },
      {
        "l": "Add progression",
        "t": "practice"
      },
      {
        "l": "Playtest + iterate",
        "t": "practice"
      },
      {
        "l": "Write devlog",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Build your secondary systems as per your GDD. Refer back to it — if it diverges, update the GDD.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          },
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Build UI and HUD — use your Figma design from week 8 as reference.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.figma.com",
            "label": "Figma",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Test balance — does difficulty ramp feel right? Adjust numbers based on playtesting.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=HhK3oEJY3O0",
            "label": "▶ GDC Economy Design",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write devlog — focus on one specific design decision you made this week and justify it.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "deepen",
    "num": 19,
    "title": "Game Jam #3 — mid-build sprint",
    "dates": "Aug 11 – Aug 17",
    "type": "build",
    "focus": "Third jam while building the main project. Different creative muscle.",
    "days": [
      {
        "l": "Jam entry + concept",
        "t": "practice"
      },
      {
        "l": "Jam build day 1",
        "t": "practice"
      },
      {
        "l": "Jam build day 2",
        "t": "practice"
      },
      {
        "l": "Polish + submit",
        "t": "practice"
      },
      {
        "l": "Post mortem",
        "t": "portfolio"
      },
      {
        "l": "Play others",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Enter the GMTK Game Jam 2025 — one of the biggest jams of the year, happens in August.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gmtk.itch.io/",
            "label": "GMTK Game Jam",
            "cls": "rfree"
          },
          {
            "url": "https://www.youtube.com/@GMTK",
            "label": "▶ GMTK",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Focus this jam on systems design — create a mechanic-first experience.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Try a genre you have never made before — puzzle, strategy, or narrative.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Post mortem and blog post. Compare your thinking now vs your first jam.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "deepen",
    "num": 20,
    "title": "Break week + GDC deep dive",
    "dates": "Aug 18 – Aug 24",
    "type": "break",
    "focus": "Fill your brain with the best design minds in the world. Rest and absorb.",
    "days": [
      {
        "l": "GDC marathon day 1",
        "t": "theory"
      },
      {
        "l": "GDC marathon day 2",
        "t": "theory"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Notes + reflection",
        "t": "theory"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Watch: \"Designing Spelunky\" by Derek Yu — one of the best game design talks ever made.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Uqk5Zf0tw3o",
            "label": "▶ Designing Spelunky (GDC)",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Watch: \"Into the Breach Design Postmortem\" — incredible systems design case study.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=s_I07Iq_2XM",
            "label": "▶ Into the Breach GDC",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Watch: \"Depth in Simplicity\" by Vlambeer — teaches game feel and design philosophy.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=AJdEqssNZ-U",
            "label": "▶ Vlambeer Depth in Simplicity",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=pnbBi3s5DIM",
            "label": "▶ Secrets of Indie",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Watch: \"Dead Cells Design Postmortem\" — how to build a complete game loop.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=ti4uZl-VWBc",
            "label": "▶ Dead Cells Design GDC",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write 1 page of notes — 3 specific things to apply to your main project.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 21,
    "title": "Main project — levels + content",
    "dates": "Aug 25 – Aug 31",
    "type": "build",
    "focus": "Build out the world. Teach mechanics progressively through level design.",
    "days": [
      {
        "l": "Level 1 build",
        "t": "practice"
      },
      {
        "l": "Level 2 build",
        "t": "practice"
      },
      {
        "l": "Level 3 build",
        "t": "practice"
      },
      {
        "l": "Playtest all",
        "t": "practice"
      },
      {
        "l": "Iterate feedback",
        "t": "practice"
      },
      {
        "l": "Write devlog",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Build 3 complete levels — each should teach or expand a mechanic. Progressive difficulty.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=4RlpMhBKNr0",
            "label": "▶ Celeste Level Design",
            "cls": "ryt"
          },
          {
            "url": "https://www.youtube.com/watch?v=ARJ8cAGm6JE",
            "label": "▶ GMTK Level Design",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Playtest with someone who has never seen your game. Watch silently. Do not explain anything.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Note every place they get confused, stuck, or bored. These are design failures, not player failures.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Iterate levels based on what you observed — not what you assumed.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Devlog: \"What playtesting taught me about my own assumptions.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 22,
    "title": "Main project — polish + audio",
    "dates": "Sep 1 – Sep 7",
    "type": "build",
    "focus": "Polish is what separates amateur from professional. It shows you care.",
    "days": [
      {
        "l": "Sound effects",
        "t": "practice"
      },
      {
        "l": "Visual feedback",
        "t": "practice"
      },
      {
        "l": "Game feel polish",
        "t": "practice"
      },
      {
        "l": "Bug fix sprint",
        "t": "practice"
      },
      {
        "l": "Final playtest",
        "t": "practice"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Add sound effects for every player action — movement, jump, collect, hit, win, lose.",
        "tag": "practice",
        "res": [
          {
            "url": "https://freesound.org",
            "label": "FreeSound.org",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Add visual feedback — screen shake, particle effects, flash on hit, scale on collect.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=Fy0aCDmgnxg",
            "label": "▶ Juice It or Lose It",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Add background music from Incompetech (free royalty-free).",
        "tag": "practice",
        "res": [
          {
            "url": "https://incompetech.com/music/royalty-free/",
            "label": "Incompetech — Free Music",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Final bug sweep — play for 1 hour straight. Note everything broken.",
        "tag": "practice",
        "res": [
          {
            "url": "https://learn.unity.com",
            "label": "Unity Learn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Fix the top 5 most game-breaking bugs. Ship with small known issues rather than not shipping.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/@Brackeys",
            "label": "▶ Brackeys",
            "cls": "ryt"
          }
        ]
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 23,
    "title": "Main project — launch on itch.io",
    "dates": "Sep 8 – Sep 14",
    "type": "portfolio",
    "focus": "Ship it. Public. With a page that makes people want to play it.",
    "days": [
      {
        "l": "Write itch page",
        "t": "portfolio"
      },
      {
        "l": "Take screenshots",
        "t": "portfolio"
      },
      {
        "l": "Record trailer",
        "t": "portfolio"
      },
      {
        "l": "Launch day",
        "t": "portfolio"
      },
      {
        "l": "Share everywhere",
        "t": "portfolio"
      },
      {
        "l": "Read feedback",
        "t": "practice"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Write a compelling itch.io page — what is the game, who is it for, what makes it interesting?",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Take 5 high-quality screenshots — these are your first impression. Spend time on them.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Record a 30-second gameplay GIF or trailer using OBS (free screen recorder).",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://obsproject.com",
            "label": "OBS Studio (free)",
            "cls": "rfree"
          },
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Publish on itch.io. Share on LinkedIn, Reddit r/gamedev, Twitter/X.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://itch.io",
            "label": "itch.io",
            "cls": "rfree"
          },
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          },
          {
            "url": "https://www.reddit.com/r/gamedev",
            "label": "r/gamedev",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write detailed post mortem — your most important portfolio content after the game itself.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 24,
    "title": "Portfolio site build",
    "dates": "Sep 15 – Sep 21",
    "type": "portfolio",
    "focus": "Your front door to employers. Clear, clean, tells your story.",
    "days": [
      {
        "l": "Plan structure",
        "t": "portfolio"
      },
      {
        "l": "Build site day 1",
        "t": "practice"
      },
      {
        "l": "Build site day 2",
        "t": "practice"
      },
      {
        "l": "Add all projects",
        "t": "portfolio"
      },
      {
        "l": "Write case studies",
        "t": "portfolio"
      },
      {
        "l": "Get feedback",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Build portfolio site with Notion, Cargo, or simple HTML — clean, fast, professional.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion (free)",
            "cls": "rfree"
          },
          {
            "url": "https://cargo.site",
            "label": "Cargo.site",
            "cls": "rpaid"
          }
        ]
      },
      {
        "text": "Add every project: jam games, main project, Twine. Each gets: what it is, role, design decisions, play link.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write case studies — not just \"I made this\" but \"I designed this system because... and here is what I learned.\"",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.gamedeveloper.com",
            "label": "GDC Articles",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Add your GDD, system design doc, level design doc as downloadable PDFs.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://gamedesignskills.com",
            "label": "Game Design Skills",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Get feedback from 2 people — ask: does it clearly say I am a game designer?",
        "tag": "portfolio",
        "res": []
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 25,
    "title": "Game Jam #4 + CV preparation",
    "dates": "Sep 22 – Sep 28",
    "type": "build",
    "focus": "Fourth jam and start preparing your actual application materials.",
    "days": [
      {
        "l": "Jam days 1–2",
        "t": "practice"
      },
      {
        "l": "Jam days 3–4",
        "t": "practice"
      },
      {
        "l": "Submit jam",
        "t": "practice"
      },
      {
        "l": "CV first draft",
        "t": "portfolio"
      },
      {
        "l": "Cover letter",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Enter your fourth game jam. This time focus on showcasing systems design.",
        "tag": "practice",
        "res": [
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          },
          {
            "url": "https://gmtk.itch.io/",
            "label": "GMTK Jam",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write your CV — 1 page. Skills first. Portfolio link and itch.io prominent at the top.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write a cover letter template — tell the story of why you want to make games. Personal. Specific.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.gamedeveloper.com",
            "label": "GDC Articles",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Have someone give brutal feedback on your CV. Fix everything they flag.",
        "tag": "portfolio",
        "res": []
      }
    ]
  },
  {
    "phase": "portfolio",
    "num": 26,
    "title": "Break week + final portfolio audit",
    "dates": "Sep 29 – Oct 5",
    "type": "break",
    "focus": "Last real break before application season. Use it fully.",
    "days": [
      {
        "l": "Portfolio audit",
        "t": "portfolio"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Play games",
        "t": "rest"
      },
      {
        "l": "Plan Oct–Nov",
        "t": "theory"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Final portfolio audit — you should have: 4 jam games, 1 main project, 2 design docs, 10+ blog posts.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Ask a working game designer to review your portfolio — reach out on LinkedIn or Discord.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          },
          {
            "url": "https://igda.org",
            "label": "IGDA",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Make a list of 30 studios you want to apply to in October and November.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Rest. You have built a serious body of work in 6 months.",
        "tag": "rest",
        "res": []
      }
    ]
  },
  {
    "phase": "apply",
    "num": 27,
    "title": "Research studios + first applications",
    "dates": "Oct 6 – Oct 12",
    "type": "apply",
    "focus": "Quality over quantity. Know the studio before you apply to them.",
    "days": [
      {
        "l": "Research 10 studios",
        "t": "practice"
      },
      {
        "l": "Research 10 more",
        "t": "practice"
      },
      {
        "l": "Tailor CV",
        "t": "portfolio"
      },
      {
        "l": "Write cover letters",
        "t": "portfolio"
      },
      {
        "l": "First 5 applications",
        "t": "portfolio"
      },
      {
        "l": "Light rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Research 20 studios — what games they make, what they value in designers, current openings.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          },
          {
            "url": "https://www.gamedeveloper.com",
            "label": "GDC Articles",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "For each application, customise your cover letter to that specific studio. Generic letters get ignored.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Apply to your first 5 roles this week — quality applications only.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Track every application in a Notion spreadsheet: studio, role, date, status, follow-up date.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Target: Indian studios, international remote roles, internships, junior positions.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "apply",
    "num": 28,
    "title": "Apply + keep building simultaneously",
    "dates": "Oct 13 – Oct 19",
    "type": "apply",
    "focus": "Never stop making things while applying. Keep your momentum.",
    "days": [
      {
        "l": "5 more applications",
        "t": "portfolio"
      },
      {
        "l": "Jam #5 prep",
        "t": "practice"
      },
      {
        "l": "Jam build day 1",
        "t": "practice"
      },
      {
        "l": "Jam submit",
        "t": "practice"
      },
      {
        "l": "Follow-up emails",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Apply to 5 more roles — junior, contract, and internship mix.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Enter your fifth game jam. Your speed and quality should be noticeably improved.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gmtk.itch.io/",
            "label": "GMTK Jam",
            "cls": "rfree"
          },
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Send polite follow-up emails to week 27 applications if no reply in 7 days.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Update LinkedIn with your most recent jam game and post about it.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "apply",
    "num": 29,
    "title": "Interview preparation",
    "dates": "Oct 20 – Oct 26",
    "type": "apply",
    "focus": "Be ready when the call comes. Practice out loud — not just in your head.",
    "days": [
      {
        "l": "Research questions",
        "t": "theory"
      },
      {
        "l": "Practice answers aloud",
        "t": "practice"
      },
      {
        "l": "Design test practice",
        "t": "practice"
      },
      {
        "l": "5 more applications",
        "t": "portfolio"
      },
      {
        "l": "Mock interview",
        "t": "practice"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Research 20 common game design interview questions. Write answers for all of them.",
        "tag": "theory",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=4hVZEBhkxo8",
            "label": "▶ Game Design Interview Prep",
            "cls": "ryt"
          },
          {
            "url": "https://www.gamedeveloper.com",
            "label": "GDC Articles",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Practice \"What makes a good game?\" out loud. Say it aloud 5 times — not in your head.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Art-Game-Design-Book-Lenses/dp/1138632058",
            "label": "📖 Art of Game Design",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Practice a design test: given a mechanic, redesign it in 30 minutes on paper. Time yourself.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.amazon.in/Challenges-Game-Designers-Brenda-Brathwaite/dp/158450580X",
            "label": "📖 Challenges for Designers",
            "cls": "rbook"
          }
        ]
      },
      {
        "text": "Practice \"Walk me through your portfolio\" — your story should take exactly 5 minutes.",
        "tag": "practice",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Apply to 5 more roles.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "apply",
    "num": 30,
    "title": "Apply + portfolio improvements",
    "dates": "Oct 27 – Nov 2",
    "type": "apply",
    "focus": "Keep applying. Improve based on real feedback you are receiving.",
    "days": [
      {
        "l": "5 more applications",
        "t": "portfolio"
      },
      {
        "l": "Portfolio updates",
        "t": "portfolio"
      },
      {
        "l": "Game improvement",
        "t": "practice"
      },
      {
        "l": "Journey blog post",
        "t": "portfolio"
      },
      {
        "l": "LinkedIn engagement",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Apply to 5 more roles — now include international remote studios.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Implement the most important portfolio improvements from any feedback received.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Write a blog post: \"8 months of learning game design — what I know now.\" This post will get shared.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          },
          {
            "url": "https://medium.com",
            "label": "Medium",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Engage genuinely on LinkedIn — comment on 10 posts by game designers you follow.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "apply",
    "num": 31,
    "title": "Final application push",
    "dates": "Nov 3 – Nov 9",
    "type": "apply",
    "focus": "Last major week. Reach out directly to studios you love.",
    "days": [
      {
        "l": "5 applications",
        "t": "portfolio"
      },
      {
        "l": "Direct outreach",
        "t": "portfolio"
      },
      {
        "l": "Game Jam #6",
        "t": "practice"
      },
      {
        "l": "Jam build",
        "t": "practice"
      },
      {
        "l": "Jam submit + post",
        "t": "portfolio"
      },
      {
        "l": "Rest",
        "t": "rest"
      },
      {
        "l": "Rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Apply to 5 more roles. You should be at 30+ total applications by now.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Reach out directly to 3 designers at studios you admire — genuine conversation, not job begging.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          },
          {
            "url": "https://igda.org",
            "label": "IGDA",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Enter one final game jam. Compare this game to your very first jam game.",
        "tag": "practice",
        "res": [
          {
            "url": "https://gmtk.itch.io/",
            "label": "GMTK Jam",
            "cls": "rfree"
          },
          {
            "url": "https://itch.io/jams",
            "label": "itch.io Jams",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Post mortem comparing jam 6 to jam 1 — show your growth visibly. This is powerful evidence.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.notion.so",
            "label": "Notion",
            "cls": "rfree"
          }
        ]
      }
    ]
  },
  {
    "phase": "apply",
    "num": 32,
    "title": "December ready — final everything",
    "dates": "Nov 10 – Nov 16",
    "type": "apply",
    "focus": "You are ready. Polish everything. Apply with full confidence.",
    "days": [
      {
        "l": "Portfolio final audit",
        "t": "portfolio"
      },
      {
        "l": "CV final version",
        "t": "portfolio"
      },
      {
        "l": "Final applications",
        "t": "portfolio"
      },
      {
        "l": "Follow up all",
        "t": "portfolio"
      },
      {
        "l": "Celebrate your work",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      },
      {
        "l": "Full rest",
        "t": "rest"
      }
    ],
    "tasks": [
      {
        "text": "Final portfolio audit — every link works, every game is playable, every doc is downloadable.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.youtube.com/watch?v=GJ4ddGl-3EU",
            "label": "▶ GDC Portfolio Talk",
            "cls": "ryt"
          }
        ]
      },
      {
        "text": "Final CV version — every word earns its place. Portfolio link is the first thing they see.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Send final batch of applications. You now have a real body of work behind every claim.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Follow up on all open applications from October and November.",
        "tag": "portfolio",
        "res": [
          {
            "url": "https://www.linkedin.com",
            "label": "LinkedIn",
            "cls": "rfree"
          }
        ]
      },
      {
        "text": "Write a personal note to yourself about what you accomplished in 8 months. You earned this.",
        "tag": "rest",
        "res": []
      }
    ]
  }
];
