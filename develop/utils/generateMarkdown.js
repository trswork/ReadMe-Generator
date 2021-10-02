// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    return `# ${License}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${Description}
  #Table of Contents
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[Credits](#Credits)
  *[License](#License)
  #Installation
  Provide a step-by-step description of how to get the development environment running.${Installation}
  #Instruction
  ${Instruction}
  #Usage
  Provide instructions and examples for use. ${Usage}
  #Contribution
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. ${Contribution}
  #Credits
  List your collaborators, if any, with links to their GitHub profiles.${Credits}
  #License
  This lets other developers know what they can and cannot do with your project. ${License}
  #Tests
  Provide examples on how to run them.${Test}
  #Questions
  ${Question}

  #Contact
  *GitHub:
  ${Github}
  *E-mail:
  ${Email}
`;
}

module.exports = generateMarkdown;
