function viewModel() {
	this.firstName = "Jeet";
	this.lastName = "Gajjar";
	this.fullName = this.firstName + " " + this.lastName;

	this.phone = "";
	this.email = "gajjar.jeet@gmail.com";
	this.website = "";

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
                    "Tools: GraphQL, Kotlin, OpenShift, GCP, MongoDB, Kafka, SQL, Redis, Dynatrace"
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
					"",
					"Ippon Technologies (Software Engineer)",
					"Aug 2018 - July 2021"
				],
				bullets: [
					"Built and scaled backend systems using Spring Boot across multiple enterprise clients",
					"Developed automation tools and data workflows supporting fraud detection and internal platforms",
					"Worked with cloud (AWS), distributed systems, and data storage technologies",
					"Tools: Java, Spring Boot, AWS, Postgres"
				]
			},
			{
				header: [
					"",
					"Major League Hacking (Hackathon Evangelist)",
					"Aug 2017 - June 2022"
				],
				bullets: [
					"Delivered technical presentations and workshops to audiences of 500+",
					"Mentored developers and helped debug problems across multiple languages and platforms"
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
			// {
			// 	header: [
			// 		"",
			// 		"BMW Manufacturing (Software Developer Co-op)",
			// 		"Jan 2017 - Dec 2017"
			// 	],
			// 	bullets: [
			// 		...
			// 	]
			// },
			// {
			// 	header: [
			// 		"",
			// 		"authentic. (Software Engineering Intern)",
			// 		"May 2016 - Aug 2016"
			// 	],
			// 	bullets: [
			// 		...
			// 	]
			// },
			// {
			// 	header: [
			// 		"",
			// 		"VCU Biological Network Lab (Research Asst.)",
			// 		"Sep 2015 - Dec 2016"
			// 	],
			// 	bullets: [
			// 		...
			// 	]
			// }
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
				}

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
					"Oct 2018 - June 2021"
				],
				bullets: [
					"Organized and host technical talks for engineering community",
					"Coordinated speakers and drive knowledge sharing"
				]
			}
			]
		}
	]
};