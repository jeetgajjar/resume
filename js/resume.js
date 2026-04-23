function viewModel() {
	this.firstName = "Jeet";
	this.lastName = "Gajjar";
	this.fullName = this.firstName + " " + this.lastName;

	this.phone = "";
	this.email = "gajjar.jeet@gmail.com";
	this.website = "";
	this.github = "";

	this.sections = [{
		header: ["Employment"],
		subsections: [
		    {
                header: [
                    "",//first one is for location
                    "Kohls (Sr. Software Engineer)",
                    "Oct 2022 - Present"
                ],
                bullets: [
                    "Mercury Platform, Common Services",
                    [
                    "Own a highly available platform processing 50M+ requests/day enabling real-time and batch data consumers",
                    "Architected and optimized data supplier services powering downstream data and analytics workflows",
                    "Designed event-driven architecture using Kafka enabling scalable real-time data ingestion and streaming pipelines",
                    "Standardized data platform patterns for high-throughput, low-latency data access across domains",
                    "Built reusable libraries and frameworks to streamline service development across teams",
                    "Led adoption of gRPC, GitLab CI/CD, and containerized deployments on OpenShift/GCP",
                    "Tools: Kafka, GraphQL, Kotlin, OpenShift, GCP, MongoDB, SQL, Redis, Dynatrace"
                    ],
                    "Merchandise Ordering, Tech Lead",
                    [
                    "Led development of inventory and ordering microservices across modern and legacy systems",
                    "Improved system scalability and reliability for business-critical ordering workflows",
                    "Tools: Node.js, SQL"
                    ]
                ]
            },
			{
				header: [
					"",//first one is for location
					"Drift (Software Engineer)",
					"July 2021 - July 2022"
				],
				bullets: [
					"Built and maintained scalable Java microservices supporting enterprise customers",
					"Improved API performance and reduced latency through system migrations",
					"Tools: Java, React"
				]
			},
			{
				header: [
					"",//first one is for location
					"Ippon Technologies (Software Engineer)",
					"Aug 2018 - July 2021"
				],
				bullets: [
					"Built and scaled backend systems using Spring Boot across multiple enterprise clients",
					"Developed automation tools and data workflows supporting fraud detection and internal platforms",
					"Worked with cloud (AWS), distributed systems, and data storage technologies (Postgres, MongoDB)",
					"Tools: Java, Spring Boot, AWS, Postgres, MongoDB"
				]
			},
			{
				header: [
					"",//first one is for location
					"Major League Hacking (Hackathon Evangelist)",
					"Aug 2017 - June 2022"
				],
				bullets: [
					"Delivered technical presentations and workshops to audiences of 500+",
					"Mentored developers and helped debug problems across multiple languages and platforms"
					],
					"Teach developers how to solve a wide variety of programming challenges and actively help them debug problems across a variety of languages & platforms"
				]
			},
			//{
			//	header: [
			//		"",
			//		"BMW Manufacturing (Software Developer Co-op)",
			//		"Jan 2017 - Dec 2017"
			//	],
			//	bullets: [
			//		"Created an automated documentation tool using JIRA and Confluence", [
			//			"Created and architected entire project including front-end and database design",
			//			"Used by BMW IT Associates across North America to streamline the documentation process",
			//		],
			//		"JIRA & Confluence", [
			//			"Administrated and trained associates across North America"
						// "Trained Associates on best practices in person and virtually",
			//		]
			//	]
			//},
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
			//{
			//	header: [
//					"",
//					"authentic. (Software Engineering Intern)",
//					"May 2016 - Aug 2016"
//				],
//				bullets: [
//					"Integrated Hippo CMS to newly designed internal site",
//					"Integrated Harvest Time Logging with JIRA",
//					"Used Greenscreen, a digital signage software, to demultiplex multiple Chromecast device channels"
//					// "Documented client functional requirements as Business Analyst",
//					// "Shadowed client calls as Business Analyst"
//				]
//			},
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
//			{
//				header: [
//					"",
//					"VCU Biological Network Lab (Research Asst.)",
//					"Sep 2015 - Dec 2016"
//				],
//				bullets: [
//					"Worked with PhD Candidates in:", [
//						"Implementing the Traveling Salesman Problem with a large dataset",
//						"Designing and tested network robustness using Django Framework",
//						"Creating a front end and back end correlated disease database",
//						"Relating diseases to visualize the evolution of miRNA",
//						// "Peer Reviewed journal papers"
//					]
//				]
//			}
		]
	},
		{
			header: ["Education"],
			subsections: [{
				header: [
					"",
					"Virginia Commonwealth University",
					"Aug 2014 - May 2018"
				],
				bullets: [
					"B.S Computer Science",
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
						"",
						"Sep 2016 - May 2017"
					],
					bullets: [
						"Built IntelliJ plugin leveraging NLP + StackOverflow data to generate coding recommendations",
						"First place, Excellence in Design, VCU Capstone Expo"
					]
				},
//				{
//					decorators: {
//						icon: "github",
//						url: "https://github.com/jeetgajjar/SocialNetworksPenguins"
//					},
//					header: [
//						"Penguin",
//						"",
//						"Sep 2016 - Dec 2016"
//					],
//					bullets: [
//						"Analyzed top websites from Alexa Page Rank analysis", [
//							"Created a network of pixel-pixel interactions with large generated dataset"
//							// "Designed compression/decompression algorithm for data management",
//							// "Observed power-law from acrued data"
//						]
//					]
//				},
				// {
				//     header: ["Personal Life Hacks"],
				//     bullets: [
				//     ]
				// },
				// {
				//     noPrint: true,
				//     decorators: {
				//         icon: "github",
				//         url: "https://github.com/jeetgajjar/khe16-Penguin-harassment"
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
				//         url: "https://github.com/jeetgajjar/OperatingSystem"
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
			header: ["Skills"],
			subsections: [
				{
					header: [
						"Languages"
					],
					bullets: [
						"Java, Python, SQL, JavaScript"
					]
				},
				{
					header: [
						"Data & Cloud"
					],
					bullets: [
						"Kafka, GCP, AWS, OpenShift/Kubernetes, MongoDB, Postgres, Redis"
					]
				},
				{
					header: [
						"Infrastructure & Tools"
					],
					bullets: [
						"gRPC, GitLab CI/CD, Docker, REST, GraphQL, Dynatrace"
					]
				}
			]
		},
		{
			header: ["Leadership"],
			subsections: [{
				header: [
					"Director, Richmond Java User Group",
					"",
					"Oct 2018 - June 2022"
				],
				bullets: [
					"Organize and host technical talks for engineering community",
					"Coordinate speakers and drive knowledge sharing"
				]
			},
				// {
				// 	header: [
				// 		"RamHacks Organizer",
				// 		"",
				// 		"Jan 2016 - Dec 2017"
				// 	],
				// 	bullets: [
				// 		"Co-organized RamHacks 2 years with 500 total attendees",
				// 		"Lead Vendor Manager for all meals and snacks"
				// 		// "Vendor Management",
				// 		// "Sought out and trained talented underclassmen to maintain RamHacks",
				// 		// "Assisted in participants' technical questions",
				// 	]
				// },
				// {
				// 	header: [
				// 		"Cyber Security Club, VCU (Co-Founder)",
				// 		// "(Co-Founder)",
				// 		"",
				// 		"Aug 2015 - Dec 2016"
				// 	],
				// 	bullets: [
				// 		"Organized weekly tech-talks by companies and students",
				// 		// "Created partnership with General Electric's Cyber Security Department ", [
				// 		//     "Exposed Red/Blue team to students"
				// 		//   ],
				// 		"Aided in the development of the Cyber Security Lab sandbox environment"
				// 	]
				// },
			]
		}
	]
};
