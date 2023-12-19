// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.Title} ## Description ${response.Description} ## Installation${response.Installation} ## Usage${response.Usage} ## License${response.License}`;

  fs.writeFile(`README.md`, (answers, null,`\t`), (err)=>{
});
}

module.exports = generateMarkdown;
