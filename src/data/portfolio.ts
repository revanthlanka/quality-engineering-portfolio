export const capabilities = [
  { id: 'ivr', label: 'IVR', title: 'Voice Journey Quality', description: 'Customer authentication, DTMF, speech recognition, call routing and banking journeys.', tags: ['Cyara', 'Velocity Campaigns', 'DTMF', 'Speech'] },
  { id: 'api', label: 'API', title: 'Service Contract Confidence', description: 'Request/response validation, JSON, HTTP status codes, headers, authentication and business rules.', tags: ['Postman', 'Bruno', 'REST', 'JSON'] },
  { id: 'automation', label: 'AUTOMATION', title: 'Repeatable Regression', description: 'Reusable BDD step definitions, data-driven scenarios and scalable automated execution.', tags: ['Cucumber', 'JavaScript', 'Node.js', 'Gulp'] },
  { id: 'delivery', label: 'CI/CD', title: 'Pipeline Quality Gates', description: 'Automated execution, Jenkins-to-Harness migration, Git workflows and environment deployment validation.', tags: ['Jenkins', 'Harness', 'Git', 'UrbanCode'] },
  { id: 'diagnostics', label: 'RCA', title: 'Evidence-Driven Diagnosis', description: 'Trace middleware and host behavior through logs, service virtualization and backend validation.', tags: ['Splunk', 'Linux', 'PuTTY', 'Parasoft'] },
  { id: 'leadership', label: 'LEADERSHIP', title: 'Quality Enablement', description: 'Mentoring, code reviews, defect triage, test strategy, reporting and Agile delivery.', tags: ['JIRA-Xray', 'HP ALM', 'Agile', 'Mentoring'] },
]

export const stack: Array<[string, string[]]> = [
  ['IVR & Voice', ['Cyara','Velocity Campaigns','DTMF','Speech Recognition','Call Routing']],
  ['API & Automation', ['REST API','Postman','Bruno','JavaScript','Java','Node.js','Gulp','Cucumber BDD','JSON']],
  ['Quality Engineering', ['Functional','Integration','Regression','Negative','Smoke','Sanity','SIT','E2E','Risk-Based Testing']],
  ['CI/CD & Deployment', ['Jenkins','Harness','UrbanCode Deploy','Git','Pull Requests','Peer Reviews']],
  ['Observability & RCA', ['Splunk','Red Hat Linux','OpenShift','PuTTY','Log Analysis','Root Cause Analysis']],
  ['Service Virtualization', ['Parasoft Virtualize','Stubbing','Virtual Assets','Live Invocation','Message Proxy']],
  ['Defects & Collaboration', ['JIRA','Xray','HP ALM','Agile / Scrum','BDD']],
  ['Growing Capability', ['Playwright','Cucumber BDD','UI Automation']],
]

export const experience = [
  ['01','End-to-End Banking Quality Engineering','Led quality engineering across IVR, middleware and host systems covering functional, smoke, sanity, regression, SIT, integration and E2E testing.'],
  ['02','IVR Automation at Scale','Automated authentication, balance enquiry, card services, retail, non-retail, mortgages, motor finance, pensions, insurance, payments and call routing journeys using Cyara and Velocity Campaigns.'],
  ['03','Reusable API Automation','Developed and maintained API automation frameworks using Node.js, JavaScript, Cucumber BDD and Gulp with reusable steps and data-driven scenarios.'],
  ['04','Failure Investigation & RCA','Analyzed middleware and host logs using Red Hat Linux, PuTTY and Splunk to diagnose complex failures and support defect resolution.'],
  ['05','Modern Delivery Pipelines','Executed suites through Jenkins and migrated workflows to Harness; supported DEV-to-CIT deployment validation with UrbanCode Deploy.'],
  ['06','Technical Leadership','Mentored four testers through technical guidance, knowledge transfer and automation code reviews while participating in Agile/Scrum ceremonies.'],
]
