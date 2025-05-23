export const en = {
  test_page: {
    title: 'Tests',
    session: {
      title: 'Title',
      startDate: 'Start Date',
      endDate: 'End Date',
      status: 'Status',
      activeSession: 'Active session',
      actions: 'Actions',
      active: 'Active',
      inactive: 'Inactive',
    },
  },
  collection_page: {
    title: 'Collections',
    collection: {
      title: 'Title',
      questions: 'Questions',
      actions: 'Actions',
    },
  },
  create_page: {
    title: 'Create test',
    form: {
      title: 'Title',
      openDate: 'Start Date',
      deadline: 'End Date',
      minutesToComplete: 'Time to complete',
      buttons: {
        submit: 'Create',
        addQuestion: 'Add question',
        generateWithAI: 'Generate questions with AI',
        addCollection: 'Add collection',
      },
    },
    questionForm: {
      saveToCollection: 'Save to collection',
      option: {
        none: 'None',
        multipleChoices: 'Multiple choices',
        singleChoice: 'Single choice',
        matching: 'Matching',
        essay: 'Essay',
      },
      buttons: {
        saveToCollection: 'Save to collection',
        addAnswer: 'Add answer',
        remove: 'Remove',
        addImage: 'Add image',
      },
      textQuestion: 'Text question',
      textAnswer: 'Text answer',
      points: 'Points',
      essayNotice:
        'This question assumes an essay answer. The answer will be entered during the test. ✍🏻',
    },
    generateForm: {
      theme: 'Theme',
      points: 'Points',
      type: 'Type',
      questionCount: 'Questions count',
      button: 'Generate',
    },
    collectionForm: {
      name: 'Collection name',
    },
  },
  collection_creation_page: {
    title: 'Create collection',
    form: {
      title: 'Name',
      description: 'Description',
      buttons: {
        submit: 'Create',
      },
    },
  },
  login_page: {
    email: 'Email',
    password: 'Password',
    btnSubmit: 'Login',
    registerLink: 'Do not have an account?',
  },
  register_page: {
    firstName: 'First name',
    lastName: 'Last name',
    password: 'Password',
    passwordConfirmation: 'Repeat password',
    btnSubmit: 'Register',
    loginLink: 'Do you already have an account?',
    errorMessage: 'Passwords do not match',
  },
  testInfo_page: {
    openDate: 'Open Date',
    deadline: 'Deadline',
    timeLimit: 'Time Limit (minutes)',
    maxScore: 'Max Score',
    questionsCount: 'Questions Count',
    startedSessions: 'Started Sessions',
    finishedSessions: 'Finished Sessions',
    export: 'Export',
    buttons: {
      copyLink: 'Copy link',
      copied: 'Copied',
      showQuestions: 'Show questions',
      hideQuestions: 'Hide questions',
    },
    table: {
      group: 'Group',
      fullName: 'Full Name',
      score: 'Score',
      completionTime: 'Completion Time',
      details: 'Details',
    },
  },
  testPreview_page: {
    duration: 'Duration',
    question: 'Questions',
    points: 'Max. points',
    group: 'Group',
    fullName: 'Full Name',
    button: 'Start test',
    day: 'd',
    hour: 'h',
    minute: 'm',
    error: {
      group: "Field 'Group' cannot be empty",
      name: "Field 'Full Name' cannot be empty",
    },
  },
  question_page: {
    chooseOption: 'Choose an option',
    chooseOptions: 'Choose options',
    matchPairs: 'Match pairs',
    essay: 'Essay',
    essayPlaceholder: 'Enter your answer here...',
    buttons: {
      next: 'Next',
      finish: 'Finish',
    },
  },
  testReview_page: {
    title: 'Test review',
    student: 'Student',
    started: 'Started',
    finished: 'Finished',
    duration: 'Duration',
    download: 'Download answers',
    finishedText: 'Test has been completed',
    checkAnswers: 'Check answers',
  },
  notFound: {
    test: 'Oh, no test?',
    collection: 'Oh, no collection?',
    createTest: 'Quickly create your own test',
    createCollection: 'Quickly create your own collection',
  },
  dropdownMenu: {
    title: 'Actions',
    info: 'Info',
    clone: 'Clone',
    remove: 'Delete',
    confirm: 'Are you sure you want to delete this item?',
    create: 'Create',
    import: 'Import',
    export: 'Export',
    dataTitle: {
      menu: 'Dropdown menu',
      createTest: 'Create new test',
      createCollection: 'Create new collection',
      deleteAll: 'Remove selected items',
      infoTest: 'Information about the test',
      cloneTest: 'Clone the test',
      removeTest: 'Delete the test',
      infoCollection: 'Information about the collection',
      cloneCollection: 'Clone the collection',
      removeCollection: 'Delete the collection',
    },
  },
  sidebar: {
    tests: 'Tests',
    collections: 'Collections',
    logout: 'Logout',
  },
  search: {
    test: 'search test...',
    collection: 'search collection...',
  },
};
