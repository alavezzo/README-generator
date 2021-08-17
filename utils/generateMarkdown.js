// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    } else if (license === 'MIT') {
      return `[![License](https://img.shields.io/badge/license-MIT-blue)](${renderLicenseLink(license)})`
    } else if (license === 'Apache 2.0') {
      return `[![License](https://img.shields.io/badge/license-APACHE_2.0-blue)](${renderLicenseLink(license)})`
    } else if (license === 'ISC License') {
      return `[![License](https://img.shields.io/badge/license-ISC-blue)](${renderLicenseLink(license)})`
    } else if (license === 'GNU GPLv2') {
      return `[![License](https://img.shields.io/badge/license-GNU_GPLv2-blue)](${renderLicenseLink(license)})`
    } else if (license === 'GNU GPLv3') {
      return `[![License](https://img.shields.io/badge/license-GNU_GPLv3-blue)](${renderLicenseLink(license)})`
    } else if (license === 'The Unlicense') {
      return `[![License](https://img.shields.io/badge/license-The_Unlicense-blue)](${renderLicenseLink(license)})`
    } else if (license === 'Mozilla Public License 2.0') {
      return `[![License](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-blue)](${renderLicenseLink(license)})`
    } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/license-Boost_Software_1.0-blue)](${renderLicenseLink(license)})`
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT') {
      return 'https://spdx.org/licenses/MIT.html'
    } else if (license === 'Apache 2.0'){
      return 'https://choosealicense.com/licenses/apache-2.0/'
    } else if (license === 'ISC License') {
      return 'https://choosealicense.com/licenses/isc/'
    } else if (license === 'GNU GPLv2') {
      return 'https://choosealicense.com/licenses/gpl-2.0/'
    } else if (license === 'GNU GPLv3') {
      return 'https://choosealicense.com/licenses/gpl-3.0/'
    } else if (license === 'The Unlicense') {
      return 'https://choosealicense.com/licenses/unlicense/'
    } else if (license === 'Mozilla Public License 2.0') {
      return 'https://choosealicense.com/licenses/mpl-2.0/'
    } else if (license === 'Boost Software 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `## License 
  This application is covered under ${license} `
}
function renderContributionSection(contribution) {
  if (!contribution) {
    return ''
  }
  return `## Contribution Guidelines 
  ${contribution}`
}

function renderTestsSection(tests) {
  if (!tests) {
    return ''
  }
  return `## Test Instructions
  ${tests}`
}

function renderContributionTOC(contribution) {
  if (!contribution) {
    return ''
  }
  return '[Contribution Guidelines:](#contribution-guidelines)'
};
function renderTestsTOC(tests) {
  if (!tests) {
    return ''
  }
  return '1. [Test Instructions:](#test-instructions)'
};
function renderLicenseTOC(license) {
  if (!license) {
    return ''
  }
  return '1. [License:](#license)'
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <details>
<summary><b>Table of Contents</b> (click to open)</summary>
<!-- MarkdownTOC -->

1. [Description:](#description)
1. [Instructions:](#instructions)
1. [Usage:](#usage)
${renderContributionTOC(data.contribution)}
${renderTestsTOC(data.tests)}
${renderLicenseTOC(data.license)}
1. [Questions:](#questions)

<!-- /MarkdownTOC -->
</details>

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Instructions
  ${data.instructions}
  ## Usage
  ${data.usage}
  ${renderContributionSection(data.contribution)}
  ${renderTestsSection(data.tests)}
  ${renderLicenseSection(data.license)}
  ## Questions 
  Link to my GitHub: [github.com/alavezzo](https://github.com/${data.github})
  Email Address: ${data.email}
  Contact Instructions: ${data.contact}
`;
}

module.exports = generateMarkdown;
