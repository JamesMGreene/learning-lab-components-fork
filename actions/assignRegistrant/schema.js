const Joi = require('joi')

module.exports = Joi.object({
  issue: Joi.alternatives(Joi.string(), Joi.number())
    .meta({ label: 'Issue' })
    .description('The number or title of the issue to assign.')
})
  .description('Assigns the registered user to an issue or pull request')
  .example(
    [
      { issue: 'Title of an issue' },
      { context: 'Use the title of an issue' }
    ],
    [
      { issue: 4 },
      { context: 'Use an issue number' }
    ]
  )
  .example(
    [
      {
        issue: 'Title of an issue'
      },
      { context: '' }
    ],
    [
      {
        issue: 4
      },
      { context: '' }
    ]
  )
