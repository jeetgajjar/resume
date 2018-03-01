function viewModel() {
    this.firstName = "Jeet";
    this.lastName = "Gajjar";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "gajjarjm@vcu.edu";
    this.github = "github.com/kakorrhaphio";
    this.website = "";

    this.sections = [{
            header: ["Employment"],
            subsections: [
              {
                  header: [
                    "",//first one is for location
                      "Major League Hacking (Hackathon Evangelist)",
                      "Aug 2017 - Present"
                  ],
                  bullets: [
                      "Regularly attend student computer programming competitions as official representative of national organizing body, Major League Hacking (MLH)",
                          "Act as primary primary point of contact for university, student & faculty volunteers, and event attendees while on-site",
                          "Regular public speaking experience in front of 500+ people", [
                           "Presentations involve communicating technical topics to audience of varying skill levels"
                         ]
                          "Teach developers how to solve a wide variety of programming challenges and actively help them debug problems across a variety of languages & platforms"
                  ]
              },
                {
                    header: [
                      "",
                        "BMW Manufacturing (Software Developer Co-op)",
                        "Jan 2017 - Dec 2017"
                    ],
                    bullets: [
                        "Created an automated documentation tool using JIRA and Confluence", [
                            "Created and architected entire project including front-end and database design",
                            "Used by BMW IT Associates across North America to streamline the documentation process",
                        ],
                        "JIRA & Confluence", [
                          "Administrated and trained associates across North America"
                          // "Trained Associates on best practices in person and virtually",
                        ]
                    ]
                },
                // {
                //     header: [
                //         "Richmond, VA",
                //         "Timmons Group (Intern)",
                //         "Oct 2016 - Dec 2016"
                //     ],
                //     bullets: [
                //         "Wrote Python and with ESRI to determine "
                //     ]
                // },
                {
                    header: [
                      "",
                        "authentic. (Software Engineering Intern)",
                        "May 2016 - Aug 2016"
                    ],
                    bullets: [
                        "Integrated Hippo CMS to newly designed internal site",
                        "Integrated Harvest Time Logging with JIRA",
                        "Used Greenscreen, a digital signage software, to demultiplex multiple Chromecast device channels"
                        // "Documented client functional requirements as Business Analyst",
                        // "Shadowed client calls as Business Analyst"
                    ]
                },
                // {
                //     header: [
                //         "Richmond, VA",
                //         "VCU CS Department",
                //         "May 2016 - June 2016"
                //     ],
                //     bullets: [
                //         "Completed an existing scheduling website using JavaScript"
                //     ]
                // },
                {
                    header: [
                      "",
                        "VCU Biological Network Lab (Research Asst.)",
                        "Sep 2015 - Dec 2016"
                    ],
                    bullets: [
                        "Worked with PhD Candidates in:", [
                          "Implementing the Traveling Salesman Problem with a large dataset",
                          "Designing and tested network robustness using Django Framework",
                          "Creating a front end and back end correlated disease database",
                          "Relating diseases to visualize the evolution of miRNA",
                          // "Peer Reviewed journal papers"
                        ]
                    ]
                }
            ]
        },
        {
            header: ["Education"],
            subsections: [{
                    header: [
                        "Virginia Commonwealth University (B.S Computer Science)",
                        "Aug 2014 - May 2018"
                    ]
                }
            ]
        },
        {
            header: ["Noteworthy Projects"],
            subsections: [
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/vcu-swim-lab/stack-intheflow"
                    },
                    header: [
                        "StackInTheFlow",
                        "Sep 2016 - May 2017"
                    ],
                    bullets: [
                        "An IntelliJ Plugin that uses NLP and StackOverflow to provide coding reccomendations",
                        "First place, Excellence in Design, VCU Senior Capstone Design Expo 2017",
                        // [
                        //   "Mutli-faceted search capabilities with productivity in mind" //TODO: Review commits and see how I contributed.
                        // ],
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/kakorrhaphio/SocialNetworksPenguins"
                    },
                    header: [
                        "Penguin",
                        "Sep 2016 - Dec 2016"
                    ],
                    bullets: [
                        "Analyzed top websites from Alexa Page Rank analysis", [
                          "Created a network of pixel-pixel interactions with large generated dataset"
                          // "Designed compression/decompression algorithm for data management",
                          // "Observed power-law from acrued data"
                        ]
                    ]
                },
                // {
                //     header: ["Personal Life Hacks"],
                //     bullets: [
                //     ]
                // },
                // {
                //     noPrint: true,
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/kakorrhaphio/khe16-Penguin-harassment"
                //     },
                //     header: [
                //         "Hack HarRESTment",
                //         "September 2014"
                //     ],
                //     bullets: [
                //         "Created a Chrome extension with text filtering options", [
                //
                //         ]
                //     ]
                // },
                // {
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/kakorrhaphio/OperatingSystem"
                //     },
                //     header: [
                //         "Operating System Simulator",
                //         "Fall 2016"
                //     ],
                //     bullets: [
                //         "Operating System Simulator built in Java", [
                //             "Implements an IOScheduler",
                //             "Simulates virtual memory/swapping",
                //             "Implements priority queue"
                //
                //         ]
                //     ]
                // },
            ]
        },
        {
            noPrint: true,
            header: ["Leadership"],
            subsections: [{
                    header: [
                        "RamHacks Organizer",
                        "Jan 2016 - Dec 2017"
                    ],
                    bullets: [
                        "Co-organized RamHacks 2 years with 500 total attendees",
                        "Lead Vendor Manager for all meals and snacks"
                        // "Vendor Management",
                        // "Sought out and trained talented underclassmen to maintain RamHacks",
                        // "Assisted in participants' technical questions",
                    ]
                },
                {
                    header: [
                        "Cyber Security Club at VCU (Co-Founder)",
                        "Aug 2015 - Dec 2016"
                    ],
                    bullets: [
                        "Organized weekly tech-talks by companies and students",
                        // "Created partnership with General Electric's Cyber Security Department ", [
                        //     "Exposed Red/Blue team to students"
                        //   ],
                        "Aided in the development of the Cyber Security Lab sandbox environment"
                    ]
                },
            ]
        },
        {
            header: ["Skills"],
            // bullets: [
            //   "Languages:",
            //   list: ["Java", "Python", "JavaScript" ]
            //   "Other:"
            //   list: ["Maven", "Atlassian/API", "Git", "BeautifulSoup", "Selenium", "Gephi"]
            // ],
            subsections: [
                {
                    header: [
                        "Languages"
                    ],
                    bullets: [
                        "Java, Python, JavaScript"
                    ]
                },
                {
                  header: [
                    "Software"
                  ],
                  bullets: [
                    "Atlassian/API, Git, ESRI, ArcPy, BeautifulSoup, Selenium, Chromedriver, REST, Hippo CMS, Django, LaTeX, Gephi"
                  ]
                }
              ]


        }
    ]
};
