export const en = {
  // header
  header: {
    logoAlt: "Government of Canada",
    linkAlt: "Government of Canada site link",
    homeAlt: "RMP Home page link",
    link: "https://www.canada.ca/en.html",
    dashboard: "Dashboard",
    logout: "Log out",
    personIcon: "User Icon",
  },

  // footer
  footer: {
    date: "Date last modified:",
    site: "About this site",
    social: "Social media",
    linkSocial: "https://www.canada.ca/en/social.html",
    mobile: "Mobile applications",
    linkMobile: "https://www.canada.ca/en/mobile.html",
    about: "About Canada.ca",
    linkAbout: "https://www.canada.ca/en/government/about.html",
    terms: "Terms and conditions",
    linkTerms: "https://www.canada.ca/en/transparency/terms.html",
    privacy: "Privacy",
    linkPrivacy: "https://www.canada.ca/en/transparency/privacy.html",
    dts: "Digital Technology Solutions",
    linkDTS: "https://home.dts-stn.com/",
    symbol: "Symbol of the Government of Canada",
    top: "Top of page",
  },

  // app
  app: {
    dts: "Relationship Management Portal",
    welcome: "relationship management portal proof of concept!",
    search: "Search",
    add: "Add new",
    placeholderSearch: "Search...",
    requiredField: "Required Fields",
    results: "Results",
  },

  // error pages
  error: {
    fourofour: "Error 404",
    fourofourmessage: "Oops! We couldn't find that Web page.",
    fivehundred: "Error 500",
    fivehundredmessage: "Oops something went wrong. Please try again later.",
    buttontext: "Go to the homepage",
  },
  // contact
  contact: {
    // titles
    create: "Create new contact",
    contact: "Contact information",
    organization: "Organization Information",
    engagements: "Engagements",
    orgAddress: "Organization Address",
    // fields
    type: "Contact Type",
    keyContactName: "Full Name",
    keyContactTitle: "Title",
    keyContactEmail: "Email",
    orgEmail: "Email",
    address: "Address",
    address2: "Apt / suite / etc.",
    city: "City",
    prov: "Province / Territory",
    country: "Country",
    postal: "Postal Code",
    phone: "Phone",
    orgWebsite: "Website",
    department: "Department",
    branch: "Branch",
    directorate: "Directorate",
    provTerritory: "Province / Territory / Indigenous territory",
    orgName: "Name",
    orgSector: "Sector",
    contrib: "Contribution Agreement Reference",
    service: "Service Contract",
    standing: "On standing offer list?",
    // Options
    textType: "Please select a type",
    Federal: "Federal Governments and Agencies",
    External: "External Stakeholders",
    Provincial: "Provincial Teritories/Municipal and Indigenous entities",
    International: "International Stakeholders",
    //
    selSector: "Select a Sector",
    notProfit:
      "Not for profit organizations, Municipal governements, Indigenious organizations",
    forProfit: "For-profit organizations",
    provGovCorp:
      "Provincial and territorial government Insititutions agencies and crown corporations",
    fedGovDept:
      "Federal government departments and agencies and other publicly funded entities",
    //
    selProvince: "Select a province",
    AB: "Alberta",
    BC: "British Columbia",
    MB: "Manitoba",
    NB: "New Brunswick",
    NFL: "Newfoundland and Labrador",
    NS: "Nova Scotia",
    ON: "Ontario",
    PEI: "Prince Edward Island",
    QC: "Quebec",
    SK: "Saskatchewan",
    NWT: "Northwest Territories",
    NU: "Nunavut",
    YK: "Yukon",
    //
    true: "Yes",
    false: "No",
    // buttons
    cancel: "Cancel",
    save: " Save",
    back: "Go Back",
    edit: "Edit Contact",
    // view contact
    otherpeople: "other participants",
  },

  contactValidation: {
    errorListTitle: "The following fields have errors:",
    required: "This field is required",
    invalidEmail: "Not a valid email address",
  },

  navBtn: {
    AddConEn: "Add contacts & engagements",
    SearchConEn: "Search contacts & engagements",
  },

  // engagement
  engagement: {
    engagment: "Engagement",
    contactName: "Contact Name",
    subject: "Subject",
    type: "Engagement type",
    date: "Date",
    participants: "Number of participants",
    numParticipants: "Participants",
    description: "Description",
    editDescription: "Description ",
    policy: "Policy / program",
    tags: "Tags",
    tagLabel: "Press enter or click + to add new tags (Maximum 3 tags)",
    comments: "Comments",
    editComments: "Comments ",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    typing: "Start by typing",
    // view contact card
    engagement: "Engagement:",
    contacts: "Contact:",
    numpeople: "Number of participants:",
    otherParticipants: "other participants",
    selectContact: "Select one or more contact",
    notFound: "No Engagement found",
    leaveComment: "Leave a comment...",
    charactersCount: "characters remaining ",
    user: "RMP User",
    saved: "Engagement saved",
  },
  engagementValidation: {
    messageTitle: "The following fields have errors",
    required: "This field is required",
    maxTags: "You cannot create more than 3 tags",
    maxTagLength: "The text length cannot exceed 10 characters",
    minParticipant: "You cannot have less than 1 participant",
    maxDescription: "Description cannot exceed 1000 characters",
    maxComment: "Comment cannot exceed 140 characters",
    validDate: "Please pick a valid date",
    duplicateTags: "Tag already exist, please enter another tag name",
    duplicateContacts:
      "Contact already exist, please select another contact name",
    limit: "Characters reached limit",
  },
  // EngSelectContact component
  engSelect: {
    editEngagement: "Edit engagament",
    engagement: "New engagement",
    contact: "Contact",
    contact2: "Contact number 2",
    remove: "Remove",
    add: "Add more contacts",
  },
  engagementTypes: {
    one: "One-On-One",
    Conference: "Conference",
    ConferenceCall: "Conference Call",
    Workshop: "Workshop",
    Webinar: "Webinar",
    PhoneCall: "Phone Call",
    CommitteeMeeting: "Committee Meeting",
    WorkingGroup: "Working Group",
    SeniorManagementBriefing: "Senior Management Briefing",
    MinisterOfficeBriefing: "Minister Office Briefing",
    ScrumSprint: "Scrum/Sprint",
    Advisory: "Advisory Board/Council Meeting",
  },
  dashboard: {
    title: "Engagement Dashboard",
    download: "Download PDF",
    // time
    sixMonths: "Last 6 months",
    threeMonths: "Last 3 months",
    lastMonth: "Last month",
    // subjects
    allSubjects: "All Subjects",
    EIData: "EI Data",
    CERB: "CERB",
    HomelessGrants: "Homeless Grants",
    // organisations
    AllOrganisations: "All Organisations",
    RBC: "RBC",
    StatsCan: "Stats Canada",
    CRA: "CRA",
    BMO: "BMO",
    OntarioGov: "Ontario Gov",
    OttawaMission: "Ottawa Mission",
  },
  notifications: {
    ContactCreated: "Contact Created",
    ContactUpdated: "Contact Updated",
    EngagementCreated: "Engagement Created",
    EngagementUpdated: "Engagement Updated",
  },
};
