const Joi = require('joi')

module.exports = Joi.object({
  html: Joi.string()
    .meta({ label: 'HTML' })
    .description('An HTML string to parse. This is often used in conjunction with `getFileContents`.')
    .required(),
  tag: Joi.string()
    .meta({ label: 'HTML Tag' })
    .description('The HTML tag to look for.')
    .required(),
  attribute: Joi.string()
    .meta({ label: 'Attribute' })
    .description('An optional HTML attribute to check for.')
})
  .description('Checks if the provided HTML string contains a specific HTML tag')
  .example(
    [
      {
        html: '<html><div>Hello!</div></html>',
        tag: 'div'
      },
      { context: '' }
    ],
    [
      {
        html: '<html><img src="example.png" /></html>',
        tag: 'img',
        attribute: 'src'
      },
      { context: '' }
    ]
  )
