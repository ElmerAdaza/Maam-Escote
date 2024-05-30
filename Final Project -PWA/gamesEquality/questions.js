const questions = [
  {
    question: "What is the Magna Carta of Women?",
    answers: [
      {
        text: "A law that ensures the protection and promotion of women's rights in the Philippines.",
        correct: true,
      },
      { text: "A declaration of independence.", correct: false },
      { text: "A global initiative for women's rights.", correct: false },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    question:
      "Which government body is responsible for gender equality in the Philippines?",
    answers: [
      { text: "Department of Health", correct: false },
      { text: "Philippine Commission on Women", correct: true },
      { text: "Department of Education", correct: false },
      { text: "Department of Social Welfare and Development", correct: false },
    ],
  },
  {
    question: "What is the purpose of the Gender and Development (GAD) Budget?",
    answers: [
      { text: "To fund infrastructure projects.", correct: false },
      {
        text: "To allocate resources for programs promoting gender equality.",
        correct: true,
      },
      { text: "To provide scholarships.", correct: false },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    question: "Who was the first female president of the Philippines?",
    answers: [
      { text: "Cory Aquino", correct: true },
      { text: "Gloria Macapagal-Arroyo", correct: false },
      { text: "Imelda Marcos", correct: false },
      { text: "Leni Robredo", correct: false },
    ],
  },
  {
    question: "What does RA 9262 address?",
    answers: [
      { text: "Violence Against Women and Their Children", correct: true },
      { text: "Educational Reforms", correct: false },
      { text: "Health and Sanitation", correct: false },
      { text: "Environmental Protection", correct: false },
    ],
  },
  {
    question: "What is the Safe Spaces Act (RA 11313)?",
    answers: [
      {
        text: "A law to protect individuals from gender-based sexual harassment.",
        correct: true,
      },
      { text: "A law for urban development.", correct: false },
      { text: "A law promoting tourism.", correct: false },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    question:
      "Which organization advocates for women's rights in the Philippines?",
    answers: [
      { text: "Gabriela", correct: true },
      { text: "Greenpeace", correct: false },
      { text: "Red Cross", correct: false },
      { text: "WWF", correct: false },
    ],
  },
  {
    question:
      "What is the significance of International Women's Day in the Philippines?",
    answers: [
      { text: "It is a national holiday.", correct: false },
      {
        text: "It celebrates the social, economic, cultural, and political achievements of women.",
        correct: true,
      },
      { text: "It marks the end of World War II.", correct: false },
      { text: "It is a day for environmental awareness.", correct: false },
    ],
  },
  {
    question: "What is the gender pay gap in the Philippines?",
    answers: [
      {
        text: "The difference in average earnings between men and women.",
        correct: true,
      },
      {
        text: "The difference in average earnings between different age groups.",
        correct: false,
      },
      {
        text: "The difference in average earnings between different races.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    question:
      "Who was the first female Chief Justice of the Supreme Court of the Philippines?",
    answers: [
      { text: "Maria Lourdes Sereno", correct: true },
      { text: "Teresa Aquino-Oreta", correct: false },
      { text: "Leila de Lima", correct: false },
      { text: "Gloria Macapagal-Arroyo", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the Women’s Empowerment, Development, and Gender Equality (WEDGE) Plan?",
    answers: [
      {
        text: "To promote women's empowerment and gender equality.",
        correct: true,
      },
      { text: "To build infrastructure projects.", correct: false },
      { text: "To promote sports activities.", correct: false },
      { text: "To provide health insurance.", correct: false },
    ],
  },
  {
    question:
      "What percentage of seats in the House of Representatives in the Philippines is occupied by women as of 2021?",
    answers: [
      { text: "28%", correct: true },
      { text: "50%", correct: false },
      { text: "10%", correct: false },
      { text: "40%", correct: false },
    ],
  },
  {
    question:
      "Which sector has the highest number of women workers in the Philippines?",
    answers: [
      { text: "Education", correct: true },
      { text: "Agriculture", correct: false },
      { text: "Construction", correct: false },
      { text: "Information Technology", correct: false },
    ],
  },
  {
    question: "What is gender mainstreaming?",
    answers: [
      {
        text: "A strategy to integrate gender perspectives into all policies and programs.",
        correct: true,
      },
      { text: "A fashion trend.", correct: false },
      { text: "A marketing strategy.", correct: false },
      { text: "A type of social media campaign.", correct: false },
    ],
  },
  {
    question:
      "Which international treaty did the Philippines ratify to promote women's rights?",
    answers: [
      {
        text: "Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)",
        correct: true,
      },
      { text: "Kyoto Protocol", correct: false },
      { text: "Paris Agreement", correct: false },
      { text: "Geneva Convention", correct: false },
    ],
  },
  {
    question:
      "What is the role of Gender and Development (GAD) Focal Points in government agencies?",
    answers: [
      {
        text: "To ensure the integration of gender perspectives in policies and programs.",
        correct: true,
      },
      { text: "To handle financial audits.", correct: false },
      { text: "To manage IT systems.", correct: false },
      { text: "To oversee environmental projects.", correct: false },
    ],
  },
  {
    question:
      "Which law mandates the creation of women's desks in all police stations in the Philippines?",
    answers: [
      { text: "RA 9710", correct: false },
      { text: "RA 9262", correct: false },
      { text: "RA 8551", correct: true },
      { text: "RA 10121", correct: false },
    ],
  },
  {
    question: "Who is the first female Vice President of the Philippines?",
    answers: [
      { text: "Gloria Macapagal-Arroyo", correct: false },
      { text: "Leni Robredo", correct: true },
      { text: "Sara Duterte", correct: false },
      { text: "Cory Aquino", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the Anti-Sexual Harassment Act (RA 7877)?",
    answers: [
      {
        text: "To address sexual harassment in the workplace and educational institutions.",
        correct: true,
      },
      { text: "To protect against cybercrimes.", correct: false },
      { text: "To promote environmental protection.", correct: false },
      { text: "To regulate the telecom industry.", correct: false },
    ],
  },
  {
    question:
      "What is the term used to describe unpaid domestic work typically done by women?",
    answers: [
      { text: "Invisible labor", correct: true },
      { text: "Blue-collar work", correct: false },
      { text: "Gig economy", correct: false },
      { text: "Remote work", correct: false },
    ],
  },
  {
    question:
      "Which sector is targeted by the Women’s Empowerment, Development, and Gender Equality (WEDGE) Plan in the Philippines?",
    answers: [
      { text: "Public sector", correct: true },
      { text: "Private sector", correct: false },
      { text: "Agricultural sector", correct: false },
      { text: "Tourism sector", correct: false },
    ],
  },
  {
    question:
      "Which prominent Philippine law addresses Anti-Violence Against Women and Their Children?",
    answers: [
      { text: "RA 9262", correct: true },
      { text: "RA 9165", correct: false },
      { text: "RA 10175", correct: false },
      { text: "RA 9710", correct: false },
    ],
  },
  {
    question:
      "What is the focus of the Philippine Plan for Gender-Responsive Development (PPGD)?",
    answers: [
      {
        text: "To promote gender equality and women's empowerment.",
        correct: true,
      },
      { text: "To enhance tourism.", correct: false },
      { text: "To boost the economy.", correct: false },
      { text: "To improve transportation infrastructure.", correct: false },
    ],
  },
  {
    question:
      "Who was the first female Chairperson of the Commission on Human Rights in the Philippines?",
    answers: [
      { text: "Leila de Lima", correct: true },
      { text: "Lorna Kapunan", correct: false },
      { text: "Gloria Macapagal-Arroyo", correct: false },
      { text: "Cory Aquino", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the Women's Month Celebration in the Philippines?",
    answers: [
      {
        text: "To highlight women's achievements and contributions to society.",
        correct: true,
      },
      { text: "To promote new fashion trends.", correct: false },
      { text: "To celebrate environmental initiatives.", correct: false },
      { text: "To organize sports events.", correct: false },
    ],
  },
  {
    question: "What does the term 'gender-sensitive' mean?",
    answers: [
      {
        text: "Being aware of and addressing gender differences and inequalities.",
        correct: true,
      },
      { text: "Promoting a single gender.", correct: false },
      { text: "Ignoring gender issues.", correct: false },
      { text: "Promoting stereotypes.", correct: false },
    ],
  },
  {
    question: "Who was the first female senator of the Philippines?",
    answers: [
      { text: "Geronima Pecson", correct: true },
      { text: "Loren Legarda", correct: false },
      { text: "Pia Cayetano", correct: false },
      { text: "Risa Hontiveros", correct: false },
    ],
  },
  {
    question: "What is the main goal of the Philippine Commission on Women?",
    answers: [
      {
        text: "To promote gender equality and women's empowerment.",
        correct: true,
      },
      { text: "To oversee financial regulations.", correct: false },
      { text: "To manage educational policies.", correct: false },
      { text: "To implement agricultural programs.", correct: false },
    ],
  },
  {
    question: "Which Philippine law focuses on reproductive health and rights?",
    answers: [
      { text: "RA 10354", correct: true },
      { text: "RA 9262", correct: false },
      { text: "RA 9710", correct: false },
      { text: "RA 7877", correct: false },
    ],
  },
  {
    question: "What is the 'GAD Code'?",
    answers: [
      {
        text: "A local ordinance that provides a comprehensive framework for gender and development in local government units.",
        correct: true,
      },
      { text: "A set of rules for sports events.", correct: false },
      { text: "A code for educational institutions.", correct: false },
      { text: "A set of guidelines for financial management.", correct: false },
    ],
  },
  {
    question: "What does the term 'gender-responsive' mean?",
    answers: [
      {
        text: "Creating policies and programs that consider the different needs and interests of all genders.",
        correct: true,
      },
      { text: "Promoting only women's issues.", correct: false },
      { text: "Ignoring gender differences.", correct: false },
      { text: "Focusing solely on economic growth.", correct: false },
    ],
  },
  {
    question:
      "Which law in the Philippines aims to provide additional benefits to solo parents, the majority of whom are women?",
    answers: [
      { text: "RA 8972", correct: true },
      { text: "RA 9262", correct: false },
      { text: "RA 9710", correct: false },
      { text: "RA 7877", correct: false },
    ],
  },
  {
    question:
      "Who was the first female Chief Justice of the Supreme Court in the Philippines?",
    answers: [
      { text: "Maria Lourdes Sereno", correct: true },
      { text: "Leila de Lima", correct: false },
      { text: "Leni Robredo", correct: false },
      { text: "Gloria Macapagal-Arroyo", correct: false },
    ],
  },
  {
    question:
      "What is the focus of the Anti-VAWC (Violence Against Women and Their Children) Act?",
    answers: [
      {
        text: "To protect women and children from violence and abuse.",
        correct: true,
      },
      { text: "To promote tourism.", correct: false },
      { text: "To develop infrastructure.", correct: false },
      { text: "To regulate telecommunications.", correct: false },
    ],
  },
  {
    question: "Which year did the Philippines pass the Magna Carta of Women?",
    answers: [
      { text: "2009", correct: true },
      { text: "2000", correct: false },
      { text: "1995", correct: false },
      { text: "2015", correct: false },
    ],
  },
  {
    question:
      "What does 'GAD' stand for in the context of gender equality in the Philippines?",
    answers: [
      { text: "Gender and Development", correct: true },
      { text: "Global and Domestic", correct: false },
      { text: "Government and Democracy", correct: false },
      { text: "Growth and Development", correct: false },
    ],
  },
];
