// Static data
// TODO: Create API for resume data.
const resume = [
  {
    company: 'J.P.Morgan Chase & Co',
    title: 'Software Engineer',
    dates: 'July 2017 - Present',
    location: 'Brooklyn, NY',
    bullets: [
      'Maintain and expand in-house software which provides data(json, REST) with minimal delay(gemfire, ODB).',
      'Monitor continuous integration for projects deployed on multiple servers(bash, redhat).',
      'Provide mentorship to interns and new analysts as part of technology analyst program(TAP).',
      'Develop software solutions in small teams as part of company hackathons and social good programs.',
    ],
  },
  {
    company: 'York College - CUNY',
    title: 'Blackbaord Developer',
    dates: 'July 2015 - Februrary 2016',
    location: 'Jamaica, NY',
    bullets: [
      'Architechtured and designed chemistry labs embedded into blackboard website using Java, JSP, PHP, HTML/CSS.',
      'Assisted in installation of Oracle SQL database on Linux OS',
      'Developed backend services on Oracel SQL databases.',
      'Designed UI with automatic grading and saving/submission features.'
    ]
  }
];

const tools = [
  'C/C++', 'Bash', 'Batch', 'SQL', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'JSON', 'gemfire', 'ODB', 'splunk',
  'Linux(Redhat, arch, debian)', 'Windows', 'IntelliJ', 'Eclipse', 'gdb/make', 'Git'
];

export { resume, tools };
